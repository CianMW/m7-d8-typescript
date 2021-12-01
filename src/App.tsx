import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavBar from './components/MyNavBar';
import MainSearch from './components/MainSearch';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar />

      <Routes>

        <Route path="/" element={<MainSearch/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
