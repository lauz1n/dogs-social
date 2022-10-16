import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
import { LoginForm, LoginCreate, LoginPwlost, LoginPwreset } from "./index"
import NotFound from "../NotFound"
import styles from "./Login.module.css"

const Login = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/account" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPwlost />} />
          <Route path="reset" element={<LoginPwreset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
