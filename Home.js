import React, {Component} from 'react';
//import {API_URL, IMAGE_BASE_URL } <---- IMPORT IMAGE
//firebase fetching

//import Header from './Header/Header';
//import NavigationBar from './NavigationBar/NavigationBar';
//import Footer from './Footer/Footer';
//import Spinner from './Spinner/Spinner';
import './Home.css';

class Home extends Component {
    state = {
        image: [],
        loading: false,
    }

    //lifecycle method
    componentDidMount() {
        this.setState({loading: true});
        //const endpoint = `${API_URL}`
        //this.fetchItems(endpoint);
    }

    // fetchItems = (endpoint) => {
    //     fetch(endpoint)
    //     .then(result => result.json())
    //     .then(result => {
    //         this.setState({
    //                image: [...this.state.image, ...result.results],
    //                loading: false,
    //         })
    //     })
    // }

    render() {
        return(
            <div>
                {/* 
                <Header />
                <NavigationBar />
                <Footer />
                */}
                <img src="/Users/svetlanamonson/projects/utah-explore/utah-explore/src/components/Home/mesaarch-sunrise.png" 
                alt="mesaarch-sunrise" />
                
            </div>
        )
    }
}
export default Home;
