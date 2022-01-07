import React from "react";
import { connect } from "react-redux"

import { addTask } from "./../../redux/task/task.actions"
import { TaskForm } from "./../../components"




const NewTaskForm = ({ dispatch }: {dispatch: any}):JSX.Element => {
    const handleSubmit = (formValue: any) => {
        dispatch(addTask(formValue))
    }

    return <TaskForm handleSubmit={handleSubmit} text={"Add Task"}></TaskForm>
}

export default connect()(NewTaskForm)