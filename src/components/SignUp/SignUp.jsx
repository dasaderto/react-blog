import React, {Component} from 'react';
import * as MD from 'react-icons/lib/md';

import "./SignUp.scss"
import Input from "../Input/Input";

class SignUp extends Component {
    render() {
        return (
            <div className={"sign-up"}>
                <div className="sign-up__content">
                    <div className="sign-up__title post__title--dark">
                        <span>Sign up for our newsletter!</span>
                    </div>
                    <div className="sign-up__form">
                        <form action="">
                            <Input
                                labelText=""
                                name={"email"}
                                type={'email'}
                                placeholder={'Enter a valid email address'}
                            />
                            <button type="submit"><MD.MdSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;