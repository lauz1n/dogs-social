import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import UserHeaderNav from "./UserHeaderNav"
import styles from "./UserHeader.module.css"

const Header = () => {
  const [title, setTitle] = useState("")
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case "/account/post":
        setTitle("Add Photo")
        break
      case "/account/stats":
        setTitle("Stats")
        break
      case "/account":
        setTitle("My Account")
        break
      default:
        setTitle("Account")
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default Header
