import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StudentsListPage } from './StudentsListPage'
import { CreateTaskPage } from './EventRegistrationPage'
import styles from "./AllRoutes.module.css"
import { EventsPage } from './EventsPage'
import { EventAllDetailsPage } from './EventAllDetailsPage'
import { EventRegistrationPage } from './EventRegistrationPage'
import { Success } from './Success'
import { StudentDetails } from './StudentDetails'
import { Capacity } from './Capacity'

export const AllRoutes = () => {
  return (
    <div className={styles.allRoutesDiv}>
            <Routes>
                <Route path='/registration/:id' element={<EventRegistrationPage />} />
                <Route path='/summary' element={<EventsPage />} />
                <Route path='/' element={<StudentsListPage />} />
                <Route path='/eventDetails/:id' element={<EventAllDetailsPage />} />
                <Route path='/success' element={<Success />} />
                <Route path='/studentDetails/:id' element={<StudentDetails />} />
                <Route path='/capacity' element={<Capacity />} />
            </Routes>
    </div>
  )
}
