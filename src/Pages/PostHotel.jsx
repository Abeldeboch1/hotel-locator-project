// import React,  {useContext} from 'react';
import React, { useState, useEffect, useContext } from 'react';
import LocationContext from "../context/LocationContext";
import { Route, useParams, useNavigate } from 'react-router'; 
import { getPost } from '../Utils/API';


const PostHotel = () => {
  const { id: restId } = useParams();
  const { places } = useContext(LocationContext); 
  console.log("we are in posthotel", places)
  const hotel =  places.find(({id}) =>  id == restId ); 
 
// # Since this effect depends on 'id' to run, we list this value in the deps array and retrigger this effect anytime 'id' changes

  return (
    <main>
       {/* <h1>hotel</h1> */}
    <h3>{hotel.name}</h3>

    </main>
  );
};

export default PostHotel;
