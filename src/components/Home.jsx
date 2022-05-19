import { useEffect, useState } from "react";
// import { useState } from 'react';
import styled from "styled-components";
import List from "./list";
import Map from "./Map";
import getLocation from "../Utils/Location";
// import PostHotel from '../Pages/HotelDetail'
import LocationContext from "../context/LocationContext";

const HomeWrapper = styled.div`
  display: flex;
  .Wrapp {
    width: 370px;
  }
`;
const Home = () => {
  const [locations, setLocations] = useState("Jacksonville, Fl");
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({
    lat: 30.3321838,
    lng: -81.655651,
  });
  // const [coordinates, setCoordinates] = useState({});
  const runSearch = () => {
    getLocation(locations)
      .then((res) => {
        console.log(res.data);
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;
        fetch(
          `https://bwreact-yelp-backend.herokuapp.com/api/search?term=Hotels&lat=${lat}&lon=${lon}&limit=50`
        )
          .then((res) => res.json())
          .then((data) => {
            setPlaces(data.businesses);
            console.log(data);
            setCoordinates({ lat: Number(data.lat), lng: Number(data.lon) });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    runSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeWrapper container>
        <LocationContext.Provider value={{ places: places }}>
          <div className="listWrapp">
            <List
              places={places}
              locations={locations}
              setLocations={setLocations}
              runSearch={runSearch}
            />
          </div>
          <div>
            <Map
              places={places}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
            />
          </div>
        </LocationContext.Provider>
      </HomeWrapper>
    </>
  );
};

export default Home;
