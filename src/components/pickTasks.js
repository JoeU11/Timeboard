import React, { useState } from 'react'
import './pickTasks.css'

export default function PickTasks() {
  const [tasks, setTasks] = useState([{ id: 1, task: null, timeEstimate: null }, { id: 2, task: null, timeEstimate: null }, { id: 3, task: null, timeEstimate: null }])

  function handleSubmit(event) {
    console.log("blocking off time for tasks")
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(formData)
    const newTasks = []
    for (const value of formData) {
      console.log(value);
    }
  }

  function addTaskRow(event) {
    console.log("adding row")
    event.preventDefault()
    setTasks([...tasks, { id: tasks.length + 1, task: null, timeEstimate: null }])
    console.log(tasks)
  }

  const pickTaskElements = tasks.map(task => {
    return (
      <li key={task.id}><input type="text" name={`task${task.id}Description`} className="task-input"></input></li>
    )
  })

  const pickTimeEstimates = tasks.map(task => {
    return (
      <li key={task.id} className="time-estimate-list"><input type="text" name={`task${task.id}timeEstimate`} className="time-estimate-input"></input></li>
    )
  })

  return (
    <div className="pickTasks-background">
      <section className="pickTasks-main">
        <h1 className="pickTasks-Title">What do you want to get done today?</h1>
        <form onSubmit={handleSubmit}>
          <div id="pickTasks-container">
            <div>
              <h3 style={{ marginLeft: '70%' }}>Task</h3>
              <ol>
                {pickTaskElements}
              </ol>
            </div>
            <div id="estimates">
              <h3>Time Estimate (hours)</h3>
              {pickTimeEstimates}
            </div>
          </div>
          <button className="add" onClick={addTaskRow}>Add more</button>
          <button className="close" type="submit">Submit</button>
        </form >
      </section>
    </div >
  )
}

