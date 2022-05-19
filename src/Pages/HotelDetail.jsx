// import React,  {useContext} from 'react';
// import React, { useContext, useState, useEffect } from 'react';
// import React, {  useState, useEffect } from 'react';
// import LocationContext from "../context/LocationContext";
// import { Business } from '@material-ui/icons';
// import { getPost } from '../Utils/API';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const HotelDetail = () => {
  const [pla, setPla] = useState([]);
  const { id } = useParams();
  const { name, phone } = pla;
  // const { id: restId } = useParams();
  // const { hotels } = useContext(LocationContext);
  console.log("we are in posthotel", pla);
  // const hotel =  hotels.find(({id}) =>  id = restId );
  useEffect(() => {
    fetch(`https://bwreact-yelp-backend.herokuapp.com/api/businesses/${id}`)
      .then((res) => res.json())
      .then((pla) => setPla(pla))
      .catch((error) => console.log(error));
  }, [pla, id]);

  // # Since this effect depends on 'id' to run, we list this value in the deps array and retrigger this effect anytime 'id' changes

  return (
    <main>
      <h3>{name}</h3>
      <h3>{phone}</h3>
    </main>
  );
};

export default HotelDetail;
