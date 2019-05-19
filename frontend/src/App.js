import React from 'react';
import ReactDOM from 'react-dom'
import "./stylesheets/App.css"
import Footer from './components/layouts/footer'
import Header from './components/layouts/header'


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
        <h1>Welcome back</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
