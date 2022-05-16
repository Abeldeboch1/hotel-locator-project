import React, { useState } from 'react'
import PlaceDetails from './PlaceDetails';
import styled from 'styled-components';
import Header from '../components/Header';
const ListWrapper = styled.div`
// height: '50vh',
overflow: 'auto',
`;

const filterPosts = (places, query) => {
  if (!query) {
    return places;
  }
  return places.filter((post) => {
    const postName = post.location.city.toLowerCase();
    const postmanfilter = postName.includes(query);
    return postmanfilter
   
  });
};
const List = ({ places, locations, setLocations, runSearch  }) => {
<<<<<<< HEAD
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
=======
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('s');
  // const [searchQuery, setSearchQuery] = useState(query || '');
>>>>>>> main
  const filteredPosts = places;
  return (
    <>
      <Header
        runSearch = {runSearch}
        filteredPosts = {filteredPosts}
        // searchQuery={searchQuery}
        locations = {locations}
        setLocations = {setLocations}
        // setSearchQuery={setSearchQuery}
      />
      <ListWrapper >
        {places?.map((place, i) => (
          <div item key={i} >
            <PlaceDetails 
            place={place}
              />
          </div>
        ))}
      </ListWrapper>
    </>
  )
}
export default List;