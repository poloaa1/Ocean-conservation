import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Dropdown, Dropdownitem, DropdownMenu}  from 'react-dropdown';

// this index.js runs the Nav bar on the app
function Nav() {
  return (

      <nav id="nav" role="navigation">
        <a href="#nav" title="Show navigation">Show navigation</a>
        <a href="#" title="Hide navigation">Hide navigation</a>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/" aria-haspopup="true"><span>Pages</span></a>
            <ul>
            <li><Link to="/overfishing">Over Fishing</Link></li>
            <li><Link to="/pollution">Pollution</Link></li>
            <li><Link to="/redtide">Red Tide</Link></li>
            <li><Link to="/messageboard">Message Board</Link></li>
            <li><Link to ="/interactivegame">Interactive Game</Link></li>
            
            </ul>
            </li>

          <li>
            <Link to="/flashCard">Quiz</Link>
          </li>
          <li><Link to="/login">Log In</Link></li>
        </ul>

      </nav>
   
  );

}


export default Nav;