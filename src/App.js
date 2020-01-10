import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './components/search-box/SearchBox.component.jsx';
import CardList from './components/card-list/CardList.component';
import Scroll from './components/scroll/Scroll';
import './App.css';
import Loading from '../src/Loading.gif';

import { setSearchField, requestRobots } from './redux/actions/actions';

class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  onGettingContacts =() => {
    this.setState({ string: "Reynaldo Borges, Phone: 940756621, Email: reynaldob.webdev@gmail.com"});

    setTimeout(() => {
      this.setState({ string: "Click me again"});
    }, 5000);

  }

  // handleChange = e => {
  //   this.setState({ searchField: e.target.value});
  // }

  render() {

    const { searchField, handleChange, monsters, isPending } = this.props;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return isPending ? <img style={{position: 'fixed', left: '40%', top: '40%'}} src={Loading} alt='Spinner' /> : 
    (
      <div className="App">  
        <h1>RB-Monster</h1>
        <SearchBox 
        type="search"
        placeholder="Search a Monster by name"
        handleChange={handleChange}
        />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  monsters: state.requestRobots.monsters,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
