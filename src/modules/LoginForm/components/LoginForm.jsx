import React, {Component} from 'react';
import {Button, Error, Input} from "../../../components";

import './LoginForm.scss';

class LoginForm extends Component {

    render() {
        return (
            <div className={'login'}>
                <div className="post__title--dark">
                    <span>Sign In</span>
                </div>
                <form>
                    <Error errors={this.props.errors} />
                    <div className="form-group">
                        <Input
                            labelText={"Введите логин"}
                            name={"login"}
                            type={'text'}
                            placeholder={"Login ..."}
                            value={this.props.login}
                            handleChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            labelText={"Введите пароль"}
                            name={"password"}
                            type={'password'}
                            placeholder={"Password ..."}
                            value={this.props.password}
                            handleChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            action ={this.props.onSubmit}
                            btnType = {"submit"}
                            btnText = {"Sign In"}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;