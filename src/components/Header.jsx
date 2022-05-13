import React, { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
const HeaderWrapper = styled.header`
position: sticky;   
top: 0; 
  align-items: center;
  background-color: #344;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  input {
    padding: 0.5rem;
  }
  input:hover {
    border-color: red;
  }
`;
const Header = ({ searchQuery, setSearchQuery, locations, setLocations,
runSearch }) => {
    const history = useNavigate();
    const onSubmit = (e) => {
      e.preventDefault();
      runSearch(); 
    };
  return (
    <HeaderWrapper>
      <form  autoComplete="off" onSubmit={onSubmit} >
        <label htmlFor="header-search">
          <h4> HOTEL SEARCH FOR: {searchQuery}</h4>
        </label>
        <input

          className="search-text"
          type="text"
         
          placeholder="Type to search....."
          value={locations}

          onChange={(e) => setLocations(e.target.value)}
          id="header-search"
          name="s"

        />
        <button type="submit" >Search</button>
      </form>
      
    </HeaderWrapper>
  );
}
export default Header;

