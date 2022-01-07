import React from "react"

import { Link } from "react-router-dom"
import { connect } from "react-redux";

import { logout } from "../../redux/auth/auth.actions"

import styles from "./header.module.scss"


const Header = ({ isLoggedIn, name, dispatch }: { isLoggedIn: boolean, name: string, dispatch: any }): JSX.Element => {
    let headerComponents

    if (isLoggedIn) {
        headerComponents = (
            <div>
                <span>Logged in as: {name}</span>
                <span onClick={() => dispatch(logout())}>Logout</span>
            </div>)
    } else {
        headerComponents = (
            <div>
                <Link to="/login">Login</Link>
            </div>)
    }
    
    return (
        <div className={styles.header}>
            {headerComponents}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    const { isLoggedIn } = state.auth
    const name = state.auth.user ? state.auth.user.name : ""
    return {
        isLoggedIn,
        name
    }
}

export default connect(mapStateToProps)(Header)