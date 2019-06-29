import React, {Component} from 'react';

import "./Login.scss";
import {Header,LoginForm} from "../../modules/";

class Login extends Component {
    constructor(props){
        super(props);


    }

    render() {
        return (
            <div className={'login__page'}>
                <Header />

                <LoginForm />
            </div>
        );
    }
}

export default Login;