import React from "react"
import { Feed } from "../index"
import Head from "../Helper/Head"

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Photos " description="Home Feed" />
      <Feed />
    </section>
  )
}

export default Home
