import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../apiLink';

export const StudentDetails = () => {
    const {id} = useParams();
    const [studentData, setStudentData] = useState({});

    const getStudentDetails = async() => {
        let result = await fetch(`${api}/Students/${id}`)
        result = await result.json();
        setStudentData(result);
    }

    useEffect(()=>{
        getStudentDetails();
    },[])
  return (
    <div>
        <div>
            <h1>Student Details</h1>
        </div>
        <div>
             <h1>Student Name : {studentData.name}</h1>
             <h2>Roll No : {studentData.rollNo}</h2>
             <h2>Term : {studentData.term==1?"First Term":"Second Term"}</h2>
             <h2>Current Year : {studentData.currYear==1?"First Year":studentData.currYear==2?"Second Year":"Third Year"}</h2>
             <h2>Contact Number : {studentData.contactNo}</h2>
         </div>
    </div>
  )
}
