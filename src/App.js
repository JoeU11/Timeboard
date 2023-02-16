import './App.css';
import PickTasks from './components/pickTasks.js'
import Schedule from './components/schedule.js'
import React, { useEffect, useState } from 'react'

function App() {

  // HARDCODED EVENT FROM DOCUMENTATION
  let eventGuid = 0
  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
  const [events, setEvents] = useState([
    {
      id: createEventId(),
      title: 'Timed event',
      start: todayStr + 'T12:00:00'
    }
  ])

  function createEventId() {
    return String(eventGuid++)
  }

  return (
    <div className="App">
      <PickTasks />
      <Schedule events={events} />
    </div>
  );
}

export default App;
