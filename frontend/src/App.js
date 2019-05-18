import React from 'react';
import ReactDOM from 'react-dom'
import "./stylesheets/App.css"
import Footer, { Button } from './components/layouts/footer'
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
      <div className="App Bar" >
        <Button />
        <h1> <Header />  </h1>
        <h1> <Footer />  </h1>
      </div>
    );
  }
}

export default App;
