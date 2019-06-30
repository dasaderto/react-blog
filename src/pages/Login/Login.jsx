import React, {Component} from 'react';

import "./Login.scss";
import {Header,LoginForm} from "../../modules/";
import {connect} from "react-redux";
import {loginUser} from "../../actions/auth-actions";
// import {store} from "../../reducers/rootReducer";

class Login extends Component {
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

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
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
        };
        this.props.loginUser(user);
    }


    render() {
        return (
            <div className={'login__page'}>
                <Header />

                <LoginForm
                    login={this.state.login}
                    password={this.state.password}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit} />
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