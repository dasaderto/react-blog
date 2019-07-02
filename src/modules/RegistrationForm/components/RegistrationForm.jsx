import React, {Component} from 'react';
import {Button, Error, Input} from "../../../components";

import './RegistrationForm.scss';

class RegistrationForm extends Component {

    render() {
        return (
            <div className={'registration'}>
                <div className="post__title--dark">
                    <span>Sign Up</span>
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
                        <Input
                            labelText={"Повторно введите пароль"}
                            name={"password_confirm"}
                            type={'password'}
                            placeholder={"Confirm password ..."}
                            value={this.props.passwordConfirm}
                            handleChange={this.props.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            action ={this.props.onSubmit}
                            btnType = {"submit"}
                            btnText = {"Sign Up"}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;