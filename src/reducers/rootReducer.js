import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    postsReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

