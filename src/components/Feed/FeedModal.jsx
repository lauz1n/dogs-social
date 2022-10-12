import React, { useEffect } from "react"
import useFetch from "../Hooks/useFetch"
import styles from "./FeedModal.module.css"
import { PHOTO_GET_MODAL } from "../../api"

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET_MODAL(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div className={styles.modal}>
      <img src={photo.src} />
    </div>
  )
}

export default FeedModal
