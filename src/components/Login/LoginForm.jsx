import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Input, Button, useForm } from "../index"
import { UserContext } from "../../UserContext"
import Error from "../Helper/Error"
import styles from "./LoginForm.module.css"
import stylesBtn from "../FormComponents/Button/Button.module.css"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Log In</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Lost your password?
      </Link>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Sign Up!</h2>
        <p>Don't have an Account yet?</p>
        <Link className={stylesBtn.button} to="/login/create">
          Sign Up
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
