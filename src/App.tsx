import React from "react";
import "./App.scss";
import Footer from "./Components/FooterComponent/Footer";
import Header from "./Components/HeaderComponent/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
