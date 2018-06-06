import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';


const SERVER_URL = 'http://localhost:3000/react/search.json';

class Search extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h1>HELLO</h1>
            </div>
        )
    }
}

export default Search;