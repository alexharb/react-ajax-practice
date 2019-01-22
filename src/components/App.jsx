import postGreeting from './postGreeting.js';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
      response: 'Response will go here!'
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onMessageChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state)
    postGreeting(this.state, (data) => {
      this.setState({
        response: data
      })
      })
    
  }

  

  render() {
    return (
      <div>
        <h1>Server Respnse</h1>
        <h2>{this.state.response}</h2>
        <form>
          Name: <input type='text' name='name' onChange={this.onNameChange}></input>
          Message: <input type='text' name='message' onChange={this.onMessageChange}></input>
          <button type='button' onClick={this.handleSubmit}>Submit that info!</button>
        </form>
      </div>
    );
  }
}

export default App;