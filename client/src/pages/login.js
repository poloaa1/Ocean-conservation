import React, {Component } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import Carousel, { Dots } from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';
import "./../App.scss";
import API from "../utils/api";
import {
   BrowserRouter as Router,
  Link,} from "react-router-dom";
//import OvrFsh from "./overfishing"
//import axios from "axios";

// let Router = Router;

// this section below is our put request to confirm login

class Login extends Component {
  constructor(props) {
    super(props);

    this.state ={
      email:"",
      password:""
    };
    
  }
  onChange=(e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit=(e) => {
    e.preventDefault()
    console.log(this.state);
    API.loginUser(this.state)
    .then(res => {
      console.log(res.data)
      //check if login was successful, if user info comes back
      //if successful rout to to logedin state!!
      //pass hello user 
      //else trow err
    })
  }
  render() {
    return(
      
      <div className="Register">
                <p className="register__title">Log In</p>
           
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                <input className="form-control" type="text" placeholder="Email" name="email" required onChange={this.onChange} /></div>
                            <div className="form-group" >
                                <input className="form-control" type="text" placeholder="Password" name="password" require onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary loginbtn">Submit</button>
                            <br/>
                      <Link to="/register">Register Here</Link>
                    </form>
                    
                
            </div>
            
    );
  }
}

export default Login;