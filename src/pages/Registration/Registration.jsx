import React, {Component} from 'react';
import {connect} from "react-redux";
import {registerUser} from "../../actions/auth-actions";

import "./Registration.scss";
import {Header, RegistrationForm} from "../../modules/";
import {withRouter} from "react-router-dom";
import {store} from "../../reducers/rootReducer";

class Registration extends Component {

    unsubscribe;

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            password_confirm: '',
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                ...this.state,
                errors: store.getState().errors,
            });
            console.log(this.state.errors);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleInputChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            login: this.state.login,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        this.props.registerUser(user, this.props.history);
    }

    render() {
        return (
            <div className={'register__page'}>
                <Header />

                <RegistrationForm
                    login={this.state.login}
                    password={this.state.password}
                    passwordConfirm={this.state.password_confirm}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapActionsToProps = {
    registerUser
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Registration));