import React, {Component} from 'react';

import "./Login.scss";
import {Header,LoginForm} from "../../modules/";
import {connect} from "react-redux";
import {loginUser} from "../../actions/auth-actions";
import {store} from "../../reducers/rootReducer";

class Login extends Component {

    unsubscribe;

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

    componentWillMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                ...this.state,
                errors: store.getState().errors,
            });
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

    async handleSubmit(e) {
        e.preventDefault();
        const user = {
            login: this.state.login,
            password: this.state.password,
        };
        await this.props.loginUser(user);
        this.setState({
            ...this.state,
            errors: {}
        })
    }

    render() {
        return (
            <div className={'login__page'}>
                <Header />

                <LoginForm
                    login={this.state.login}
                    password={this.state.password}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit}
                    errors ={this.state.errors}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth,
});

const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps,mapActionsToProps)(Login);