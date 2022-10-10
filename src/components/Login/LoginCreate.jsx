import React from "react"
import Input from "../FormComponents/Inputs/Input"
import Button from "../FormComponents/Button/Button"
import useForm from "../Hooks/useForm"

const LoginCreate = () => {
  const username = useForm()

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Create your account!</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" />
        <Button>Sign Up</Button>
      </form>
    </section>
  )
}

export default LoginCreate
