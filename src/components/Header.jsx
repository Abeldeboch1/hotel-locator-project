import React, { useState } from 'react';
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
  input:hover {
    border-color: red;
  }

`;

const Header = () => {
    const [city, setCity] = useState('')

    return (
        <HeaderWrapper>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <h2> RESTAURANT SEARCH FOR: {city}</h2>
                </label>
                <input
                    className="search-text"
                    type="text"
                    name=""
                    value={city}
                    placeholder="Type to search....."
                    onChange={(e) => { setCity(e.target.value) }}
                />
                <button type="submit" >Search</button>
            </form>
        </HeaderWrapper>

    );
}
export default Header;