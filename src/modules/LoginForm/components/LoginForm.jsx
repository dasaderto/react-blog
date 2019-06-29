import React, {Component} from 'react';
import {Button, Input} from "../../../components";

import './LoginForm.scss';

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            login:'',
            password:'',
            errors:{}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            login: this.state.login,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return (
            <div className={'login'}>
                <div className="post__title--dark">
                    <span>Sign In</span>
                </div>
                <form>
                    <div className="form-group">
                        <Input
                            labelText={"Введите логин"}
                            name={"login"}
                            type={'text'}
                            placeholder={"Login ..."}
                            value={this.state.login}
                            handleChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            labelText={"Введите пароль"}
                            name={"password"}
                            type={'password'}
                            placeholder={"Password ..."}
                            value={this.state.password }
                            handleChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            action ={this.handleSubmit}
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