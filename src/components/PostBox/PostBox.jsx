import React, {Component} from 'react';

import "./PostBox.scss";

class PostBox extends Component {
    render() {
        return (
            <div className={"post__box"}>
                {this.props.children}
            </div>
        );
    }
}

export default PostBox;