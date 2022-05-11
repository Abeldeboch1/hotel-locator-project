import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AddPost from './Pages/AddPost';
import FullPost from './Pages/FullPost';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        divvvv
        <Route index element={<Home/>} />
        <Route path="add" element={<AddPost />} />
        <Route path="posts/:id" element={<FullPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;


// import Header from './components/Header';
// import GlobalStyle from './globalStyle';
// import { useEffect, useState } from 'react';
// import List from './components/list';
// import Map from './components/Map';
// import { Grid } from '@material-ui/core';

// const App = () => {
//   const [places, setPlaces] = useState([])
//   const [coordinates, setCoordinates] = useState({ lat: 30.332184, lng: -81.655647 });
//   // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
//   const [bounds, setBounds] = useState({});

//   // useEffect(() => {
//   //   navigator.geolocation.getCurrentPosition(
//   //     ({ coords: { latitude, longitude } }) => {
//   //       setCoordinates({
//   //         lat: latitude,
//   //         lng: longitude,
//   //       });
//   //     }
//   //   );
//   // }, []);
//   useEffect(() => {
//     fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=50`, {
//       headers: {
//         Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.businesses);
//         setPlaces(data.businesses)
//       }
//       )
//       .catch((error) => console.log(error))
//   }, [coordinates])

//   return (
//     <>
//       <GlobalStyle />
//       <Header />
//       <Grid container  >
//       <Grid item xs={12} md={4}>
//           <List places={places} />
//         </Grid>
//           <Grid item xs={12} md={8}>
//             <Map
//               setBounds={setBounds}
//               coordinates={coordinates}
//               setCoordinates={setCoordinates}
//             />
//           </Grid>     
//       </Grid>
//     </>

//   );
// }

// export default App;
