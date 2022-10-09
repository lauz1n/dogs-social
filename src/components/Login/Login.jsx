import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
import { LoginForm, LoginCreate, LoginPwlost, LoginPwreset } from "./index"

const Login = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/account" />
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginPwlost />} />
        <Route path="reset" element={<LoginPwreset />} />
      </Routes>
    </div>
  )
}

export default Login
