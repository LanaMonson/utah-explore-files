import React, {Component} from 'react';
//firebase fetching

import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
//import image from '../images/mesaarch-sunrise.png'  <----?????

import './Home.css';

class Home extends Component {
    state = {
        image: [],
        loading: false,
    }

    render() {
        return(
            <div>
                {/* 
                <Header />
                <NavigationBar />
                <Footer />
                */}
                <img src="../images/mesaarch-sunrise.png" 
                alt="mesaarch-sunrise" />
                
            </div>
        )
    }
}
export default Home;

// IMAGE PATH:
// /Users/svetlanamonson/projects/utah-explore/utah-explore/src/components/images/mesaarch-sunrise.png
// "../images/mesaarch-sunrise.png"
