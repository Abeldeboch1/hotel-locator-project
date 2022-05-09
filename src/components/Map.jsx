import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '400px'
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

function MyComponent({setCoordinates, setBounds, coordinates}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAqI4tufG9iVawsC8vs3XKlWdvAyoSWPug"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(coordinates);
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
        // zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options= {''}
      onChange={(e) => {
        //new added
        // setCoordinates({ lat: e.center.lat, lng: e.center.lng });  
        // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
       
          // console.log(e)
          // setCoordinates({
          //   lat: e.center.lat,
          //   lng: e.center.lng,
          // });
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