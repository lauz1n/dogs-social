import React, { useState, useEffect } from "react"
import { Input, Button, useForm, useFetch, Error } from "../index"
import { PW_RESET } from "../../api"
import { useNavigate } from "react-router-dom"
import Head from "../Helper/Head"

const LoginPwreset = () => {
  const [login, setLogin] = useState("")
  const [key, setKey] = useState("")
  const password = useForm()
  const { error, loading, data, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get("key")
    const login = params.get("login")

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate) {
      const { url, options } = PW_RESET({
        login,
        key,
        password: password.value,
      })
      const { response } = await request(url, options)
      if (response.ok) navigate("/login")
    }
  }

  return (
    <section className="animateLeft">
      <Head title="Password Reset" />
      <h1 className="title">Reset your Password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New Password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Reseting...</Button>
        ) : (
          <Button>Reset</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPwreset
