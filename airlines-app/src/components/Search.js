import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';


const SERVER_URL = 'http://localhost:3000/react/search.json';


class Result extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h2>Matching flights</h2>
                <div>
                    {
                        this.props.searchResults.map( e => 
                        <li key={e.id}>
                        {` ${e.flight_name} seats remaining: ${(e.airplane.row * e.airplane.column) - e.reservations.length} `} <Link to ="/reservation"> Check flight </Link>
                        </li>
                     )
                    }
                </div>
            </div>
        )
    }
}


class Search extends Component {
    constructor(){
        super();

        this.state = {
            origin_query: '',
            destination_query: '',
            results: [],
        }
    }


    fetchFlights = () => {
        axios.get(SERVER_URL).then( response => {
            this.setState({ results: response.data })
            console.log( response.data );
        } );
    }
    
    originChangeHandler = ( e ) => {
        console.log( this.state.origin_query );
        this.setState({ origin_query: e.target.value });
    }
    destinationChangeHandler = ( e ) => {
        console.log( this.state.destination_query );
        this.setState({ destination_query: e.target.value });
    }
    submitHandler = ( e ) => {
        e.preventDefault();
        console.log( 'Origin: ', this.state.origin_query, 'Destination: ', this.state.destination_query );
        this.fetchFlights();
    }

    render(){
        return (
            <div className="App AppSearch">
                <h1>Burning airlines flight search</h1>
                <div>
                    <form onSubmit={ this.submitHandler }>
                        <span>Origin</span>: <textarea onChange={this.originChangeHandler}>
                        </textarea>
                        <br />
                        <span>Destination</span>: <textarea onChange={this.destinationChangeHandler}>
                        </textarea>
                        <br />
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                {
                    this.state.results.length
                }
                <Result searchResults={ this.state.results } />
            </div>
        )
    }
}

export default Search;