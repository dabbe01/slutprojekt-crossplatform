import React, { useState, createContext, useContext } from 'react'
import { AuthContext } from '../store/AuthContext'
import API from '../api'

export const TaskContext = createContext()

export const TaskProvider = props => {

  const [task, setTask] = useState([])

  const getAllTasks = async (token) => {
    const res = await API.getTasks(token)
    setTask(res)
    return true
  }

  return (
    <TaskContext.Provider value={{ task, setTask, getAllTasks }} >
      {props.children}
    </TaskContext.Provider>
  )
}
