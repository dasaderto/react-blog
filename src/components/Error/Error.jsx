import React, {Component} from 'react';

import "./Error.scss";

class Error extends Component {

    showErrors(){
        let errors = [];
        for (let key in this.props.errors) {
           errors.push(<span key={key}>{this.props.errors[key]}</span>);
        }
        return errors;
    }

    render() {
        const errors = this.showErrors();
        return (
            <div className="help__block">
                {errors.length>0 && <div className="error">{errors}</div>}
            </div>
        );
    }
}

export default Error;