import React from 'react'
import '../style/form.scss'
import { NavLink } from "react-router-dom";

const LoginFormContainer = () => {

    return (

        <div className="container">
            <div className="form register">

                <h3>Get Login Now</h3>
                <div>
                    <input type="email" placeholder="Email Address" id="email" />
                    <input type="password" placeholder="Password" id="password" />
                    <NavLink to="/login"><button type="submit" className="loginBtn" id="loginBtn">Login</button></NavLink>
                </div>
                <div>
                    <h5>Don't  Have Account <NavLink to="/login"><span className="login">Register</span></NavLink> Now</h5>
                </div>

            </div>
        </div>
    )
}


export default LoginFormContainer;
