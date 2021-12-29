import React from "react"

import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux";

import { logout } from "../../redux/auth/auth.actions"


const Header = ({ isLoggedIn, name, dispatch }: { isLoggedIn: boolean, name: string, dispatch: any }): JSX.Element => {
    const navigate = useNavigate();
    if (isLoggedIn) {
        return (
            <div>
                <p>Logged in as: {name}</p>
                <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
        )
    } else {
        return (
            <Link to ="/login">Login</Link>
        )
    }
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