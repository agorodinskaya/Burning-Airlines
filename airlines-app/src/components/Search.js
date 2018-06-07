import React, {Component} from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
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
            origin_query: 'SYD',
            destination_query: 'MEL',
            results: [],
            matches: [],
            preparedURL: [],
        }

        this.prepareThisShit = this.prepareThisShit.bind(this);
    }

    prepareThisShit = ( jsonStringAsArray ) => {
        let asciied ="";
        jsonStringAsArray.map( char => asciied+= char.charCodeAt(0) + "%" );
        console.log(asciied);
        this.setState({ preparedURL: this.state.preparedURL.concat(asciied) });
    }

    formatter = ( tmp ) => {
        let stringed, unpreparedURL, preparingURL;
        unpreparedURL = [];
        stringed = tmp.map( fl => unpreparedURL.push(JSON.stringify(fl)))
        console.log( unpreparedURL );
        preparingURL = unpreparedURL.map( jo => {
            this.prepareThisShit( jo.split("") );
        } )
    }

    findMatches = ( a,b,c ) => {
        let tmp;
        tmp = a.slice().filter( flight => flight.origin === b  && flight.destination === c );
        console.log( tmp );
        this.setState({ matches: tmp });
        this.formatter( tmp );
    }

    fetchFlights = () => {
        axios.get(SERVER_URL).then( response => {
            this.setState({ results: response.data }) // removed once findMatches populates state
            console.log( response.data );
            this.findMatches( response.data, this.state.origin_query, this.state.destination_query );
        } );
    }
    
    submitHandler = ( e ) => {
        e.preventDefault();
        console.log( 'Origin: ', this.state.origin_query, 'Destination: ', this.state.destination_query );
        this.fetchFlights();
    }

    originChangeHandler = ( e ) => {
        console.log( this.state.origin_query );
        this.setState({ origin_query: e.target.value });
    }
    destinationChangeHandler = ( e ) => {
        console.log( this.state.destination_query );
        this.setState({ destination_query: e.target.value });
    }

    render(){
        return (
            <div className="App AppSearch">
                <h1>Burning airlines flight search</h1>
                <div>
                    <form onSubmit={ this.submitHandler }>
                        <label>Origin:</label>
                        <select value={this.state.origin_query} onChange={this.originChangeHandler}>
                            <option value="SYD">Sydney</option>
                            <option value="MEL">Melbourne</option>
                            <option value="AKL">Auckland</option>
                            <option value="PER">Perth</option>
                        </select>
                        <br/>
                        <label>Destination:</label>
                        <select value={this.state.destination_query} onChange={this.destinationChangeHandler}>
                            <option value="SYD">Sydney</option>
                            <option value="MEL">Melbourne</option>
                            <option value="AKL">Auckland</option>
                            <option value="PER">Perth</option>
                        </select>
                        <br />
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                <div>test</div>
                total flight count:
                {
                    this.state.results.length
                }
                <br/>
                the type of object inside this.state.preparedURL:
                {
                    typeof this.state.preparedURL === 'string' ? "string" : "not string"
                }
                <br/>
                does number of matches equal number of prepared urls:
                {
                    this.state.matches.length === this.state.preparedURL.length ? 'true' : 'false'
                }
                <br/>
                number of matches:
                {
                    this.state.matches.length
                }
                <br/>
                number of preparedURLS:
                {
                    this.state.preparedURL.length
                }
                <Result searchResults={ this.state.matches } />
            </div>
        )
    }
}

export default Search;