import React, { useState } from "react";
import Nav from "./Components/Nav/index"
import "./App.scss";
import Main from "./pages/main"
import Foot from "./Components/Footer/Foot"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Redtide from "./pages/redtide";
import Overfsh from "./pages/overfishing";
import Login from "./pages/login";
import Polution from "./pages/pollution";
import CreateUser from "./pages/register";
import axios from "axios";
// import Flashcard from "./pages/flashCard";
import flashCardList from "./pages/flashCardList";
import Event from "./pages/forum";
import Game from "./pages/game";







function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  

  function loginUser(email, password) {
    console.log("Logged in");
    axios.post("http://localhost:3001/users/", {
      email: email,
      password: password
    })
      .then(function (myUser) {

        console.log(myUser)
        // If there's an error, log the error
      });

    
  }
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1> C.C.M.R.J Oceanic Conservation Group
          <br></br>
                  We all can make a difference! 
          </h1>

          <Nav />

          <Route exact path="/" component={Main} />
          <Route exact path="/overfishing" component={Overfsh} />
          <Route exact path="/login" render={(props) => <Login {...props} setPassword={setPassword} password={password} email={email} validateForm={validateForm} loginUser={loginUser} setEmail={setEmail} />} />
          <Route exact path="/pollution" component={Polution} />
          <Route exact path="/redtide" component={Redtide} />
          <Route exact path="/register" component={CreateUser} />
          <Route exact path="/flashCard" component={flashCardList} />
          <Route exact path="/messageboard" render={(props) => <Event {...props} setEvent={setEvent} setMessage={setMessage} />} component={Event}  />
          <Route exact path="/interactivegame" component={Game} />
          <Foot />
        </div>

      </div>

    </Router>
  );
}










export default App;
