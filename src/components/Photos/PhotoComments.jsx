import React, { useContext, useState } from "react"
import { UserContext } from "../../UserContext"
import PhotoCommentsForm from "./PhotoCommentsForm"

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext)

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} />}
    </div>
  )
}

export default PhotoComments
