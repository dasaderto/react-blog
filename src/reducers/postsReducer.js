import {APPEND_POST} from "../actions/post-actions";

const posts = [
    {
        id:1,
        postImage: "/assets/img/1.png",
        postMeta: "lifestyle",
        postTitle: "More than just a music festival",
        postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
        id:2,
        postImage: "/assets/img/2.png",
        postMeta: "lifestyle",
        postTitle: "American dream",
        postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
        id:3,
        postImage: "/assets/img/3.png",
        postMeta: "Photodiary",
        postTitle: "Life tastes better with coffee",
        postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
        id:4,
        postImage: "/assets/img/4.png",
        postMeta: "Photodiary",
        postTitle: "A day exploring the Alps",
        postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },

];

const initialState = {
    posts
};

export default  function  postsReducer(state = initialState,{type,payload}) {
    switch(type){
        case APPEND_POST:
            state={
                ...state,
                posts:[
                    ...state.posts,
                    payload.post
                ]
            }
            console.log(state);
            return state;
        default:
            return state;
    }
}