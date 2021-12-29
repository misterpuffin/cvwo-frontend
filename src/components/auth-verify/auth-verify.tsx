import React, { useEffect } from "react"
import { useLocation } from 'react-router';
import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/auth.actions"

const parseJwt = (token: any) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

const AuthVerify = (): JSX.Element => {
    let location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user && user.token) {
            const decodedJwt = parseJwt(user.token);
    
            if (decodedJwt.exp * 1000 < Date.now()) {
            dispatch(logout());
            }
        }
    }, [location]);

    return (<div></div>)

}

export default AuthVerify