import React from 'react';
import {Home, Login, Registration} from './pages';
import {Route, Switch} from "react-router-dom";
import {store} from "./reducers/rootReducer";
import setAuthToken from "./auth/setAuthToken";
import {logoutUser, setCurrentUser} from "./actions/auth-actions";
import jwt_decode from 'jwt-decode';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser(null));
        window.location.href = '/login'
    }
}

function App() {
  return (
    <div className="wrapper">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Registration}/>
        </Switch>
    </div>
  );
}

export default App;
