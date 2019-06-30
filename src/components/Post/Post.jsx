import React, {Component} from 'react';

import "./Post.scss";

class Post extends Component {

    render() {
        return (
            <div className={"small_post post"}>
                <div className="post__image">
                    <img src={this.props.post.img} alt={this.props.post.img} />
                </div>
                <div className="meta">
                    {this.props.post.metatags.map((meta) =>{
                       return(<span key={meta}>{meta}</span>);
                    })}
                </div>
                <div className="post__title">
                    <span>{this.props.post.title}</span>
                </div>
                <div className="post__body">
                    <p>{this.props.post.post_body}</p>
                </div>
                <div className="post__delete">
                    <a href="/" onClick={(e)=>{
                        this.props.onDelete(this.props.post, e);
                    }}>Удалить пост</a>
                </div>
            </div>
        );
    }
}

export default Post;