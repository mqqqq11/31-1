import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async (info, {dispatch}) => {
        try {
            dispatch(preloaderOn())
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    
            if (responce.status >= 200 || responce.status <= 204) {
                const posts = await responce.json(); 
                dispatch(postsInfo(posts))
            }else if (responce.status >= 400) {
                throw '404 not found'
            }
        }
        catch (error) {
            dispatch(setError(error))
        }
        finally {
            dispatch(preloaderOff())
        }

    }
    
)

export const createPosts = createAsyncThunk(
    'createPosts',
    async (info, {dispatch}) => {
        try {
            dispatch(preloaderOn())
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            }

            const responce = await fetch('https://jsonplaceholder.typicode.com/posts', options)

            if (responce.status >= 200 && responce.status <= 204) {
                dispatch(setError('post created'))
            }else if (responce.status >= 404) {
                throw '404 not found'
            }
        }
        catch (error) {
            setError(error)
        }
        finally {
            dispatch(preloaderOff())
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        preloader: false,
        error: ''
    },
    reducers: {
        postsInfo(state, action) {
            state.posts = action.payload
        },
        preloaderOn(state) {
            state.preloader = true
        },
        preloaderOff(state) {
            state.preloader = false
        },
        setError(state, action) {
            state.error = action.payload
        }

    }
})

export const {postsInfo, preloaderOff, preloaderOn, setError} = postsSlice.actions
export default postsSlice.reducer