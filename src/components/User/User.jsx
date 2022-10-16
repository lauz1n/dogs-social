import React, { useContext } from "react"
import Feed from "../Feed/Feed"
import UserPhotoPost from "./UserPhotoPost"
import UserStats from "../User/UserStats"
import UserHeader from "./UserHeader"
import NotFound from "../NotFound"
import Head from "../Helper/Head"
import { UserContext } from "../../UserContext"
import { Routes, Route } from "react-router-dom"

const User = () => {
  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <Head title="My Account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
