import React, { useEffect } from "react"
import useFetch from "../Hooks/useFetch"
import { PHOTO_GET } from "../../api"
import { Error, Loading } from "../index"
import FeedPhotosItem from "./FeedPhotosItem"
import styles from "./FeedPhotos.module.css"

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 })
      const { response, json } = await request(url, options)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animateLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos
