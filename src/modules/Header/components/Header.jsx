import React, {Component} from 'react';

import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav">
                    <div className="nav__brand">
                        <span>Minimo</span>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">Lifestyle</li>
                        <li className="nav__item">Photodiary</li>
                        <li className="nav__item">Music</li>
                        <li className="nav__item">Travel</li>
                    </ul>
                </div>
                <div className="header__banner">
                    <img src={"/assets/img/banner.png"} alt="header-banner.png" />
                </div>
            </div>
        );
    }
}

export default Header;