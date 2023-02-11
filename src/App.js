import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Welcome from './pages/home/welcomePage.js';
import { Place } from './pages/Place/Place';
import { Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/place/:id" element={<Place/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
