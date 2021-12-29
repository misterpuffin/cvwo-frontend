import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { Task } from "../../components"

import { getTasks } from "../../redux/task/task.actions"


const Tasklist = ({ taskIDs, dispatch }: { taskIDs: string[], dispatch: any }): JSX.Element => {

    useEffect(() => {
        dispatch(getTasks())
    }, []);


    return (<div>
        {taskIDs.map(taskID =><Task key={taskID} taskID = { taskID }></Task>)}
    </div>)
};

function mapStateToProps(state: any) {
    return {
        taskIDs: state.tasks.tasks.map((task: any): string => task.id)
    };
}

export default connect(mapStateToProps)(Tasklist)