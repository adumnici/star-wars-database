import React from 'react';
import './SearchBar.css';

const SearchBar = ({onSearchChange}) => {
    return (
        <div className="searchBar">
             <input type="text" id="searchField" placeholder="Search ..." onChange={onSearchChange} className="pa3 ba b--green bg-lightest-blue tc bar"/>  
        </div>
       
    )
}

export default SearchBar;