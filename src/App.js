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
  Photo,
  UserProfile,
  NotFound,
} from "./components/index"

function App() {
  return (
    <div className="App">
      <Router>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </Router>
    </div>
  )
}

export default App
