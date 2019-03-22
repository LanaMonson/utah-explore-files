import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import ActivityPage from './components/ActivityPage/ActivityPage';
import RelaxPage from './components/RelaxPage/RelaxPage';
import EatPage from './components/EatPage/EatPage';
//import * as serviceWorker from './serviceWorker';


class Routing extends Component {
    render(){
        return(    
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/activity" component={ActivityPage}/>
                    <Route path="/relax" component={RelaxPage}/>
                    <Route path="/eat" component={EatPage}/>
                </div>
            </Router>
        );
    }
}

//serviceWorker.unregister();

export default Routing;
