import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';


const SERVER_URL_RESERVATIONS = 'http://localhost:3000/react/reservation.json';

class Reservations extends Component{
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

export default Reservations;
