import React, { useState } from "react"

import { addTask } from "../../redux/task/task.actions"

import { connect } from "react-redux"

const TaskForm = ({ dispatch }: any): JSX.Element => {
    const [formValue, setFormValue] = useState<{name: string, tags: string[]}>({ name: "", tags: [] })
    const [tagValue, setTagValue] = useState("")

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event: any) => {
        dispatch(addTask(formValue))
        setFormValue({
            name: "",
            tags: []
        })
    }

    const handleTagChange = (event:any) => {
        setTagValue(event.target.value);
    }

    const handleTagSubmit = (event:any) => {
        if (event.key === 'Enter'){
            const allTags = [...formValue.tags, tagValue]
            const distinctTags = allTags.filter((tag, index) => allTags.indexOf(tag) === index)
            setFormValue({
            ...formValue,
            tags: distinctTags
        })
        setTagValue("")
        }
        
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <p>Add Task</p>
                <input
                    type="name"
                    name="name"
                    placeholder="enter a name"
                    value={formValue.name}
                    onChange={handleChange}
                />
                {formValue.tags.map(tag => (<p>{tag}</p>))}
                <input
                    type="tags"
                    name="tags"
                    placeholder="enter a tag, enter to confirm"
                    value={tagValue}
                    onChange={handleTagChange}
                    onKeyDown={handleTagSubmit}
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                >
                    Create task
                </button>
            </form>
                
        </div>
    )
}

export default connect()(TaskForm)