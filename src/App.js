import React from "react"
import './App.css';
import Header  from './components/header/Header';
import Footer from './components/footer/Footer';
import Index  from './components/content/Index';
import Boutique  from './components/content/Boutique';
import SingleProduct  from './components/content/SingleProduct';
import Checkout  from './components/content/Checkout';
import {Routes,Route } from "react-router-dom";


function App() {
  return (

    <div>
        <Header/>
                <Routes>   
                        <Route path="/" element={<Index/>} />
                        <Route path="boutique" element={<Boutique/>} />
                        <Route exact path="SingleProduct/:id" element={<SingleProduct/>} />
                        <Route exact path="Checkout" element={<Checkout/>} />
                </Routes> 
        <Footer/>
    </div>


  );
}

export default App ;
