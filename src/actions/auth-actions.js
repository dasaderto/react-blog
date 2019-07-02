import axios from 'axios';
import setAuthToken from '../auth/setAuthToken';
import jwt_decode from 'jwt-decode';

export const GET_ERRORS = 'GET_ERRORS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:3001/api/users/register', user)
            .then(res => {
                history.push('/login');
                dispatch(clearErrors());
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
};

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:3001/api/users/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                dispatch(clearErrors());
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const clearErrors= () => {
    return {
        type: GET_ERRORS,
        payload: {}
    }
};

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    if(history){
        history.push('/login');
    }
};