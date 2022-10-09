import React, { useState, useEffect, useCallback } from "react"
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api"
import { useNavigate } from "react-router-dom"

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setData(null)
      setError(null)
      setLoading(false)
      setLogin(false)
      window.localStorage.removeItem("token")
      navigate("/login")
    },
    [navigate]
  )

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const res = await fetch(url, options)
    const json = await res.json()
    setData(json)
    setLogin(true)
    console.log(json)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error(`Invalid user`)
      const { token } = await tokenRes.json()
      window.localStorage.setItem("token", token)
      await getUser(token)
      navigate("/account")
    } catch (err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token")
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const res = await fetch(url, options)
          if (!res.ok) throw new Error("Invalid Token")
          await getUser(token)
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}
