import React, {Component} from 'react';

import "./BigPost.scss";

class BigPost extends Component {

    render() {
        return (
            <div className="big__post post">
                <div className="meta">
                    <span>{this.props.topMeta}</span>
                </div>
                <div className="post__title">
                    <span>{this.props.postTitle}</span>
                </div>
                <div className="post__body">
                    <p>{this.props.postBody}</p>
                </div>
                <div className="meta">
                    <span>{this.props.commentMeta}</span>
                </div>
            </div>
        );
    }
}

export default BigPost;