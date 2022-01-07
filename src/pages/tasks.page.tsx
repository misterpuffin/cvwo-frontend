import React from "react"

import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

import { Tasklist, NewTaskForm, Header, SearchBar } from "../components"

import styles from "../styles/tasks.module.scss"


const TasksPage = ({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element => {
    if (!isLoggedIn) {
        return <Navigate to="/login"></Navigate>
    } else {
        return (
        <div >
            <Header></Header>
            <div className={styles.page}>
                <SearchBar></SearchBar>
                <Tasklist></Tasklist> 
                <NewTaskForm></NewTaskForm>
            </div>
        </div>)
    }
}

function mapStateToProps(state: any) {
    const { isLoggedIn } = state.auth;
    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps)(TasksPage)