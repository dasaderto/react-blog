import axios from 'axios';

export const POST_CREATED_SUCCESS = 'posts:postAppended';
export const UPDATE_POSTS = 'posts:updatePosts';

export function appendPost(newPost) {
    return (dispatch)=>{
        return axios.post('http://localhost:3001/api/posts/create', {
            newPost
        })
            .then(function (res) {
                dispatch(postCreatedSuccess(JSON.parse(res.data)));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function postCreatedSuccess(post) {
    return {
        type: POST_CREATED_SUCCESS,
        payload: {
            post
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
    


export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        payload: {
            posts
        }
    }
}