import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Input, Button, useForm } from "../index"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  function handleSubmit(event) {
    if (username.validate() && password.validate()) {
      event.preventDefault()
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((json) => {
          console.log(json)
        })
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Log In</Button>
      </form>
      <Link to="/login/create">Sign Up</Link>
    </section>
  )
}

export default LoginForm
