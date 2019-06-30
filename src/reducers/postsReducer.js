import {POST_CREATED_SUCCESS, POST_DELETED_SUCCESS, UPDATE_POSTS} from "../actions/post-actions";


const initialState = {
    posts:[],
};

export default  function  postsReducer(state = initialState,{type,payload}) {
    switch(type){
        case POST_CREATED_SUCCESS:
            state={
                ...state,
                posts:[
                    ...state.posts,
                    payload.post
                ]
            };
            return state;
        case POST_DELETED_SUCCESS:
            let newPosts = state.posts.filter(el => el.id !== payload.post.id);
            state={
                ...state,
                posts: newPosts,
            };
            return state;
        case UPDATE_POSTS:
            state={
                ...state,
                posts:payload.posts
            };
            return state;
        default:
            return state;
    }
}