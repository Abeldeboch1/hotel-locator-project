import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent({setCoordinates, setBounds, coordinates}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCE-weop7ZOan0050zwgtZyVOmmZo3omRs"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultCenter= {coordinates}
        center={coordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        // margin = {[50, 50, 50, 50]}
        options= {''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({
            lat: e.center.lat,
            lng: e.center.lng,
          });
          setBounds({
              ne: e.marginBounds.ne,
              sw: e.marginBounds.sw
          })
        }}
     
      >
          { /* Child components, such as markers, info windows, etc. */ }
        <>
       
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)