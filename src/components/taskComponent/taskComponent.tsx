import { ITaskComponent } from "../../interfaces"
import styles from "./taskComponent.module.scss"
const TaskComponent = ({task,deleteTask}:ITaskComponent) => {
  return (
    <div className={`${styles.mainContainer}`}>
        <h1>{task.taskName}</h1>
        <h2>{task.deparment}</h2>
        <h3> {task.priority} </h3>
        <button onClick={()=>{deleteTask(task.id)}}>x</button>
    </div>
  )
}

export default TaskComponent