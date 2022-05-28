import React from 'react'
import useForm from '../../customHooks/useForm'
import { IFormCommentComponent } from '../../interfaces'
import styles from  "./formComponent.module.scss"
const FormComponent = ({saveTask}:IFormCommentComponent) => {
    const form = useForm(saveTask)
    return (
        <div className={`${styles.mainContainer}`}>
            <form onSubmit={(e)=>form.handleForm(e)}>
                <input value={form.taskName} onChange={(e) => { form.setTaskName(e.target.value) }} type="text" placeholder='add task' />
                {
                    form.error?
                    <span>you must put a task</span>:
                    null
                }
                <select value={form.deparment} onChange={(e) => { form.setDeparment(e.target.value) }}>
                    <option value="Law Department">Law Department</option>
                    <option value="Stores Department">Stores Department</option>
                    <option value="Public Relations Department">Public Relations Department</option>
                </select>
                <div className={`${styles.radiosContainer}`}>
                    <h3>Select priority</h3>
                    <div>
                        <input type="radio" checked={form.priority==="Low"} onChange={(e) => { form.setPriority(e.target.value) }} value="Low" name="priority" /> <label htmlFor="Low">Low</label>
                    </div>
                   <div>
                        <input type="radio" checked={form.priority==="Medium"?true:false} onChange={(e) => { form.setPriority(e.target.value) }} value="Medium" name="priority" /><label htmlFor="Medium">Medium</label>
                   </div>
                   <div>
                   <input type="radio" checked={form.priority==="High"?true:false} onChange={(e) => { form.setPriority(e.target.value) }} value="High" name="priority" /><label htmlFor="High">High</label>
                   </div>
                </div>
                <button >Save task</button>
            </form>
        </div>
    )
}

export default FormComponent