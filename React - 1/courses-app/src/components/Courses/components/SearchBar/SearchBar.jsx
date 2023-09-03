import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <Input
        labelText="Search Course:"
        placeholderText="Enter course title or ID..."
        onChange={handleSearchChange}
      />
      <Button buttonText="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
