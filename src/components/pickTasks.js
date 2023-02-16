import React, { useState } from 'react'
import './pickTasks.css'

export default function PickTasks() {
  const [tasks, setTasks] = useState(null)

  function handleSubmit() {
    console.log("blocking off time for tasks")
  }

  return (
    <div className="pickTasks-background">
      <section className="pickTasks-main">
        <h1 className="pickTasks-Title">What do you want to get done today?</h1>
        <form onSubmit={handleSubmit()}>
          <div id="pickTasks-container">
            <div>
              <h3 style={{ marginLeft: '70%' }}>Task</h3>
              <ol>
                <li><input type="text" className="task-input"></input></li>
                <li><input type="text" className="task-input"></input></li>
                <li><input type="text" className="task-input"></input></li>
              </ol>
            </div>
            <div id="estimates">
              <h3>Time Estimate (hours)</h3>
              <li className="time-estimate-list"><input type="text" className="time-estimate-input"></input></li>
              <li className="time-estimate-list"><input type="text" className="time-estimate-input"></input></li>
              <li className="time-estimate-list"><input type="text" className="time-estimate-input"></input></li>
            </div>
          </div>
          <button className="add">Add more</button> {/* add functionality to add additional tasks  */}
          <button className="close" type="submit">Submit</button>
        </form >
      </section>
    </div >
  )
}

