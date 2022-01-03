import React from "react"

import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

import { Tasklist, Taskform, Header, SearchBar } from "../components"


const TasksPage = ({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element => {
    if (!isLoggedIn) {
        return <Navigate to="/login"></Navigate>
    } else {
        return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <Taskform></Taskform>
            <Tasklist></Tasklist> 
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