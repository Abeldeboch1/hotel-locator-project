import React, { useState } from 'react'
import PlaceDetails from './PlaceDetails';
import styled from 'styled-components';
import Header from '../components/Header';
import Map from '../components/Map';
import Announcer from '../announcer';
const ListWrapper = styled.div`
height: '75vh',
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
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = places;
  return (
    <>
      <Header
        runSearch = {runSearch}
        searchQuery={searchQuery}
        locations = {locations}
        setLocations = {setLocations}

        setSearchQuery={setSearchQuery}
      />
       <Announcer
        message={`${filteredPosts.length} Hotels`}
      />
      <ListWrapper >
        {filteredPosts?.map((place, i) => (
          <div item key={i} >
            <PlaceDetails place={place}  />
          </div>
        ))}
      </ListWrapper>
    </>
  )
}
export default List;
