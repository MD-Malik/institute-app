import React, { useState } from 'react'
import styles from "./EventRegistrationPage.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../apiLink';

export const EventRegistrationPage = () => {
     const { id } = useParams();
     const navigate = useNavigate()
     const [registrationDetails, setRegistrationDetails] = useState({
         firstName : "",
         lastName : "",
         rollNo : "",
         term : "",
         currYear : "",
         contact : ""
     })

     const handleChange = (e) => {
         setRegistrationDetails({
             ...registrationDetails,
             [e.target.className] : e.target.value
         })
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         fetch(`${api}/registeredStudents`, {
             method : "POST",
             headers : {
                 "Content-Type":"application/json"
             },
             body : JSON.stringify({...registrationDetails, eventId : id})
         })
         .then(res=>res.json())
         .then(res=>{
             navigate("/success")
         })
     }
     const mouseDownFn = (e) => {
         e.target.style.background = "Blue";
     }
     const mouseUpFn = (e) => {
        e.target.style.background = "lightBlue";
     }

  return (
    <div>
        <h1>Event Registration Form</h1>
        <form onSubmit={handleSubmit} className={styles.registrationForm}>
            <label>First Name : </label>
            <input type="text" placeholder='First Name' className="firstName" onChange={handleChange}/>
            <br />            
            <label>Last Name : </label>
            <input type="text" placeholder='Last Name' className="lastName" onChange={handleChange}/>
            <br />
            <label>Roll No : </label>
            <input type="text" placeholder='Roll No' className="rollNo" onChange={handleChange}/>
            <br />
            <label>Term : </label>
            <input type="text" placeholder='Term' className="term" onChange={handleChange}/>
            <br />
            <label>Current Year : </label>
            <input type="text" placeholder='Current Year' className="currYear" onChange={handleChange}/>
            <br />
            <label>Contact : </label>
            <input type="text" placeholder='Contact' className="contact" onChange={handleChange}/>
            <br />
            <input type="submit" className={styles.inputSubmit} onMouseDown={mouseDownFn} onMouseUp={mouseUpFn}/>
        </form>
    </div>
  )
}
