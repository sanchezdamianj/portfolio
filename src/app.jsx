import React from "react";
import Header from "./components/header/header";
import Home from './components/home/home'
import Navbar from "./components/nav/nav";
import Aboutme from './components/aboutme/aboutme'
import Members from "./components/members/members";
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'

function WebContent () {
   return( 
    <>
      <div className="bg-circle1"></div>
      <div className='bg-circle2'></div>
        <Navbar />
        <Header />
        <Home />
        <Aboutme />
        <Members />
        <Contact />
        <Footer />
    </>
   )
}

export default WebContent;