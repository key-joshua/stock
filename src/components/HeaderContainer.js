import React from 'react'
import '../style/home.scss'

const Header = () => {

    return (

        <div>
            <header>
                <div class="containe">
                    <nav>
                        <i class="fa fa-bars menu" aria-hidden="true"></i>
                        <ul id="ul">
                            <li ><a href="/home" ><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
                            <li ><a href="/product"><i class="fa fa-sign-in"></i>Login</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>

    )
}


export default Header;
