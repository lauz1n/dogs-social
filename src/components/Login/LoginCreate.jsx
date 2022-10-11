import React, { useContext } from "react"
import Input from "../FormComponents/Inputs/Input"
import Button from "../FormComponents/Button/Button"
import useForm from "../Hooks/useForm"
import { USER_POST } from "../../api"
import { UserContext } from "../../UserContext"

const LoginCreate = () => {
  const username = useForm()
  const email = useForm("email")
  const password = useForm()
  const { userLogin } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const res = await fetch(url, options)
    if (res.ok) userLogin(username.value, password.value)
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Create your account!</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Sign Up</Button>
      </form>
    </section>
  )
}

export default LoginCreate
