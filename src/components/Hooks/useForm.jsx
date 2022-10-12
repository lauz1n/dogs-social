import React, { useState } from "react"

const authentication = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Fill in a valid email address",
  },
  number: {
    regex: /^\d+$/,
    message: "Only numbers are allowed",
  },
}

const useForm = (type) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError("Fill the input")
      return false
    } else if (
      authentication[type] &&
      !authentication[type].regex.test(value)
    ) {
      setError(authentication[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
