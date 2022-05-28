import { useEffect, useState } from "react"
import { IFormCommentComponent, ITask } from "../interfaces"

const useForm = (saveTask:Function) => {
  const [taskName, setTaskName] = useState<string>("");
  const [deparment, setDeparment] = useState<string>("Law Department");
  const [priority, setPriority] = useState<string>("Low");
  const [error, setError] = useState<boolean>(false);
  const handleForm =(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(taskName !== ""){
        const newTask:ITask= {
            taskName:taskName,
            deparment:deparment,
            priority:priority,
            id:`${Date.now().toString()}-${taskName}`,
          }
          saveTask(newTask);
          setTaskName("");
          setDeparment("Law Department");
          setPriority("Low");
          setError(false);
    }else{
        setError(true);
    }
  }
  return (
    {
        taskName,
        setTaskName,
        deparment,
        setDeparment,
        priority,
        setPriority,
        handleForm,
        error

    }
  )
}

export default useForm