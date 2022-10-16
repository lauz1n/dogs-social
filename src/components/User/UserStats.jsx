import React, { useEffect } from "react"
import Head from "../Helper/Head"
import { useFetch, Loading, Error } from "../index"
import { GET_STATS } from "../../api"
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="User Stats" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  else return null
}

export default UserStats
