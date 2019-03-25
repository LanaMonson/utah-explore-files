import EatPage from '../EatPage/EatPage';
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
                </div>
            </Router>
        );
    }
}

//serviceWorker.unregister();

export default Routing;
