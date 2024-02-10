import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async (info, {dispatch}) => {
        try {
            dispatch(setLoadingOn())
            const response = await fetch('https://fakestoreapi.com/products/')
            if (response.status >= 200 && response.status <= 204) {
                const data = await response.json()
                dispatch(setProducts(data))
            } else if (response.status === 404) {
                alert('Page not found 404')
            }
        }
        catch(error) {
            alert(error)
        }
        finally {
            dispatch(setLoadingOff())
        }
    }
)

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setLoadingOn: (state) => {
            state.loading = true
        },
        setLoadingOff: (state) => {
            state.loading = false
        }
    }
})

export const {setProducts, setLoadingOff, setLoadingOn} = ProductsSlice.actions
export default ProductsSlice.reducer