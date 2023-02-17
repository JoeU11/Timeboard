import './App.css';
import PickTasks from './components/pickTasks.js'
import Schedule from './components/schedule.js'
import React, { useEffect, useState } from 'react'

function App() {

  // HARDCODED EVENT FROM DOCUMENTATION

  // let eventGuid = 0
  // let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
  // const [tasks, setTasks] = useState([
  //   {
  //     id: createEventId(),
  //     title: 'Timed event',
  //     start: todayStr + 'T12:00:00'
  //     end: todayStr + 'T13:00:00'
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
  let todayStr = currentDate.toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
  var hours = ""
  var minutes = ""

  if (currentDate.getHours().toString() < 10) {
    hours = '0' + currentDate.getHours().toString()
  }
  else {
    hours = currentDate.getHours().toString()
  }
  if (currentDate.getMinutes().toString() < 10) {
    minutes = '0' + currentDate.getMinutes().toString()
  }
  else {
    minutes = currentDate.getMinutes().toString()
  }


  let time = hours + ":" + minutes
  console.log(time)

  const handleUserTasks = (userTasks) => {
    setHideModal(true)
    let i = 0
    let timeOffset = 1
    setTasks(tasks.map(task => {
      task.title = userTasks.get(`task_${i}_description`)
      task.timeEstimate = parseInt(userTasks.get(`task_${i}_timeEstimate`))
      task.start = calcStart(timeOffset)
      task.end = calcEnd(task.start, task.timeEstimate)
      timeOffset++ //TODO: adjust to account for previous event duration
      i++
    }))
    setTaskEvents(
      tasks
    )
  }

  function calcStart(timeOffset) {
    // returns a startTime that is local time + timeOffset (note: only modifies the hour currently)
    let newHours = parseInt(time.slice(0, 2)) + timeOffset
    if (newHours < 10) {
      newHours = "0" + newHours.toString()
    }
    else {
      newHours = newHours.toString()
    }

    var startTime = `T${replaceAt(time, 0, newHours)}`
    return todayStr + startTime
  }

  function calcEnd(startTime, duration) {
    // returns and endTime that is startTime + duration (note: only modifies the hour currently)
    let newHours = parseInt(startTime.slice(11, 13)) + duration
    if (newHours < 10) {
      newHours = "0" + newHours.toString()
    }
    else {
      newHours = newHours.toString()
    }
    var endTime = replaceAt(startTime, 11, newHours)
    return endTime
  }

  function replaceAt(string, index, replacement) {
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
