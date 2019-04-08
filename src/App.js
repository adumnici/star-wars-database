import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Buttons from './components/Buttons';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import ShipCard from './components/ShipCard';
import PersonCard from './components/PersonCard';
import FilmCard from './components/FilmCard';


const peopleURLS=[
  "https://swapi.co/api/people/",
  "https://swapi.co/api/people/?page=2",
  "https://swapi.co/api/people/?page=3",
  "https://swapi.co/api/people/?page=4",
  "https://swapi.co/api/people/?page=5",
  "https://swapi.co/api/people/?page=6",
  "https://swapi.co/api/people/?page=7",
  "https://swapi.co/api/people/?page=8",
  ];

const starshipURLS=[
  "https://swapi.co/api/starships/",
  "https://swapi.co/api/starships/?page=1",
  "https://swapi.co/api/starships/?page=2",
  "https://swapi.co/api/starships/?page=3",
  "https://swapi.co/api/starships/?page=4"
]

const filmsURLS=[
  "https://swapi.co/api/films/"
]

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      people: [],
      starships: [],
      films: [],
      selected: ''
    }
    this.onChangeStarship = this.onChangeStarship.bind(this);
    this.onStarshipClick = this.onStarshipClick.bind(this);
    this.onChangePeople = this.onChangePeople.bind(this);
    this.onPeopleClick = this.onPeopleClick.bind(this);
    this.onChangeFilms = this.onChangeFilms.bind(this);
    this.onFilmsClick = this.onFilmsClick.bind(this);
  }

  onChangePeople(){
    if(this.state.selected !== 'people') {
      Promise.all(peopleURLS.map(async url => {
        await fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({people: this.state.people.concat(data.results) })})
        const sortedPeople = this.state.people.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({people: sortedPeople})
    
        console.log(this.state.selected)
      }))
    } else {
      console.log('Stop pushing the button, the people info is already loaded')
    }
     
  }

  onPeopleClick(){
    this.onChangePeople();
    this.setState({selected: 'people'});
    this.setState({starships: []})
    this.setState({films: []})
    console.log(this.state.selected)
  }

  onChangeStarship(){
      if(this.state.selected !== 'starship') {
        Promise.all(starshipURLS.map(async url => {
          await fetch(url)
          .then(response => response.json())
          .then(data => {this.setState({starships: this.state.starships.concat(data.results) })})
          const sortedStarShips = this.state.starships.sort((a, b) => a.name.localeCompare(b.name));
          this.setState({starships: sortedStarShips})
          console.log(this.state.starships)
        }))
      } else {
        console.log('Stop pushing the button, the starship info is already loaded')
      };
    } 

  onStarshipClick (){
    this.onChangeStarship()
    this.setState({selected: 'starship'})
    this.setState({people: []})
    this.setState({films: []})
    console.log(this.state.selected)
  }

  onChangeFilms(){
    if(this.state.selected !== 'films') {
      Promise.all(filmsURLS.map(async url => {
        await fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({films: this.state.films.concat(data.results) })})
        const sortedFilms = this.state.films.sort((a, b) => a.episode_id - b.episode_id);
        this.setState({films: sortedFilms})
        console.log(this.state.films)
      }))
    } else {
      console.log('Stop pushing the button, the starship info is already loaded')
    };
  } 

onFilmsClick (){
  this.onChangeFilms()
  this.setState({selected: 'films'})
  this.setState({people: []})
  this.setState({starships: []})
  console.log(this.state.selected)
}

  render() {
    return (
      <div>
        <h1>Star Wars database</h1>
        <Buttons onClickPeople={this.onPeopleClick} onClickShips={this.onStarshipClick} onClickFilms={this.onFilmsClick}/>
        <SearchBar />
        <CardList />
        <PersonCard people={this.state.people}/>
        <ShipCard ships={this.state.starships}/>
        <FilmCard films={this.state.films}/>
      </div>
      
    )
  }
}

export default App;
