import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Buttons from './components/Buttons';
import SearchBar from './components/SearchBar';
import ShipCard from './components/ShipCard';
import PersonCard from './components/PersonCard';
import FilmCard from './components/FilmCard';
import SpeciesCard from './components/SpeciesCard'
import { addBackToTop } from 'vanilla-back-to-top';


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

const speciesURLS = [
  "https://swapi.co/api/species/",
  "https://swapi.co/api/species/?page=1",
  "https://swapi.co/api/species/?page=2",
  "https://swapi.co/api/species/?page=3",
  "https://swapi.co/api/species/?page=4"
]

addBackToTop();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      people: [],
      starships: [],
      films: [],
      species: [],
      searchfield: '',
      selected: ''
    }
    this.onChangeStarship = this.onChangeStarship.bind(this);
    this.onStarshipClick = this.onStarshipClick.bind(this);
    this.onChangePeople = this.onChangePeople.bind(this);
    this.onPeopleClick = this.onPeopleClick.bind(this);
    this.onChangeFilms = this.onChangeFilms.bind(this);
    this.onFilmsClick = this.onFilmsClick.bind(this);
    this.onChangeSpecies = this.onChangeSpecies.bind(this);
    this.onSpeciesClick = this.onSpeciesClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onChangePeople(){
    if(this.state.selected !== 'people') {
      Promise.all(peopleURLS.map(async url => {
        await fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({people: this.state.people.concat(data.results) })})
        const sortedPeople = this.state.people.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({people: sortedPeople})
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
    this.setState({searchfield: ''})
  }

  onChangeStarship(){
      if(this.state.selected !== 'starship') {
        Promise.all(starshipURLS.map(async url => {
          await fetch(url)
          .then(response => response.json())
          .then(data => {this.setState({starships: this.state.starships.concat(data.results) })})
          const sortedStarShips = this.state.starships.sort((a, b) => a.name.localeCompare(b.name));
          this.setState({starships: sortedStarShips})
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
    this.setState({species: []})
    this.setState({searchfield: ''})
  }

  onChangeFilms(){
    if(this.state.selected !== 'films') {
      Promise.all(filmsURLS.map(async url => {
        await fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({films: this.state.films.concat(data.results) })})
        const sortedFilms = this.state.films.sort((a, b) => a.episode_id - b.episode_id);
        this.setState({films: sortedFilms})
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
    this.setState({species: []})
    this.setState({searchfield: ''})
  }

  onChangeSpecies(){
    if(this.state.selected !== 'species') {
      Promise.all(speciesURLS.map(async url => {
        await fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({species: this.state.species.concat(data.results) })})
        const sortedSpecies = this.state.species.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({species: sortedSpecies})
      }))
    } else {
      console.log('Stop pushing the button, the starship info is already loaded')
    };
  } 

  onSpeciesClick (){
  this.onChangeSpecies()
  this.setState({selected: 'species'})
  this.setState({people: []})
  this.setState({films: []})
  this.setState({starships: []})
  this.setState({searchfield: ''})
  }

  onSearchChange(event){
    this.setState({searchfield: event.target.value})

  }

  render() {
    const filteredPeople = this.state.people.filter(data => {
      return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }) 

    const filteredShips = this.state.starships.filter(data => {
      return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    const filteredFilms = this.state.films.filter(data => {
      return data.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    const filteredSpecies =  this.state.species.filter(data => {
      return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
        <h1 className='tc title yellow'>Star Wars</h1>
        <h2 className='tc text yellow'>The entire knowledge about all things Star Wars at your fingertips</h2>
        <div className='nav'>
          <Buttons 
          onClickPeople={this.onPeopleClick} 
          onClickShips={this.onStarshipClick} 
          onClickFilms={this.onFilmsClick} 
          onClickSpecies={this.onSpeciesClick}
          />
          <SearchBar onSearchChange={this.onSearchChange}/>
        </div>
        <div className="wrapper">
          <PersonCard people={filteredPeople}/>
          <ShipCard ships={filteredShips}/>
          <FilmCard films={filteredFilms}/>
          <SpeciesCard species={filteredSpecies}/>
        </div>
        
      </div>
      
    )
  }
}

export default App;
