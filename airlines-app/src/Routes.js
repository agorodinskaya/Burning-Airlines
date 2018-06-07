import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'; // can replace Browserrouter with Hashrouter. TODO - read
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
            <Route exact path="/reservation/:id" render={(props)=>{<Reservation id={props.match.params.id}/>}}/>


            {/* <Route component={Error404}/> */}


        </div>
    </Router>
);

export default Routes;
