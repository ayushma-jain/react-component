import React from 'react'
import { momentLocalizer,Calendar } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  return (
    <div>
    <Calendar
      localizer={localizer}
   
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
    />
  </div>
  )
}
