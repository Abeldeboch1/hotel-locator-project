import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        divvvv
        <Route index element={<Home/>} /> 
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;


