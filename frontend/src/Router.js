import React from 'react';
import App from './view/App'
import Register from './view/register'
import { Router, Route, browserHistory } from 'react-router'

class Routing extends React.Component {
    render() {
        return (
            <div >
                <Router history={browserHistory}>
                    <Route path={"/"} component={App} />
                    <Route path={"/register"} component={Register} />
                </Router>
            </div>
        );
    }
}

export default Routing;
