import React, { Component } from 'react';
import SearchBox from './components/search-box/SearchBox.component.jsx';
import CardList from './components/card-list/CardList.component';
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}));
  }

  onGettingContacts =() => {
    this.setState({ string: "Reynaldo Borges, Phone: 940756621, Email: reynaldob.webdev@gmail.com"});

    setTimeout(() => {
      this.setState({ string: "Click me again"});
    }, 5000);

  }

  handleChange = e => {
    this.setState({ searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">  
        <h1>RB-Monster</h1>
        <SearchBox 
        type="search"
        placeholder="Search a Monster by name"
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
