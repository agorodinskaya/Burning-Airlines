import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const SERVER_URL = 'http://localhost:3000/react/reservation.json';

class Reservations extends Component{
  constructor() {
    super()
    this.state = {
      reservations: []
    }
    // this.saveSecret = this.saveSecret.bind(this)
  }

  componentWillMount() {
    //Can make initial AJAX request here, but this happens before the first render()

  }
  componentDidMount() {
    //this will run AFTER the component mounts and has done a render() once
    const fetchReservations = () => {
      axios.get(SERVER_URL).then(response => {
        console.log(response, response.data);
        this.setState({ reservations: response.data.reverse() });
      });
    };
    fetchReservations();
    setInterval(fetchReservations, 1000);
  }
    saveReservation(reservation){
      console.log('Reservation::SaveReservation', reservation)
      axios.post(SERVER_URL, { content: reservation })
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
