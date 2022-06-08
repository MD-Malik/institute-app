import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../apiLink';
import styles from "./StudentsListPage.module.css"

export const StudentsListPage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchedStudents, setSearchedStudents] = useState([])

  const getStudentData = (value) => {
    fetch(`${api}/Students?q=${value}`)
    .then(res=>res.json())
    .then(res=>{
      // console.log(res)
      setSearchedStudents(res)
    })
  }

  const handleInpChange = (e) => {
    let value = e.target.value;
    getStudentData(value)
  }

  useEffect(()=>{
    getStudentData("")
  },[])

  const handleFilterByTerm = (e) => {
    let term = e.target.value=="firstTerm"?1:2
    fetch(`${api}/Students?term=${term}`)
    .then(res=>res.json())
    .then(res=>setSearchedStudents(res))
  }

  const handleFilterByYear = (e) => {
    let year = e.target.value=="firstYear"?1:e.target.value=="secondYear"?2:3
    // console.log(year)
    fetch(`${api}/Students?currYear=${year}`)
    .then(res=>res.json())
    .then(res=>setSearchedStudents(res))
  }

  return (
    <div className={styles.StudentsListPageDiv}>
        <div>
          <h1>Students List</h1>
        </div>
        <div>
          <div>
            <input type="text" onChange={handleInpChange} placeholder="Search"/>
          </div>
          <div>
            <label>Filter by term : </label>
            <select onChange={handleFilterByTerm}>
              <option value="firstTerm">First Term</option>
              <option value="secondTerm">Second Term</option>
            </select>
          </div>
          <div>
            <label>Filter by Current Year : </label>
            <select onChange={handleFilterByYear}>
              <option value="firstYear">First Year</option>
              <option value="secondYear">Second Year</option>
              <option value="thirdYear">Third Year</option>
            </select>
          </div>
        </div>
        <div className={styles.StudentsListPageInnerDiv}>
            {
              searchedStudents.map(item=>(
              <div key={item.id}>
                <div>Student Name : {item.name}</div>
                <div>Roll No : {item.rollNo}</div>
                <div className={styles.moreDetails} onClick={()=>navigate(`/studentDetails/${item.id}`)}>More Details...</div>
              </div>
            ))
              }
        </div>
    </div>
  )
}
