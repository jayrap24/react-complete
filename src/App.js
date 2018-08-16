import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
      {name:'max', age: 28},
      {name:'Manu', age: 18},
      {name:'Sam', age: 24}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
      this.setState({
        persons: [
          {name: 'newName', age: 28},
          {name:'Kobe', age: 18},
          {name:'Lil Wayne', age: 24}
        ]
      })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 18},
        {name:'Kanye', age: 24}
      ]
  })
}


  render() {
     return (
      <div className="App">
        <h1>hi im react</h1>
        <h2>Another heading</h2>
        <button onClick = {() => this.switchNameHandler('Maximiliian!!!')}>switch name</button>
          <Person 
            name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
          <Person 
            name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      ); 
  }
}

export default App;
