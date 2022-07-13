import About from 'pages/About/About';
import Sermons from 'pages/Sermons/Sermons';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './Components/FooterComponent/Footer';
import Header from './Components/HeaderComponent/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sermons' element={<Sermons />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
