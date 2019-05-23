import React from 'react';
import ReactDOM from 'react-dom'
import "./stylesheets/App.css"
import Footer from './components/layouts/footer'
import Header from './components/layouts/header'
import Team from './components/team'
import ComingSoon from './components/coming-soon'
import Partners from './components/partners'
import Icons from './components/icons'

// git config --global core.autocrlf false
class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }
  render() {
    return (
      <div >
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
