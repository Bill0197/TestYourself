import React from 'react';
import ReactDOM from 'react-dom'
import Register from './components/register'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Router, Route, browserHistory } from 'react-router'

class Routing extends React.Component {
    render() {
        return (
            <div >
                <Router history={browserHistory}>
                    <Route path={"/"} component={App} />
                    <Route path={"register"} component={Register} />
                </Router>
            </div>
        );
    }
}

export default Routing;
