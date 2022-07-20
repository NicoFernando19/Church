import About from 'pages/About/About';
import Contact from 'pages/Contact/Contact';
import Blog from 'pages/Blog/Blog';
import BlogPost from 'pages/BlogPost/BlogPost';
import SermonEvent from 'pages/SermonEvent/SermonEvent';
import Sermons from 'pages/Sermons/Sermons';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import StyleGuide from 'pages/StyleGuide/StyleGuide';
import DefaultLayout from 'layouts/default/Default';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/Style' element={<StyleGuide />} />
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:title' element={<BlogPost />} />
            <Route path='/sermons' element={<Sermons />} />
            <Route path='/sermons/event' element={<SermonEvent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
