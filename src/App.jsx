import Header from './components/Header';
import GlobalStyle from './globalStyle';
import { useEffect, useState } from 'react';
import List from './components/list';
import Map from './components/Map';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';


const App = () => {
  const [places, setPlaces] = useState([])
  // const [coordinates, setCoordinates] = useState({ lat: -3.745, lng: -38.523 });
  const [coordinates, setCoordinates] = useState({ lat: 30.332184, lng: -81.655647 });
  const [bounds, setBounds] = useState({});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoordinates({
  //         lat: latitude,
  //         lng: longitude,
  //       });
  //     }
  //   );
  // }, []);
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=50`, {
      headers: {
        Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.businesses[0].id)
        console.log(data.businesses[0].name);
        console.log(data.region.center.longitude);
        // setPlaces(data)
        setPlaces(data.businesses)
      }
      )
      .catch((error) => console.log(error))
  }, [])



// useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords: { latitude, longitude } }) => {
//         setCoordinates({
//           lat: latitude,
//           lng: longitude,
//         });
//       }
//     );
//   }, []);
/////////////////////////////////////
  //  useEffect(() => {
  //   console.log(coordinates, bounds);
  //   // Answer: here -> getPlacesData(bounds?.sw, bounds?.ne).then((data) => {….. where i receive this data
  //   // getPlacesData(bounds.sw, bounds.ne)

  //       setPlaces(data);
  //     })
  // }, [coordinates, bounds ]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Grid container  >
      <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setBounds={setBounds}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
            />
          </Grid>     
      </Grid>
    </>

  );
}

export default App;
