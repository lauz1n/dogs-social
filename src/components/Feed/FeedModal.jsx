import React, { useEffect } from "react"
import useFetch from "../Hooks/useFetch"
import styles from "./FeedModal.module.css"
import { PHOTO_GET_MODAL } from "../../api"
import { Loading, Error } from "../index"
import PhotoContent from "../Photos/PhotoContent"

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET_MODAL(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
