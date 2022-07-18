import About from 'pages/About/About';
import Blog from 'pages/Blog/Blog';
import BlogPost from 'pages/BlogPost/BlogPost';
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
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:title' element={<BlogPost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
