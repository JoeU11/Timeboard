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
  //   }
  // ])

  // function createEventId() {
  //   return String(eventGuid++)
  // }

  // INITIAL BLANK SLATE EVENTS
  const [tasks, setTasks] = useState([{ id: 1, task: null, timeEstimate: null }, { id: 2, task: null, timeEstimate: null }, { id: 3, task: null, timeEstimate: null }])

  return (
    <div className="App">
      <PickTasks tasks={tasks} />
      <Schedule tasks={tasks} />
    </div>
  );
}

export default App;
