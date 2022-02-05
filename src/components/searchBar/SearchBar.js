import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setLocationHandler }) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setLocationHandler(query);
    }

    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek een stad in Nederland"
            />

            <button className= "search-button">
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;