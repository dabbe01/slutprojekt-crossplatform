import React, { useState, createContext } from 'react'
import API from '../api'

export const AuthContext = createContext()

export const AuthProvider = props => {
  const [user, setUser] = useState({
    role: '',
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: '',
  })

  const login = async (username, pw) => {
    const { email, token } = await API.login(username, pw)
    const { role, _id, firstName, lastName, password } = await API.getUser(token)
    setUser({ email, token, role, _id, firstName, lastName, password })
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
