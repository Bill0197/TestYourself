import React from 'react';
import App from './view/App'
import Register from './view/register'
import Login from './view/login'
import { Router, Route, browserHistory } from 'react-router'

class Routing extends React.Component {
    render() {
        return (
            <div >
                <Router history={browserHistory}>
                    <Route path={"/"} component={App} />
                    <Route path={"/register"} component={Register} />
                    <Route path={"/login"} component={Login} />
                </Router>
            </div>
        );
    }
}

export default Routing;
