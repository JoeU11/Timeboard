import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'


export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridDay"
        allDaySlot={false}
        nowIndicator={true}
        headerToolbar={{
          left: '',
          center: 'title',
          right: ''
        }}
        scrollTime='07:00:00' // set to current time
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        initialEvents={this.props.tasks}
      />
    )
  }
}