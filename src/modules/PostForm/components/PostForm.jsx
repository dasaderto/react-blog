import React, {Component} from 'react';

import "./PostForm.scss";
import {Input, Button} from "../../../components";

class PostForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            NewPost:{
                id:'',
                title:'',
                post_body:'',
                img:"/assets/img/7.png",
                metatags:['lifestyle'],
            }
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handlePostTitle = this.handlePostTitle.bind(this);
        this.handlePostBody = this.handlePostBody.bind(this);
    }
    handleClearForm(){
        this.setState({
            NewPost:{
                id:'',
                title:'',
                post_body:'',
                img:"/assets/img/7.png",
                metatags:['lifestyle'],
            }
        })
    }
    handleFormSubmit(e){
        e.preventDefault();
        let postData = this.state.NewPost;
        this.props.AppendPost(postData);
        this.handleClearForm();
    }

    handlePostTitle(e){
        let title = e.target.value;

        this.setState( prevState =>({
            NewPost: {
                ...prevState.NewPost,
                title,
            }
        }));
    }

    handlePostBody(e){
        let body = e.target.value;

        this.setState( prevState =>({
            NewPost: {
                ...prevState.NewPost,
                post_body: body
            }
        }));
    }

    render() {
        return (
            <div className={"add__post add-post"}>
                <div className="add-post__title post__title--dark">
                    <span>Post addition</span>
                </div>
                <form action="" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <Input
                            labelText={"Введите название поста"}
                            name={"post_title"}
                            type={'text'}
                            placeholder={"Post title ..."}
                            value={this.state.NewPost.title}
                            handleChange={this.handlePostTitle}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            labelText={"Введите тело поста"}
                            name={"post_body"}
                            type={'text'}
                            placeholder={"Post body ..."}
                            value={this.state.NewPost.post_body}
                            handleChange={this.handlePostBody}
                        />
                    </div>
                    <div className="form-group">
                        <Button
                            action  = {this.handleFormSubmit}
                            btnType = {"submit"}
                            btnText = {"Добавить"}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default PostForm;