import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; // can replace Browserrouter with Hashrouter. TODO - read
import Search from './components/Search';
import Reservation from './components/Reservation';

const Error404 = props => {
    return <div> No match </div>
}

const Routes = (
    <Router>
        <div>

            <Route exact path="/search"    component= {Search}/>
            <Route exact path="/reservation" component= {Reservation}/>
          

            {/* <Route component={Error404}/> */}


        </div>
    </Router>
);

export default Routes;
