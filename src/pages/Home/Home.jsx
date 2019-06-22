import React, {Component} from 'react';
import {Header, PostForm} from "../../modules";
import {BigPost, Post, SignUp, Button} from "../../components";
import {connect} from 'react-redux';
import {store} from "../../reducers/rootReducer";

import "./Home.scss";
import {appendPost} from "../../actions/post-actions";

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: store.getState().postsReducer.posts,
        };

        this.onAppendPost = this.onAppendPost.bind(this);
    }

     postsBottom = [
        {
            id:1,
            postImage: "/assets/img/5.png",
            postMeta: "lifestyle",
            postTitle: "Top 10 song for running",
            postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        },
        {
            id:2,
            postImage: "/assets/img/6.png",
            postMeta: "lifestyle",
            postTitle: "Cold winter days",
            postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        },
    ];

    onAppendPost(newPost){
        newPost.id = this.state.posts.length+1;
        this.props.onAppendPost(newPost);
        this.setState({
            ...this.state,
            posts: store.getState().postsReducer.posts,
        });
    }

    render() {
        const showPosts =  this.state.posts.map(post =>(
            <Post key={post.id}
                post={post}
            />
        ));
        const showBottomPosts = this.postsBottom.map(post =>(
            <Post key={post.id}
                  post={post}
            />
        ));
        return (
            <div>
                <Header />
                <BigPost
                    topMeta = "Photodiary"
                    postTitle = "The perfect weekend getaway"
                    postBody = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}
                    commentMeta = "Leave a comment"
                />

                <div className="posts__box">
                    {showPosts}
                </div>

                <SignUp />

                <div className="posts__box">
                    {showBottomPosts}
                </div>

                <Button
                    btnText={"Load more"}
                    btnType={"button"}
                />

                <PostForm AppendPost={this.onAppendPost}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.NewPost
});

const mapActionsToProps = {
    onAppendPost : appendPost
};

export default connect(mapStateToProps,mapActionsToProps)(Home);