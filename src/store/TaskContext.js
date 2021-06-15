import React, { useState, createContext } from 'react'

export const TaskContext = createContext()

export const TaskProvider = props => {
  const [task, setTask] = useState([
    {
      id: "1",
      status: "initiating",
      name: "Task 21321321331",
    },
    {
      id: "2",
      status: "initiating",
      name: "Task 1232132",
    },
    {
      id: "3",
      status: "initiating",
      name: "Task 3546464",
    },
  ])
  return (
    <TaskContext.Provider value={[task, setTask]} >
      {props.children}
    </TaskContext.Provider>
  )
}
