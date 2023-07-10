import About from 'Pages/About/About';
import Contact from 'Pages/Contact/Contact';
import Blog from 'Pages/Blog/Blog';
import BlogPost from 'Pages/BlogPost/BlogPost';
import SermonEvent from 'Pages/SermonEvent/SermonEvent';
import Sermons from 'Pages/Sermons/Sermons';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import StyleGuide from 'Pages/StyleGuide/StyleGuide';
import DefaultLayout from 'Layouts/Default/Default';

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
