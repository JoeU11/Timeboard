import React, { useState } from 'react'

export default function PickTasks() {
  const [tasks, setTasks] = useState(null)

  function handleSubmit() {
    console.log("blocking off time for tasks")
  }

  return (
    <div className="pickTasks">
      <h1 className="pickTasks-Title">What are 3 - 5 things you want to get done today?</h1>
      <form onSubmit={handleSubmit()}>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-success">Success</button>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}