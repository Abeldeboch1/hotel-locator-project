import Header from './components/Header';
import GlobalStyle from './globalStyle';
import { useEffect, useState } from 'react';
import List from './components/list';
import Map from './components/Map';

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({ lat: -3.745,  lng: -38.523});
  const [bounds, setBounds] = useState({});


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

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  }, []);

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
      <div >
        <div >
          <Map  
           setBounds={setBounds}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </div>
       li
        <div >
          <List places ={places}/>
        </div>
      </div>
    </>

  );
}

export default App;
