import React, {useState} from 'react';

import { momentLocalizer,Calendar } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarEvent from './CalendarEvent';
const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const handleSelectEvent = () => {
    setIsOpen(true);
  }
  const handleSelectSlot = (event) => {
    console.log( new Date(event.start));
    setStartDate(( new Date(`${event.start}`)));
    setEndDate(( new Date(`${event.end}`)));
    setIsOpen(true);
  }
  const handleClose = () => {
    setIsOpen(false);
  }
  const handleEvents = (event) => {
    console.log(setIsOpen(false));
    setEvents((prev) => [...prev, { 'title' : "My First Event" }]);
    setIsOpen(false);
  }
  return (
    <div>
    <Calendar
      events={events}
      localizer={localizer}
      onSelectEvent={handleSelectEvent}
      onSelectSlot={handleSelectSlot}
      startAccessor="start"
      endAccessor="end"
      selectable
      style={{ height: 700 }}
    />
    <CalendarEvent isOpen={isOpen} handleClose={handleClose} handleEvents={handleEvents} startDate={startDate}
    endDate={endDate}/>
  </div>
  )
}
