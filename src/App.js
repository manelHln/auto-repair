import React from 'react';
import './App.css'
import {Navbar, Header, Services, About, Why, Showcase, Newsletter, Footer} from "./components"

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Why />
      <Showcase />
      <Newsletter />
      <Footer />
    </div>
    
  )
}

export default App