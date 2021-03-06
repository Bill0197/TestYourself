import React from 'react';
import App from './view/App'
import Register from './view/register'
// import Login from './view/login'
import Data from './view/data'
import All from './view/allusers'
import Test from './components/test'
import Math from './view/math'
import { Router, Route, browserHistory } from 'react-router'

class Routing extends React.Component {
    render() {
        return (
            <div >
                <Router history={browserHistory}>
                    <Route path={"/"} component={App} />
                    <Route path={"/register"} component={Register} />
                    {/* <Route path={"/login"} component={Login} /> */}
                    <Route path={'/data'} component={Data} />
                    <Route path={'/data/allusers'} component={All} />
                    <Route path={'/test'} component={Test} />
                    <Route path={'/math'} component={Math} />
                </Router>
            </div>
        );
    }
}

export default Routing;
