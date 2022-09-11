import React, { useState } from 'react'
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

import { useNavigate } from "react-router-dom";
const
  MapWrapper = styled.div`
  width: 800px;
  height: 300px;
  position: fixed; 
`;
const containerStyle = {
  width: '1100px',
  height: '700px',
  position: 'fixed'
};
/** 
  **hjkhjtkgtuigjkgl,tmhkljiokrlmy,kjikhmyhoi
  * ! alert hjkhjtkgtuigjkgl,tmhkljiokrlmy,kjikhmyhoi
  * ? jhiuehirhfutgtuhoyjhi
  *  @param myparam
  * TODO: jfhuirhgjrgogjgtjijgtgi
  */
  ////jfhuirhgjrgogjgtjijgtgi
 //TODO: jfhuirhgjrgogjgtjijgtgi
  //! alert ftry
  //* cvfgfdfgh
  //? fre5ydfrrththgrtru6u
function Map({ setCoordinates, coordinates, places,id }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null)
  const hotelDetail = (id) => {
    navigate(`/PostHotel/${parseInt(id)}`);
  }
  return isLoaded ? (
    <MapWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={14}
        options={''}
      >
        {places.map((place) => (
          < Marker
          icon={{
            path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "Orange",
            fillOpacity: 2,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
          }} 
   
          position={{ lat: place.coordinates.latitude, lng: place.coordinates.longitude }}
            onClick={() => {
              console.log("first")
              setSelected(place);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.coordinates.latitude, lng: selected.coordinates.longitude }}
            onCloseClick={() => { setSelected(null); }}>
            <div onClick={() => hotelDetail(selected.location_id)}>
              <h2>Name:{selected.name}</h2>  <h5>Rating:{selected.rating} </h5>
              <button> <p> Phone Number: {selected.display_phone}</p></button>
              <button onClick={() => { window.open(selected.url, "_blank"); }}> Website </button>
            </div>
          </InfoWindow>
        ) :
          null
        }
      </GoogleMap>
    </MapWrapper>
  ) : <></>
}

export default React.memo(Map);


//// await axios.get(`https://geocode.maps.co/search?q=${location}`);