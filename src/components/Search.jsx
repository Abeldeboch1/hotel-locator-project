import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  align-items: center;
  background-color: #344;
  color: #fefefe;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  input {
    padding: 0.5rem;
  }

  
`;


const SearchBar = () => (
    <HeaderWrapper>

        <form action="/" method="get">
            <label htmlFor="header-search">
                <h2> RESTAURANT SEARCH FOR ... </h2>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Type the city"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    </HeaderWrapper>

);

export default SearchBar;