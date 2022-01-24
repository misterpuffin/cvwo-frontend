// Dependencies
import React, { useState } from "react"
import { connect } from "react-redux"

// Redux Actions
import { updateTask, deleteTask } from "../../redux/task/task.actions"

// Components, Icon and styles
import { Tag, TaskForm } from "../../components"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import styles from "./task.module.scss"

const TaskEditor = ({ task, handleSubmit }: { task: any, handleSubmit: any }): JSX.Element => {


    return (
        <TaskForm handleSubmit={handleSubmit} text={"Save Task"} task={task}></TaskForm>
    )
}


const Task = ({ taskID, task, dispatch }: { taskID: string, task: any, dispatch: any }): JSX.Element => {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [done, setDone] = useState(task.done);

    const handleSubmit = (data: any) => {
        setToggleEdit(false);
        dispatch(updateTask(taskID, data))
    }

    const handleChange = (event: any) => {
        setDone(event.target.checked);
        dispatch(updateTask(taskID, {...task, done: event.target.checked}));
    }

    if (toggleEdit) {
        return <TaskEditor task={task} handleSubmit={handleSubmit}></TaskEditor>
    } else {
        return(
            <div className={styles.task}>
                <div className={styles.checkbox}>
                    <input type="checkbox" checked={done} onChange={handleChange}></input>
                </div>
                <div className={styles.taskText}>
                    <span className={done ? styles.taskNameChecked : styles.taskName}>
                        {task.name}
                    </span>
                    <div className={styles.taskTagContainer}>
                        {task.tags.map((tag: any) => (<Tag name={tag}/>))}
                    </div>
                </div>
                <button className={styles.delete} onClick={() => dispatch(deleteTask(taskID))}><AiFillDelete/></button>
                <button className={styles.edit} onClick={() => setToggleEdit(!toggleEdit)}><AiFillEdit/></button>
            </div>
        )
    }

    
}

function mapStateToProps(state: any, ownProps: any) {
    return {
        task: state.tasks.tasks.filter((task: any): boolean => task.id === ownProps.taskID)[0]
    }
}

export default connect(mapStateToProps)(Task)