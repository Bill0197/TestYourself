import React from 'react';
import ReactDOM from 'react-dom'
import App from './view/App'
import { HashRouter } from 'react-router-dom'
import { Router, Route, browserHistory } from 'react-router'

class Routing extends React.Component {
    render() {
        return (
            <div >
                <Router history={browserHistory}>
                    <Route path={"/"} component={App} />
                </Router>
            </div>
        );
    }
}

export default Routing;
