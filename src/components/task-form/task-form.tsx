import React, { useState } from "react"


import { AiOutlinePlus } from "react-icons/ai"
import { CustomButton, Tag } from "../../components"
import styles from "./task-form.module.scss"

const TaskForm = (props: any): JSX.Element => {
    const initialState = props.task ? { name: props.task.name, tags: props.task.tags } : {name: "", tags: []}
    const [formValue, setFormValue] = useState<{name: string, tags: string[]}>(initialState)
    const [tagValue, setTagValue] = useState("")
    const [toggleTags, setToggleTags] = useState(false)


    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event: any) => {
        props.handleSubmit(formValue);
        setFormValue({
            name: "",
            tags: []
        });
    }

    const handleTagChange = (event:any) => {
        setTagValue(event.target.value);
    }

    const handleTagSubmit = (event:any) => {
        if (event.key === 'Enter'){
            const allTags = [...formValue.tags, tagValue.trim()]
            const distinctTags = allTags.filter((tag, index) => allTags.indexOf(tag) === index)
            setFormValue({
                ...formValue,
                tags: distinctTags
            })
            setTagValue("")
        } else if ((event.key === 'Backspace' || event.key === 'Delete') && tagValue === "") {
            setFormValue({
                ...formValue,
                tags: formValue.tags.filter((tag, index) => index + 1 !== formValue.tags.length)
            })
        }
        
    }

    return (
        <div className ={styles.taskFormContainer}>
            <form className={styles.taskForm} onSubmit={e => e.preventDefault()}>
                <div className={styles.taskFormInputContainer}>
                    <input
                        autoFocus={formValue.name !== ""}
                        className={styles.taskFormInput}
                        type="name"
                        name="name"
                        placeholder="Enter a task name"
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <label className={styles.taskFormInputLabel}>Name</label>
                    <div className={styles.tagContainer}>
                        {formValue.tags.map(tag => (<Tag name={tag}/>))}
                        {toggleTags ? 
                        <input
                            className={styles.tagInput}
                            type="tags"
                            name="tags"
                            placeholder="enter a tag, enter to confirm"
                            value={tagValue}
                            onChange={handleTagChange}
                            onKeyDown={handleTagSubmit}
                        /> : 
                        <button className={styles.tagButton} onClick={() => setToggleTags(true)}>
                            <AiOutlinePlus className={styles.tagButtonIcon}/>Add Tags
                        </button> }
                    </div>  
                </div>
                <CustomButton
                    type="button"
                    onClick={handleSubmit}
                    className={styles.add}
                >
                    {props.text}
                </CustomButton>
            </form>
        </div>
    )
}

export default TaskForm