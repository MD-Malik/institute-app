import { Sidebar } from "./Components/Sidebar";
import { AllRoutes } from "./Routes/AllRoutes";
import styles from "./app.module.css"

function App() {
  return (
    <div className={styles.appDiv}>
      <Sidebar />
       <AllRoutes />
    </div>
  );
}

export default App;
