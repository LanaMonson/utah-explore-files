import React, { Component } from 'react';
import Routing from './Routing/Routing';
import Header from './Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer/Footer.js';



class Layout extends Component {
  render() {
    return(
      <div>
        
        <Header/>
        <Routing />
        <NavigationBar />
        <Footer />
      
      </div>
    );
  }
}

 export default Layout; 
