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
    }
  }

  componentDidMount(){
    // console.log('test params:', this.props.match.params.id );
    let unprocessedURL = this.props.match.params.id;
    let processingURL, processedURL, jsonIncomingString;
    processingURL = (unprocessedURL)=>{
      return unprocessedURL.split(".")
    }
    processedURL = processingURL(unprocessedURL);
    jsonIncomingString = "";
    for (let i=0; i<processedURL.length; i++){
      processedURL[i] = parseInt(processedURL[i]);
      processedURL[i] = String.fromCharCode(processedURL[i]);
      jsonIncomingString += processedURL[i];
      
    }
    console.log(jsonIncomingString);
    
    
  //   const generatePlan=()=>{
  //   let col = [0,1,2,3,4,5,6,7];
  //   let row = [];

  //   for(let i = 0; i < col.length; i++){
  //     this.state.sittingPlan.slice().push[i]=[];
  //     for(let j = 0; j< row.length; j++){
  //      this.state.sittingPlan[i][j] = "empty seat"
  //     }
        
  //   }
  // }
  // generatePlan();
  
}
  //1 process incoming JSON -> ok
  //2 find flight planes row and column inside JSON to make a sitting plan
  //3 nested loops create empty null elements to rep empty seats
  //4 check the JSON for occupied seats 
  render() {
    return (
      <Column/>
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
