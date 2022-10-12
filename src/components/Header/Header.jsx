import React, { useContext } from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { ReactComponent as Dogs } from "../../assets/dogs.svg"
import { UserContext } from "../../UserContext"

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/account" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Create
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
