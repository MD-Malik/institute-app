import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../apiLink'
import styles from "./Events.module.css"

export const EventsPage = () => {
  const [eventData, setEventData] = useState([])
  const getEventsData = async(value) => {
    let result = await fetch(`${api}/events?eventType=${value}`);
    result = await result.json();
    setEventData(result)
  }

  useEffect(() => {
    getEventsData("Upcoming");
  }, [])

  const navigate = useNavigate()
  return (
    <div>
        <h1>Events</h1>
        <div className={styles.filterBtnAndCount}>
          <div>
            <label>Filter : </label>
            <select name="" id="" onClick={(e)=>getEventsData(e.target.value)}>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Done">Done</option>
          </select>
          </div>
          <div>
            Count : {eventData.length}
          </div>
        </div>
        <div className={styles.eventInnerDiv}>
            {eventData.map(item=>(
              <div key={item.id} style={item.eventType=="Upcoming"?{background: "lightGreen"}:item.eventType=="Ongoing"?{background:"orange"}:{background : "Orangered"}}>
                <div>Event Name : {item.eventName}</div>
                <div>Start Date : {item.startDate}</div>
                <div onClick={()=>{navigate(`/eventDetails/${item.id}`)}}>More Details...</div>
              </div>
            ))
            }
        </div>
    </div>
  )
}
