import React from "react"
import { PhotoComments } from "../index"
import { Link } from "react-router-dom"
import styles from "./PhotoContent.module.css"

const PhotoContent = ({ data }) => {
  const { photo, comments } = data
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            {photo.idade === 1 ? (
              <li>{photo.idade} year old</li>
            ) : (
              <li> {photo.idade} years old</li>
            )}
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </div>
  )
}

export default PhotoContent
