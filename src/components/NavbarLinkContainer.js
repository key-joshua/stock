import React from 'react';
import '../style/home.scss'
import { Link, NavLink } from 'react-router-dom';
const NavbarLinkContainer = () => {

    return (

        <div>
            <header>
                <div className="containe">
                    <div id="branding">
                        <h1><Link to="/" >STOCK WEB MANAGMENT</Link></h1>
                    </div>
                    <nav>
                        <ul id="ul">
                            <li ><Link to="/" ><i className="fa fa-home" aria-hidden="true"></i>HOME</Link></li>
                            <li ><NavLink to="/login"><i className="fa fa-sign-in"></i>LOGIN</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>

    )
}


export default NavbarLinkContainer;
