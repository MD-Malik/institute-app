import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../apiLink';
import styles from "./eventDetailsPage.module.css"

export const EventAllDetailsPage = () => {
    const [eventDetails, setEventDetails] = useState([])
    const {id} = useParams();
    const getEventDetails = async() => {
        let result = await fetch(`${api}/events/${id}`)
        result = await result.json();
        setEventDetails(result);
        console.log(result)
    }

    useEffect(()=>{
        getEventDetails();
    },[])
    const navigate = useNavigate()

    return (
        <>
        <div className={styles.EventDetailsOuterDiv}>
         <h1>Event All Details</h1>
         <div>
             <h1>Event Name : {eventDetails.eventName}</h1>
             <h2>Start Date : {eventDetails.startDate}</h2>
             <h2>End Date : {eventDetails.endDate}</h2>
             <h4>Registration URL : <span onClick={()=>navigate(`/registration/${id}`)}>{eventDetails.registrationURL}</span></h4>
         </div>
        </div> 
        </>
    
  )
}
