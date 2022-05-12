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


// const Header = () => {
  // const [city, setCity] = useState('')


  const Header = ({ searchQuery, setSearchQuery ,locations, setLocations}) => {
    // const [city, setCity] = useState('')
    const history = useNavigate();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };
  return (
    <HeaderWrapper>
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <h4> HOTEL SEARCH FOR: {searchQuery}</h4>
        </label>
        <input

          className="search-text"
          type="text"
          // name=""
          placeholder="Type to search....."
          // onChange={(e) => { setCity(e.target.value) }}
          // value={searchQuery}
          value={locations}

          onChange={(e) => setLocations(e.target.value)}
          id="header-search"
          name="s"

        />
        <button type="submit" >Search</button>
      </form>
      {/* <form
        action="/"
        method="get"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label htmlFor="header-search">

        </label>
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
      dddd */}
    </HeaderWrapper>

  );
}
export default Header;
// import {useNavigate} from 'react-router-dom';

// const SearchBar = ({ searchQuery, setSearchQuery }) => {
//   const navigate = useNavigate();
//     // const history = useHistory();
//     const onSubmit = (e) => {
//       navigate.push(`?s=${searchQuery}`);
//         e.preventDefault();
//     };

//     return (
//         <form
//             action="/"
//             method="get"
//             autoComplete="off"
//             onSubmit={onSubmit}
//         >
//             <label htmlFor="header-search">
//                 <span className="visually-hidden">
//                     Search blog posts
//                 </span>
//             </label>
//             <input
//                 value={searchQuery}
//                 onInput={(e) => setSearchQuery(e.target.value)}
//                 type="text"
//                 id="header-search"
//                 placeholder="Search blog posts"
//                 name="s"
//             />
//             <button type="submit">Search</button>
//         </form>
//     );
// };

// export default SearchBar;
