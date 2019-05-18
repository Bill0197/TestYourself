import React from 'react';
import ReactDOM from 'react-dom'
import "./stylesheets/App.css"

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
      <div className="" >
        <h1>Hello React </h1>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
