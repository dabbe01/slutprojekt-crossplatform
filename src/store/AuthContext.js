import React, { useState, createContext } from 'react'
import API from '../components/api'

export const AuthContext = createContext()

export const AuthProvider = props => {
  const [user, setUser] = useState({
    email: 'admin@localhost.se',
    password: 'password',
    token: '',
  })

  const login = async (username, password) => {
    const { email, token } = await API.login(username, password)
    setUser({ email, token })
    return true
  }

  const changeEmail = (email) => {
    setUser({ ...user, email: email })
  }

  const changePassword = (password) => {
    setUser({ ...user, password: password })
  }

  return (
    <AuthContext.Provider value={{ user, changeEmail, changePassword, login }} >
      {props.children}
    </AuthContext.Provider>
  )
}
