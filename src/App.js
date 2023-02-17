import './App.css';
import PickTasks from './components/pickTasks.js'
import Schedule from './components/schedule.js'
import React, { useEffect, useState } from 'react'

function App() {

  // HARDCODED EVENT FROM DOCUMENTATION

  // let eventGuid = 0
  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
  // const [tasks, setTasks] = useState([
  //   {
  //     id: createEventId(),
  //     title: 'Timed event',
  //     start: todayStr + 'T12:00:00'
  //   }
  // ])

  // function createEventId() {
  //   return String(eventGuid++)
  // }

  // INITIAL BLANK SLATE EVENTS
  const [tasks, setTasks] = useState([{ id: 0 }, { id: 1 }, { id: 2 }])
  const [hideModal, setHideModal] = useState(false)
  const [taskEvents, setTaskEvents] = useState(null)
  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  const handleUserTasks = (userTasks) => {
    setHideModal(true)
    let i = 0
    let timeOffset = 1
    setTasks(tasks.map(task => {
      task.title = userTasks.get(`task_${i}_description`)
      task.timeEstimate = userTasks.get(`task_${i}_timeEstimate`)


      console.log(replaceAt(time, 1, (parseInt(time[1]) + timeOffset).toString()))

      task.start = todayStr + `T${replaceAt(time, 1, (parseInt(time[1]) + timeOffset).toString())}`
      timeOffset++
      i++
    }))
    setTaskEvents(
      tasks
    )
  }

  function replaceAt(string, index, replacement) {
    console.log(string)
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
  }

  const handleAddTaskRow = (event) => {
    setTasks([...tasks, { id: tasks.length + 1 }])
  }

  function testDate() {
    console.log(time);
  }

  return (
    <div className="App">
      {hideModal || <PickTasks tasks={tasks} onSubmit={handleUserTasks} onAddRow={handleAddTaskRow} />}
      {!hideModal || <Schedule tasks={taskEvents} />}
      <button onClick={() => { console.log(taskEvents) }}>print taskEvents</button>
      <button onClick={testDate}>run test function</button>
    </div>
  );
}

export default App;
