import Header from './components/Header';
import styled from 'styled-components';
import { Grid, CssBaseline } from '@material-ui/core';
import GlobalStyle from './globalStyle';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './components/list';
import Map from './components/Map';
// import Layout from './pages/Layout';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {

useEffect( () => {
fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Hotels&latitude=37.786882&longitude=-122.399972&limit=50`, {
  headers: {
    Authorization: 'Bearer 4qYnQWEe5NDiKlIVY2bDZNwBqWbpyRrscNfGJga7Vo-UZiqWZNfsxs5iTT42jPMg6iTFGV4NYlM6tiwRddSMXh6nnsAyFXwg9SY0rz2uCI3jXE8pW9rYELiMCNhyYnYx'  
  }
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))
}, [])




  return (
    // <>
    //   <GlobalStyle />
    //   <Wrapper>
    //     <Header />
    //   </Wrapper>
    //   <div >
    //     <div>
    //       <List />
    //     </div>
    //     <div >
    //       <Map />
    //     </div>
    //   </div>
    // </>
      <>
      <GlobalStyle />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
           
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            
          />
        </Grid>
      </Grid>
    </>
      //   <Routes>
      //   <Route path="/" element={<Layout />}>
      //     <Route index element={<Posts />} />
      //     <Route path="add" element={<AddPost />} />
      //     <Route path="posts/:id" element={<FullPost />} />
      //     <Route path="*" element={<NotFound />} />
      //   </Route>
      // </Routes>
  );
}

export default App;
