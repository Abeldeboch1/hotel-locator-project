import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
<<<<<<< HEAD
=======

>>>>>>> main
import NotFound from './Pages/NotFound';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
<<<<<<< HEAD
        <Route index element={<Home/>} />
=======
        divvvv
        <Route index element={<Home/>} /> 
>>>>>>> main
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;


