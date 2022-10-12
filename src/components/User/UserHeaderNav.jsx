import React, { useContext, useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { UserContext } from "../../UserContext"
import { ReactComponent as MyPhotos } from "../../assets/feed.svg"
import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg"
import { ReactComponent as Stats } from "../../assets/estatisticas.svg"
import { ReactComponent as Logout } from "../../assets/sair.svg"
import useMedia from "../Hooks/useMedia"
import styles from "./UserHeaderNav.module.css"

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)")
  const { userLogout } = useContext(UserContext)
  const [mobileMenu, setMobileMenu] = useState(false)

  const { pathname } = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileBtn} ${
            mobileMenu && styles.mobileBtnActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && "My Photos"}
        </NavLink>
        <NavLink to="/account/stats">
          <Stats />
          {mobile && "Stats"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhoto />
          {mobile && "Add Photo"}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && "Logout"}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
