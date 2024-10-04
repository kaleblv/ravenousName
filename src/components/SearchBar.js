import React, { useState } from "react";

const SearchBar = () => {

    // state for search term, location and sort options
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    // sorting options object
    const sortOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    // function to handle search
    const handleSearch = (event) => {
        event.preventDefault();
        // send search term and location to parent component
        console.log('Search Terml', searchTerm);
        console.log('Location', location);
        console.log('Sort By', sortBy);
    };

    return (
        <form onSubmit={handleSearch} >
            <input type="text" placeholder="Search for restaurants" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <input type="text" placeholder="Enter location" value={location} onChange={(event) => setLocation(event.target.value)} />
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                {Object.entries(sortOptions).map(([option, value]) => (
                    <option key={value} value={value}>
                        {option}
                    </option>
                ))}
            </select>
            <button type="submit">Search</button>
        </form>
    )



}

export default SearchBar;