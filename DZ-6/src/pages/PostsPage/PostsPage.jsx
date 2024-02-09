import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../store/postsSlice"
import {Post}  from "../../components/Post.jsx"
import { useEffect } from "react"



export const PostsPage = () => {
  const { posts, preloader, error } = useSelector(state => state.postsReducer)
  const dispatch = useDispatch()

  const getPostsFunc = () => {
    dispatch(getPosts())
  }

  useEffect(() => {
    getPostsFunc()
  }, [])

  return (
    <>
   
        {preloader ?  <p>loading...</p> :
          error ? <p>{error}</p> :
          posts.map(post => <Post key={post.id} postsInfo={post}/>)
        }
    </>
  )
}
