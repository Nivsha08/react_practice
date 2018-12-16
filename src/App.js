import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [
        { id: 1, name: "Niv", age: 25, status: "" },
        { id: 2, name: "Prague", age: 22, status: "" },
        { id: 3, name: "Roie", age: 26, status: "" },
        { id: 4, name: "Yael", age: 24, status: "" },
    ]
  };

  deletePerson = (index) => {
    const newList = [...this.state.persons];
    newList.splice(index, 1);
    this.setState({ persons: newList });
  };

  statusUpdateHandler = (event, i) => {
    if (event.target.value.length === 0) return;
    const index = this.state.persons.findIndex(p => p.id === i);
    const p = {...this.state.persons[index]};
    p.status = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = p;
    this.setState({persons});
    event.target.value = "";
  };

  render() {
    return (
      <div className="App">
          {this.state.persons.map((p, i) => {
              return <Person name={p.name} age={p.age} status={p.status} key={p.id}
                             update={event => this.statusUpdateHandler(event, p.id)}
                             click={this.deletePerson.bind(this, i)} />
          })}
      </div>
    );
  }
}

export default App;
