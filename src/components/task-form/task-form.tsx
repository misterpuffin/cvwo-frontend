import React, { useState } from "react"

import { addTask } from "../../redux/task/task.actions"

import { connect } from "react-redux"

const TaskForm = ({ dispatch }: any): JSX.Element => {
    const [formValue, setFormValue] = useState({name: "", tags: []})

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setFormValue({
            name: "",
            tags: []
        })
        dispatch(addTask(formValue))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Add Task</p>
                <input
                    type="name"
                    name="name"
                    placeholder="enter a name"
                    value={formValue.name}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >
                    Create task
                </button>
            </form>
        </div>
    )
}

export default connect()(TaskForm)