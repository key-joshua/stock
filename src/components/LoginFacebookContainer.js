import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class LoginFacebookContainer extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = response => {
        console.log(response);
        if (response.userID || response.name || response.email) {
            window.location.href = "/products";
        }
    }
    componentClicked = () => console.log('clicked');
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
        }
        else {
            fbContent = (
                <FacebookLogin
                    appId="803906423456613"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
