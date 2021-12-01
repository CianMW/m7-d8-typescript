import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavBar from './components/MyNavBar';
import MainSearch from './components/MainSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongDetails from './components/SongDetails';


function App() {
  return (
    <div className="App total-cover">
      <BrowserRouter>
      <MyNavBar />
      <div className="total-cover">

      <Routes>

        <Route path="/" element={<MainSearch/>}/>
        <Route path="/songDetails/:id" element={<SongDetails/>}/>
      </Routes>
        </div>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
