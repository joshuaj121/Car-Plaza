import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card';
import {Routes, Route, Link} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Login from './Pages/Auth/Login'

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth/Login' element={<Login />} />

      </Routes>
  
      <Navbar />
    </div>
  );
}

export default App;
