//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import 'bootstrap';

import 'icons.js';

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(props){
    return (<div> className="bigCounter">
        <div className="calender">
            <i class="fa-regular fa-clock"></i>
        </div>
        <div className="four">0</div>
        <div className="three">0</div>
        <div className="two">0</div>
        <div className="one">0</div>
   <div>);
}
SimpleCounter.propTypes = {
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
};

let counter = 0;
setInterval(function)(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    console.log(four, three, two, one);
    //render your react application
    counter++;
},1000);


//render your react application
ReactDOM.render(
   <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
   document.querySelector("#app")
  );
},