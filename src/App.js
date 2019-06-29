import React from 'react';
import {Home, Login} from './pages';
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
        </Switch>
    </div>
  );
}

export default App;
