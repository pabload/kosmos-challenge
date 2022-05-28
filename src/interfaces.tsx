interface ITask{
    id:string,
    taskName:string,
    deparment:string,
    priority:string
}
interface IFormCommentComponent {
   saveTask:Function
}
interface ITaskComponent{
    task:ITask,
    id:string,
    deleteTask:Function
}
interface IListTasksComponent{
    tasks:Array<ITask>
    deleteTask:Function
}
export type  {ITask,IFormCommentComponent,ITaskComponent,IListTasksComponent}