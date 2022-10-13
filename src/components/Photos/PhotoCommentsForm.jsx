import React, { useState } from "react"
import { COMMENT_POST } from "../../api"
import useFetch from "../Hooks/useFetch"
import { ReactComponent as Send } from "../../assets/enviar.svg"

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = useState("")
  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    await request(url, options)
    console.log(request)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comment here..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Send />
      </button>
    </form>
  )
}

export default PhotoCommentsForm
