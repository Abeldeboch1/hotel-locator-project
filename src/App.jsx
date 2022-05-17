import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './components/Home';
import PostHotel from './Pages/PostHotel';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} /> 
        {/* <Route path="PostHotel" exact element={<PostHotel/>} /> */}
        <Route path="PostHotel/:id" element={<PostHotel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;


