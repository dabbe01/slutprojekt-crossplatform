import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = props => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    token: '',
  })

  const changeEmail = (email) => {
    setUser({ ...user, email: email })
  }

  const changePassword = (password) => {
    setUser({ ...user, password: password })
  }

  const changeToken = (token) => {
    setUser({ ...user, token: token })
  }

  return (
    <AuthContext.Provider value={{ user, changeEmail, changePassword, changeToken }} >
      {props.children}
    </AuthContext.Provider>
  )
}
