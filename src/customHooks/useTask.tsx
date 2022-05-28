import { useEffect, useState } from "react"
import { ITask } from "../interfaces"

const useTasks = () => {
 const [tasks, setTask] = useState<Array<ITask>>([])
 useEffect(() => {
   console.log(tasks);
 }, [tasks])
 
 const saveTask = (newTask:ITask)=>{
    setTask([...tasks,newTask]);
 }
 const deleteTask = (id:string)=>{
    const newArray = tasks.filter(task=>task.id!=id)
    setTask(newArray);
 }
  return (
    {
        tasks,
        saveTask,
        deleteTask
    }
  )
}

export default useTasks