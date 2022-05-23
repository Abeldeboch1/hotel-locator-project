import React, { useState } from 'react'
import PlaceDetails from './PlaceDetails';
import styled from 'styled-components';
import SearchBar from './SearchBar';
const ListWrapper = styled.div`
// height: '50vh',
overflow: 'auto',
`;
const List = ({ places, locations, setLocations, runSearch }) => {
  const [darkTheme, setDarkTheme] = useState(false)
  const switchTheme = () => setDarkTheme(!darkTheme)
  const filteredPosts = places;
  console.log("businesses", places)
  return (
    <>
      <SearchBar
      switchTheme={switchTheme} theme={darkTheme}
        runSearch = {runSearch}
        filteredPosts = {filteredPosts}
        locations = {locations}
        setLocations = {setLocations}
      />
      <ListWrapper >
        {places?.map((place, i) => (
          <div item key={i} >
            <PlaceDetails 
            id = {place.id}
            place={place}
              />
          </div>
        ))}
      </ListWrapper>
    </>
  )
}
export default List;