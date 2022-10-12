import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { UserStorage } from "./UserContext"

import {
  Footer,
  Header,
  Home,
  Login,
  User,
  ProtectedRoute,
} from "./components/index"

function App() {
  return (
    <div>
      <Router>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="account/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </Router>
    </div>
  )
}

export default App
