import React, { Component } from 'react'; 
import './App.css';
import List from './List';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),               // Store the date
      term: '',                       // Store what is being passed as a value to input
      items: []                       // Store every value that is being passed to our to-do list
    };
  }

  // Function which changes our state depending on the current input value
  onChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  /* Function that cleans input field after submit is triggered, pushes
   * every term to the arrray of items and the prevent default stops 
   * the default action of an element from happening 
  */
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  // Set up the timer whenever app is rendered to the DOM for the first time
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Clear the timer whenever the DOM produced by the App is removed 
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  // Update the time every second
  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className="Heading">
        <title>To-Do List</title>
        <h1>Juan's To-Do List</h1>
        <h2>Today's date is: {this.state.date.toLocaleDateString()}</h2>
        <h2> {this.state.date.toLocaleTimeString()} </h2>
        <div>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}
export default App;