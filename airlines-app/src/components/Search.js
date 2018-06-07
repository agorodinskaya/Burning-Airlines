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

    // <Result searchResults={this.state.matches} encodedJSON={this.state.preparedURL} />
    // { (ev) => this.linkToRes(ev, this.props.searchResults.indexOf(item)) }
    

    render(){
        return(
            <div>
                <div>
                    {/* ADD STUFF HERE REFERENCE TO CLICK HANDLER TO UPDATE STATE */}
                    {/* SHOULD DISPLAY FLIGHT NAME, SEATS REMAINING */}
                    {/* BUTTON TO BOOKING PAGE WITH JSON URLz */}
                    <div>
                        {`Flight name: ${this.props.flightInfo.flight_name}`}
                    </div>
                    <div>
                        {`Date: ${this.props.flightInfo.date}`}
                    </div>
                    <div>
                        {`Available seats: ${this.props.flightInfo.airplane.row * this.props.flightInfo.airplane.column - this.props.flightInfo.reservations.length}`}
                    </div>
                    <button onClick={ (e)=> this.props.onClick(e) }>
                        Book this flight!
                    </button>
                    <hr/>
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
            destination_query: 'PER',
            results: [], // flight object
            matches: [], // flight object
            preparedURL: [], // ascii
            currentIndex: 0,
        }

        // this.prepareThisShit = this.prepareThisShit.bind(this);
    }

    componentDidMount(){
        // console.log('inside mount');
        // console.log(this.state)
    }

    linkToRes = (ev, resIndex) => {
        console.log( 'child clicked' );
        console.log('reservation index:', resIndex);
        ev.preventDefault();
        let resultsWeWant;
        // console.log( 'need to slice this array', this.props.encodedJSON.length );
        // console.log( 'length of searchResults array', this.props.searchResults.length );
        resultsWeWant = this.state.preparedURL.slice(this.state.preparedURL.length - this.state.matches.length);
        // console.log('sliced array', resultsWeWant);
        console.log('url to send to res page:', resultsWeWant[resIndex]);
        this.props.history.push(`/reservation/${resultsWeWant[resIndex]}`)
    }


    prepareThisShit = ( jsonStringAsArray ) => {
        let asciied ="";
        jsonStringAsArray.map( char => asciied+= char.charCodeAt(0) + "." );
        // console.log(asciied); //=> returns ascii version of json flight string
        this.setState({ preparedURL: this.state.preparedURL.concat(asciied) });
    }

    formatter = ( tmp ) => {
        let stringed, unpreparedURL, preparingURL;
        unpreparedURL = [];
        stringed = tmp.map( fl => unpreparedURL.push(JSON.stringify(fl)))
        // console.log( unpreparedURL ); //=> returns json flight as string
        preparingURL = unpreparedURL.map( jo => {
            this.prepareThisShit( jo.split("") );
        } )
    }

    findMatches = ( a,b,c ) => {
        let tmp;
        tmp = a.slice().filter( flight => flight.origin === b  && flight.destination === c );
        console.log( tmp ); //=> returns array of each matching flight object
        this.setState({ matches: tmp });
        this.formatter( tmp );
    }

    fetchFlights = () => {
        axios.get(SERVER_URL).then( response => {
            this.setState({ results: response.data }) // removed once findMatches populates state
            // console.log( response.data ); //=> returns array of each flight object
            this.findMatches( response.data, this.state.origin_query, this.state.destination_query );
        } );
    }
    
    submitHandler = ( e ) => {
        e.preventDefault();
        // console.log( 'Origin: ', this.state.origin_query, 'Destination: ', this.state.destination_query ); //=> returns origin/destination
        this.fetchFlights();
    }

    originChangeHandler = ( e ) => {
        // console.log( this.state.origin_query );
        this.setState({ origin_query: e.target.value });
    }
    destinationChangeHandler = ( e ) => {
        // console.log( this.state.destination_query );
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
                <h2>{ this.state.matches.length ? "Matching flights" : "Waiting to search" }</h2>
                <br/>
                {
                    this.state.matches.map(eachMatch => <Result key={this.state.matches.indexOf(eachMatch)} flightInfo={this.state.matches[this.state.matches.indexOf(eachMatch)]} onClick={(a) => this.linkToRes(a, this.state.matches.indexOf(eachMatch)) } /> )
                }
            </div>
        )
    }
}

export default Search;