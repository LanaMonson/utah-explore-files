import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import ActivityPage from '../ActivityPage/ActivityPage';
import RelaxPage from '../RelaxPage/RelaxPage';
import EatPage from '../EatPage/EatPage';
import Carousel from '../Home/Carousel';
import SignIn from '../Login/SignIn';
//import * as serviceWorker from '../serviceWorker';
//import * as serviceWorker from '/Users/svetlanamonson/projects/utah-explore/utah-explore/src/serviceWorker.js';


class Routing extends Component {
    render(){
        return(    
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/activity" component={ActivityPage}/>
                    <Route path="/relax" component={RelaxPage}/>
                    <Route path="/eat" component={EatPage}/>
                    <Route path="/carousel" component={Carousel}/>
                </div>
            </Router>
        );
    }
}

//serviceWorker.unregister();

export default Routing;
