import React, { useState } from 'react'
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";
const
  MapWrapper = styled.div`
  width: 842px;
  height: 450px;
  position: fixed; 
`;
const containerStyle = {
  width: '890px',
  height: '570px',
  position: 'fixed'
};
function MyComponent({ setCoordinates, setBounds, coordinates, places }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAqI4tufG9iVawsC8vs3XKlWdvAyoSWPug"
   
})
  const navigate = useNavigate();
  const [map, setMap] = React.useState(null)
  const [selected, setSelected] = useState(null)

  const onSelectRest = (id) => {
    navigate(`/place-details/${parseInt(id)}`);
  }
  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <MapWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}

        defaultCenter={coordinates}
        center={coordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={''}
        onChange={(e) => {
        }}
      >
        {places.map((place) => (
          < Marker position={{ lat: place.coordinates.latitude, lng: place.coordinates.longitude }}
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
            <div className='restName' onClick={() => onSelectRest(selected.location_id)}>
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
export default React.memo(MyComponent)


// await axios.get(`https://geocode.maps.co/search?q=${location}`);