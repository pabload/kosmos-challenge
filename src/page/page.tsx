import FormComponent from "../components/formComponent/formComponent";
import ListTasksComponent from "../components/listTasksComponent/listTasksComponent";
import useTasks from "../customHooks/useTask";
import styles from "./page.module.scss"
const Page = () => {
    const tasks = useTasks();
    return (
        <div className={`${styles.mainContainer}`}>
            <h1>Task List</h1>
            <div className={`${styles.infoContainer}`}>
                <FormComponent saveTask={tasks.saveTask} />
                <ListTasksComponent tasks={tasks.tasks} deleteTask={tasks.deleteTask} />
            </div>
        </div>
    )
}

export default Page