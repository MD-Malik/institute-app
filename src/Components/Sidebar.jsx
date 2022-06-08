import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Sidebar.module.css"

export const Sidebar = () => {
    const navigate = useNavigate()
    const mouseDownFn = (e) => {
       e.target.style.background="Blue";
    }
    const mouseUpFn = (e) => {
        e.target.style.background="lightBlue"
    }
  return (
    <div className={styles.sidebarDiv}>
        <div>
          <div className={styles.userProfileDiv}>ADMIN DASHBOARD</div>
          <div className={styles.taskTypeDiv} id={styles.routeDiv}>
              <div onClick={()=>navigate("/summary")} onMouseDown={mouseDownFn} onMouseUp={mouseUpFn} id="sidebarSummaryBtn">Events</div>
              <div onClick={()=>navigate("/")}  onMouseDown={mouseDownFn} onMouseUp={mouseUpFn}>Students</div>
              <div onClick={()=>navigate("/capacity")}  onMouseDown={mouseDownFn} onMouseUp={mouseUpFn}>Capacity</div>
          </div>
        </div>
        <div className={styles.logoutDiv}>
            <button onMouseDown={mouseDownFn} onMouseUp={mouseUpFn}>Logout</button>
        </div>
    </div>
  )
}
