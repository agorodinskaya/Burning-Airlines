import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';


const SERVER_URL_RESERVATIONS = 'http://localhost:3000/react/reservation.json';



class Flight extends Component{
  constructor(props){
    super(props);
    this.state={
      sittingPlan:[],
      flightjson:{}
    }
  }

  componentDidMount = () => {
    // console.log('test params:', this.props.match.params.id );
    let unprocessedURL = this.props.match.params.id;
    let processingURL, processedURL, jsonIncomingString;
    processingURL = (unprocessedURL)=>{
      return unprocessedURL.split(".")
    }
    processedURL = processingURL(unprocessedURL);
    processedURL.pop();
    jsonIncomingString = "";
    for (let i=0; i<processedURL.length; i++){
      processedURL[i] = parseInt(processedURL[i]);
      processedURL[i] = String.fromCharCode(processedURL[i]);
      jsonIncomingString += processedURL[i];
      
    }

    // console.log('string:',jsonIncomingString);
    // console.log(jsonIncomingString.split("")[445])
    let remadeJson = JSON.parse(jsonIncomingString);
    console.log(remadeJson);
    this.setState({
      flightjson: remadeJson
    });
    console.log( this.state.flightjson );
     
}
  containerFunction =() => {
    let columnLetters = [];
    let testObject = this.state.flightjson.airplane;
    console.log(testObject);
    // let columnNumber = this.state.flightjson.airplane.column;

    // for (let i = 0; i < columnNumber; i++) {
    //   columnLetters.push(String.fromCharCode(i + 65));
    // }
    
  }
  //1 process incoming JSON -> ok
  //2 find flight planes row and column inside JSON to make a sitting plan
  //3 nested loops create empty null elements to rep empty seats
  //4 check the JSON for occupied seats 
  render() {
    this.containerFunction();
    return (
      <div>

      </div>
    );
  }
    
  }



class Column extends Component{
  render(){
    return(
      <Row/>
    )
  }
}


class Row extends Component{
  constructor(props) {
    super(props)

    }
    
  
    saveReservation(reservation){
      console.log('Reservation::SaveReservation', reservation)
      axios.post(SERVER_URL_RESERVATIONS, { content: reservation })
        .then(response => {
          console.log('response:', response, response.data);
          this.setState({ reservations: [response.data.reservation, ...this.state.reservations] });
        });
    }
  
  render(){
    return(
      <div className="App">
        <h1>Please choose your seat</h1>
      </div>
    )
  }
}

export default Flight;
