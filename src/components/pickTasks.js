import React, { useState } from 'react'

export default function PickTasks() {
  const [tasks, setTasks] = useState(null)

  return (
    <div className="pickTasks">
      <h1 className="pickTasks-Title">What are 3 - 5 things you want to get done today?</h1>
      <label></label><input className="" type="text"></input>
      <input className="" type="text"></input>
      <input className="" type="text"></input>
    </div>
  )
}