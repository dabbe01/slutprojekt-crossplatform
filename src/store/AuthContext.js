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
    return user
  }

  const changeEmail = (email) => {
    setUser({ ...user, email: email })
  }

  const changePassword = (password) => {
    setUser({ ...user, password: password })
  }

  const setToken = (token) => {
    setUser({ ...user, token: token })
  }

  const getValueForToken = async () => {
    const res = await SecureStore.getItemAsync("token");
    if (res) {
      const validToken = await validateToken(res);
      if (validToken) {
        setUser({ ...user, token: res });
      } else {
        setUser({ ...user, token: null })
      }
    }
  };

  const validateToken = async (token) => {
    try {
      const res = await API.getUser(token);
      return res;
    } catch (err) {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, changeEmail, changePassword, login, getValueForToken, setToken }} >
      {props.children}
    </AuthContext.Provider>
  )
}
