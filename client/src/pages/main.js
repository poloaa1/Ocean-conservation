import React from "react";
//import Redtide from "./redtide";
//import Carousel, { Dots } from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';
//import Axios from "axios";
import "./../App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Carousel from "react-bootstrap/Carousel";
import Beach from "../images/oceantrash3.jpg";
import Trash from "../images/beachcleanup (1).jpg";
import Nets from "../images/fishingnets3.jpg";
import Coral from "../images/destroyed coral (1).jpg";
import Shark from "../images/whaleshark in net (1).jpg";
import Hawaii from "../images/beachcleanuphawaii1.jpg";
import RedBeach from "../images/redbloom2.jpg";

import {
  BrowserRouter as Router,
  Link,

  //BrowserHistory
} from "react-router-dom";


// const [data, setData ] = useState({})
// function getData() {
//this represents the route that cesar is making
//   Axios.get("/main").then(obj => {
//     setData(obj)
//   })
// };
// useEffect(() => {
//   getData()
// } )

function Main() {
  return (
    <div>
      <div>
       <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/xLx4fVsYdTI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      </div>
      <br />
      <div className="splash">
        <h3 className="splash__title">Overfishing:</h3>
        <p className="splash__body">
          For many years we have taken advantage of the abundance that has been
          afforded to us from our ocean’s lakes and rivers that lately we have
          been seeing the effects of what overfishing is having on our
          ecosystems and biodiversity. Without Proper fish management we can
          only make the problem worse.
          <Link to="/overfishing"> Would you like to know more?</Link>
        </p>

        <br />
        <h3 className="splash__title">Ocean Pollution:</h3>
        <p className="splash__body">
          For many years we as humans have intentionally and unintentionally
          polluted our oceans with plastic and non-biodegradable items. This has
          caused severe damage and harm to our largest ecosystem on the planet
          including destroying habitats, ocean wildlife migration patterns. As
          well as the death vital ecosystems.{" "}
          <Link to={"/pollution"}> Would you like to know more?</Link>
        </p>
        <br />
        <h3 className="splash__title">Red Algae/Red Tide:</h3>
        <p className="splash__body">
          While there are many health benefits to using red algae. And most
          algae blooms can be beneficial to ocean life as they provide food for
          ocean wildlife. There is a Small Portion of these algae blooms (also
          known as the red tide) that can produce toxins that can kill all plant
          and fish life within its vicinity.
          <Link to={"/redtide"}> Would you like to know more?</Link>
        </p>
      </div>

      <div>
        <Carousel id="images" fade="true" touch="true">
          <Carousel.Item>
            <img className="d-block w-100" src={Beach} alt="First slide" />
            <Carousel.Caption id="surfer">
              <h3>Surfer</h3>
              <p>A Surfer walks through piles of trash to get to the ocean</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Trash} alt="Second slide" />

            <Carousel.Caption id="California">
              <h3>Beach cleanup in California</h3>
              <p>
                Members of the public cleaning up a beach near Los Angeles, CA.
                "source: LA Times"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Nets} alt="Third slide" />

            <Carousel.Caption id="nets">
              <h3>Fishing Nets</h3>
              <p>Discarded Nets Recovered from the ocean and beach.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Coral} alt="Fourth slide" />
            <Carousel.Caption id="coral">
              <h3>Destroyed Coral Reef</h3>
              <p>
                Destroyed Coral Reef Bed in the pacific ocean caused by
                overfishing.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Shark} alt="Fifth slide" />
            <Carousel.Caption id="shark">
              <h3>Whale Shark Caught in Net</h3>
              <p>Every year 400-700 sharks are caught in nets</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Hawaii} alt="First slide" />
            <Carousel.Caption id="hawaii">
              <h3>Clean Up In Hawaii</h3>
              <p>Members of the public doing a cleanup on the Big Island.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={RedBeach} alt="First slide" />
            <Carousel.Caption id="redTide">
              <h3>Red Ocean</h3>
              <p>Red Algae along the beach and shore </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="intro">
        <h1 className="intro__title">About Us:</h1>
        <p className="intro__body">
          It is our vision to bring Awareness to the ongoing problems that are
          affecting our oceans. From The overfishing of our ocean’s lake and
          rivers. To the excessive amounts of trash that is being dumped into
          our oceans and how it is affecting ocean ecology and wildlife to toxic
          algae blooms.
          <br />
          <br />
          Through sharing of information and discussion we hope to bring more
          awareness to these issues and help find common sense resolutions to
          these issues. Join us on this journey of conservation and awareness
        </p>
      </div>
    </div>
  );
}

export default Main;
