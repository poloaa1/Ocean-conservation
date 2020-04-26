import React, {  Component, } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./../App.scss";
import API from "../utils/api";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
// } from "react-router-dom";

//import OvrFsh from "./overfishing"
//import axios from "axios";
 

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            email: ""


        };
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            email: this.state.email
            
        }
        console.log(user)
        API.addUser(user)
       
        console.log(user);
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            email: ""
        });
    }
//stores users


    render() {
        return (
            <div className="Register">
                <p className="register__title">Join Our Community Today
                <br></br>
                                                Register below</p>
                {this.state.success === false &&
                    <p className="alert alert-danger" role="alert">
                        something Happened we dont like
                    </p>
                }
                {this.state.success === true &&
                    <p className="alert alert-success" role="alert">
                        User Registered
                    </p>}
                {this.state.success &&
                    <form onSubmit={this.onSubmit}>
                    </form>}

                {!this.state.success &&
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label> First Name</label>
                            <input type="text" className="form-control" placeholder="First name" name="FirstName" required onChange={this.onChangeFirstName} /></div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" name="LastName" required onChange={this.onChangeLastName} /></div>
                            <div form-group>
                                <input className="form-control" type="text" placeholder="Email" name="Email" required onChange={this.onChangeEmail} /></div>
                            <div className="form-group" >
                                <input className="form-control" type="text" placeholder="Password" name="Password" require onChange={this.onChangePassword} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                    
                }
            </div>
        );
    }
}
export default CreateUser;
