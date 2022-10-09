import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginForm from "./LoginForm"
import LoginCreate from "./LoginCreate"
import LoginPwlost from "./LoginPwlost"
import LoginPwreset from "./LoginPwreset"

const Login = () => {
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
