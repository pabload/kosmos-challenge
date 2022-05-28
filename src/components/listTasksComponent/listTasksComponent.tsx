import { IListTasksComponent, ITask } from "../../interfaces"
import TaskComponent from "../taskComponent/taskComponent"

const ListTasksComponent = ({tasks,deleteTask}:IListTasksComponent) => {
  return (
     <div className="">
         {
             tasks.map((task)=>{
                return <TaskComponent id={task.id} task={task} deleteTask={deleteTask}/>
            })
         }
     </div>
  )
}

export default ListTasksComponent