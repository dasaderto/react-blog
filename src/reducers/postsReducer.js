import {POST_CREATED_SUCCESS} from "../actions/post-actions";
import {UPDATE_POSTS} from "../actions/post-actions";

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