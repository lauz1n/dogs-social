import React from "react"
import { Input, Button, useForm, useFetch, Error } from "../index"
import { PW_LOST } from "../../api"
import Head from "../Helper/Head"

const LoginPwlost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    if (login.validate()) {
      const { url, options } = PW_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      })
      const { json } = await request(url, options)
    }
  }

  return (
    <section className="animateLeft">
      <Head title="Password Lost" />
      <h1 className="title">Lost your password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/User" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  )
}

export default LoginPwlost
