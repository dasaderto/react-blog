import React, {Component} from 'react';

import "./Header.scss";
import {Link, withRouter} from "react-router-dom";
import {logoutUser} from "../../../actions/auth-actions";
import {connect} from "react-redux";

class Header extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <li className="nav__item">
                Hi {user.login} / <a href="/logout" onClick={this.onLogout.bind(this)}>Logout</a>
            </li>
        );
        const guestLinks = (
            <li className="nav__item">
                <Link to={'/login'}>Login</Link> / Register
            </li>
        );
        return (
            <div className="header">
                <div className="nav">
                    <div className="nav__brand">
                        <span>Minimo</span>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav__item">Photodiary</li>
                        <li className="nav__item">Music</li>
                        <li className="nav__item">Travel</li>
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
                <div className="header__banner">
                    <img src={"/assets/img/banner.png"} alt="header-banner.png" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapActionsToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Header));