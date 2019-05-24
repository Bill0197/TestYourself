import React from 'react';
import ReactDOM from 'react-dom'
import "./stylesheets/App.css"
import Footer from './components/layouts/footer'
import Header from './components/layouts/header'
import Team from './components/team'
import ComingSoon from './components/coming-soon'
import Partners from './components/partners'
import Icons from './components/icons'
import NavBar from './components/navbar'
import Register from './components/register'
import { HashRouter } from 'react-router-dom'
import { Router, Route, browserHistory } from 'react-router'

// git config --global core.autocrlf false
class App extends React.Component {
  render() {
    return (
      <div >
        <NavBar />
        <Header />
        <ComingSoon />
        <Icons />
        <Team />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default App;
