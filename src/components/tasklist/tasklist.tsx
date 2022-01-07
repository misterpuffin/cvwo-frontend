import React, { useEffect } from "react"
import { connect } from "react-redux"
import * as JsSearch from 'js-search';

import { Task } from "../../components"
import { getTasks } from "../../redux/task/task.actions"

import styles from "./tasklist.module.scss"



const Tasklist = ({ taskIDs, dispatch }: { taskIDs: string[], dispatch: any }): JSX.Element => {

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch]);


    return (<div className={styles.tasklist}>
        {taskIDs.map(taskID =><Task key={taskID} taskID = { taskID }></Task>)}
    </div>)
};

function mapStateToProps(state: any) {

    const checkTags = (tags: string[]): boolean => {
        const tagsToFilter = state.filters.filters
        // returns true only if there are no tags that are being filtered 
        return tags.filter(tag => tagsToFilter.includes(tag)).length === 0
    }

    const filteredResults = state.tasks.tasks.filter((task: any) => checkTags(task.tags))
    var search = new JsSearch.Search("id");
    search.addIndex('name');
    search.addIndex('tags')
    search.addDocuments(filteredResults);

    const results = state.filters.search ? search.search(state.filters.search) : state.tasks.tasks;
    return {
        taskIDs: results.map((task: any): string => task.id)
    };
}

export default connect(mapStateToProps)(Tasklist)