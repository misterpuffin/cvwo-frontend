import React, { useState } from "react"

import { connect } from "react-redux"


// import styles from "./task.module.scss"

import { updateTask, deleteTask } from "../../redux/task/task.actions"

const TaskEditor = ({ task, handleSubmit }: { task: any, handleSubmit: any }): JSX.Element => {
    const [formValue, setFormValue] = useState({
        name: task.name
    });

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }


    return (
        <form onSubmit={event => handleSubmit(formValue)(event)}>
            <input
                type="name"
                name="name"
                placeholder="enter a name"
                value={formValue.name}
                onChange={handleChange}
            />
            <button type="submit">Save</button>
        </form>
    )
}


const Task = ({ taskID, task, dispatch }: { taskID: string, task: any, dispatch: any }): JSX.Element => {
    const [toggleEdit, setToggleEdit] = useState(false);

    const handleSubmit = (data: any) => (event: any) => {
        event.preventDefault();
        setToggleEdit(false);
        dispatch(updateTask(taskID, data))
    }

    if (toggleEdit) {
        return <TaskEditor task={task} handleSubmit={handleSubmit}></TaskEditor>
    } else {
        return(
            <div>
                <li>
                    {task.name}
                </li>
                {task.tags.map((tag: any) => (<p>{tag}</p>))}
                <button onClick={() => dispatch(deleteTask(taskID))}>Delete task</button>
                <button onClick={() => setToggleEdit(!toggleEdit)}>Edit task</button>
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