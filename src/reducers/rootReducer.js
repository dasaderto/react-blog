import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import postsReducer from "./postsReducer";
import errorsReducer from "./errorsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    postsReducer,
    errors: errorsReducer,
    auth:authReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

