import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPosts } from "../../store/postsSlice"


export const CreatePostsPage = () => {
    const {error, preloader, value} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const changeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(createPosts(form))

        setForm({})
    }
  return (
    <>
        <form onSubmit={submitForm}>
            <input type="text" name="title" onChange={changeForm} value={form.title || ''}/>
            <textarea cols='30' rows='10' name="description" onChange={changeForm} value={form.description || ''} />
            <button type="submit">Create post</button>
        </form>
        {preloader && <p>loading...</p>}
        {error && <p>{error}</p>}
    </>
  )
}
