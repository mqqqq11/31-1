import { useState } from "react"

export const Post = ( {postsInfo} ) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>{postsInfo.title}</h1>
      <button onClick={() => setShow(!show)}>{show ? 'close' : 'more info'}</button>
      {show && <p>{postsInfo.body}</p>}
      <p>---------------------------------------------</p>
    </div>
  )
}