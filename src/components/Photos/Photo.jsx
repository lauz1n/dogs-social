import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"
import Head from "../Helper/Head"
import { GET_PHOTO } from "../../api"
import { Error, Loading, PhotoContent } from "../index"

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = GET_PHOTO(id)
    request(url, options)
  }, [id, request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    )
  else return null
}

export default Photo
