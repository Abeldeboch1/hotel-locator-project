import React, { useState } from 'react'
import PlaceDetails from './PlaceDetails';
import styled from 'styled-components';
import Header from './Header';
import { Link } from 'react-router-dom';
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
const List = ({ places, locations, setLocations, runSearch }) => {

  const filteredPosts = places;
  console.log("businesses", places)
  return (
    <>
      <Header
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
            {/* <Link to={`/PostHotel/${i}`}><PlaceDetails 
            place={place}
              /></Link> */}
          </div>
        ))}
      </ListWrapper>
    </>
  )
}
export default List;