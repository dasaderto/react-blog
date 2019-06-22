import React, {Component} from 'react';

import "./Button.scss";

class Button extends Component {
    render() {
        return (
            <div className={"btn__block"}>
                <button type={this.props.btnType} onClick={this.props.action} className="btn">{this.props.btnText}</button>
            </div>
        );
    }
}

export default Button;