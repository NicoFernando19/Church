import About from 'pages/About/About';
import Contact from 'pages/Contact/Contact';
import Blog from 'pages/Blog/Blog';
import BlogPost from 'pages/BlogPost/BlogPost';
import SermonEvent from 'pages/SermonEvent/SermonEvent';
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
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:title' element={<BlogPost />} />
          <Route path='/sermons' element={<Sermons />} />
          <Route path='/sermons/event' element={<SermonEvent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
