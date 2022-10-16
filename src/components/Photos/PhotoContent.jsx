import React, { useContext } from "react"
import { PhotoComments, PhotoDelete, Image } from "../index"
import { UserContext } from "../../UserContext"
import { Link } from "react-router-dom"
import styles from "./PhotoContent.module.css"

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext)
  const { photo, comments } = data
  return (
    <div className={`${single ? styles.single : ""} ${styles.photo}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

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
        <PhotoComments id={photo.id} single={single} comments={comments} />
      </div>
    </div>
  )
}

export default PhotoContent
