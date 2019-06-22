import React, {Component} from 'react';

import "./Post.scss";

class Post extends Component {
    render() {
        return (
            <div className={"small_post post"}>
                <div className="post__image">
                    <img src={this.props.post.postImage} alt={this.props.post.postImage} />
                </div>
                <div className="meta">
                    <span>{this.props.post.postMeta}</span>
                </div>
                <div className="post__title">
                    <span>{this.props.post.postTitle}</span>
                </div>
                <div className="post__body">
                    <p>{this.props.post.postBody}</p>
                </div>
            </div>
        );
    }
}

export default Post;