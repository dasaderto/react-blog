import React, {Component} from 'react';

import "./Input.scss";

class Input extends Component {

    render() {
        return (
            <label htmlFor={`#${this.props.name}`}>
                {this.props.labelText}
                <input
                    id={this.props.name}
                    name={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
            </label>
        );
    }
}

export default Input;