import {combineReducers, createStore} from "redux";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    postsReducer
});

export const store = createStore(rootReducer);

