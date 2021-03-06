import axios from 'axios';
import {GET_ERRORS} from "./auth-actions";

export const POST_CREATED_SUCCESS = 'posts:postAppended';
export const POST_DELETED_SUCCESS = 'posts:postDeleted';
export const UPDATE_POSTS = 'posts:updatePosts';

export function appendPost(newPost) {
    return (dispatch)=>{
        return axios.post('http://localhost:3001/api/posts/create', {
            newPost
        })
            .then(function (res) {
                dispatch(postCreatedSuccess(res.data));
            })
            .catch(function (err) {
                let errors = {};
                if(err.response.status === 401) {
                    errors.postCreate = "Вы не можете создавать посты, авторизуйтесь";
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: errors
                });
            });
    }
}

export function postCreatedSuccess(post) {
    return {
        type: POST_CREATED_SUCCESS,
        payload: {
            post: JSON.parse(post)
        }
    }
}

export function loadPosts(){
    return (dispatch)=>{
        return axios.get("http://localhost:3001/api/")
            .then(res=>{
                dispatch(updatePosts(JSON.parse(res.data)))
            });
    }
}

export function deletePost(post){
    return (dispatch)=>{
        return axios.delete("http://localhost:3001/api/posts/delete/",{
                data: {postId: post.id}
            })
            .then(function (res) {
                dispatch(postDeletedSuccess(res.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function postDeletedSuccess(post) {
    return {
        type: POST_DELETED_SUCCESS,
        payload: {
            post
        }
    }
}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        payload: {
            posts
        }
    }
}