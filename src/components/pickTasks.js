import React, { useState } from 'react'
import './pickTasks.css'

export default function PickTasks(props) {


  function handleSubmit(event) {
    console.log("blocking off time for tasks")
    event.preventDefault()
    const formData = new FormData(event.target)
    props.onSubmit(formData)
  }

  function handleAddRow(event) {
    console.log("adding row")
    event.preventDefault()
    props.onAddRow(event)
  }

  const pickTaskElements = props.tasks.map(task => {
    return (
      <li key={task.id}><input type="text" name={`task_${task.id}_description`} className="task-input"></input></li>
    )
  })

  const pickTimeEstimates = props.tasks.map(task => {
    return (
      <li key={task.id} className="time-estimate-list"><input type="text" name={`task_${task.id}_timeEstimate`} className="time-estimate-input"></input></li>
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
                {console.log(props.tasks)}
              </ol>
            </div>
            <div id="estimates">
              <h3>Time Estimate (hours)</h3>
              {pickTimeEstimates}
            </div>
          </div>
          <button className="add" onClick={handleAddRow}>Add row</button>
          <button className="close" type="submit">Submit</button>
        </form >
      </section>
    </div >
  )
}

