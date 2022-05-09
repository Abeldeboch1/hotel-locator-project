import Header from './components/Header';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import GlobalStyle from './globalStyle';
import { useEffect, useState } from 'react';
import List from './components/List';
import MyComponent from './components/Map';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
const [places, setPlaces] = useState([])
const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});

useEffect( () => {
fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=2`, {
  headers: {
    Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'  
  }
})
.then((res) => res.json())
.then((data) =>{
  setPlaces(data);
  console.log(data)
})
.catch((error) => console.log(error))
}, [])

  return (      <>
      <GlobalStyle />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>     
        <Grid item xs={12} md={8}>
          <MyComponent
                 setBounds={setBounds}
                 coordinates={coordinates}
                 setCoordinates={setCoordinates}
              //  setChildClicked={setChildClicked}
              //  places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
    
      </Grid>
    </>
  );
}

export default App;
