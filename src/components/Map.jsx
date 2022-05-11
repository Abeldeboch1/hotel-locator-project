import React from 'react'
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const
  MapWrapper = styled.div`
  width: 842px;
  height: 450px;
  position: fixed; 
`;

const containerStyle = {
  width: '850px',
  height: '390px',
  position: 'fixed' 
};

const ccoordinates = {
  lat: 30.332184,
  lng: -81.655647,
};

function MyComponent({ setCoordinates, setBounds, coordinates, places}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAqI4tufG9iVawsC8vs3XKlWdvAyoSWPug"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(coordinates);
    // map.fitBounds(bounds);
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
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={''}
        onChange={(e) => {
          // console.log(e)
          // setCoordinates({
          //   lat: e.center.lat,
          //   lng: e.center.lng,
          // });
          // setBounds({
          //   ne: e.marginBounds.ne,
          //   sw: e.marginBounds.sw
          // })
        }}

      >
        {places.map((place) => (
         < Marker position={{lat:place.coordinates.latitude, lng:place.coordinates.longitude}}/>
        ))

        }
        { /* Child components, such as markers, info windows, etc. */}
        <>

        </>
      </GoogleMap>
    </MapWrapper>
  ) : <></>
}

export default React.memo(MyComponent)