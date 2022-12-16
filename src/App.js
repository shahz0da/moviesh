import React from 'react'
import './App.css';
import { Outlet }  from 'react-router-dom';
import Footer from './pages/Home/Footer';
import Header from './pages/Home/Header';


function App() {

  return (
    <div className="App">

      <Header/>
      <Outlet/>
      <Footer/>

      
  
    </div>
  );
}

export default App;
