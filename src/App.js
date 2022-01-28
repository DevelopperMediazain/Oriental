import React from "react"
import './App.css';
import Header  from './components/header/Header';
import Footer from './components/footer/Footer';
import Index  from './components/content/Index';
import Boutique  from './components/content/Boutique';
import {Routes,Route } from "react-router-dom";


function App() {
  return (

    <div>
        <Header/>
                <Routes>   
                        <Route path="/" element={<Index/>} />
                        <Route path="boutique" element={<Boutique/>} />
                </Routes> 
        <Footer/>
    </div>


  );
}

export default App;
