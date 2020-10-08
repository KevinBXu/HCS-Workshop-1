import React from "react";
import "./About.css";
import CutePic from "../../assets/Me.jpg";

function FunFact(props) {
  return(
    <div
      onClick ={() => {
        props.setActiveFunFact(props.fact);
      }}
      className="funfact-item"
    >
    <p>Click for Fun Fact</p>
      
    </div>
  );
}

export default function AboutScreen() {
  const [activeFunFact, setActiveFunFact] = React.useState("Click on Buttons for Fun Facts");

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" alt="This is Me"/>
        </div>
        <div className="intro-item">
          I was born in Buffalo, NY on October 25, 2001 but moved shortly thereafter to Erie, PA after spending a year in China. I went to high school at Northwest Pennsylvania Collegiate Academy and now am a freshman at Harvard College. 
        </div>
        <div className="intro-item">
          <FunFact
            fact = "I was named after the movie home alone"
            setActiveFunFact={setActiveFunFact}
          ></FunFact>
          <FunFact
            fact = "I broke a TV fighting over candy when I was 8 and mother is charing me interest"
            setActiveFunFact={setActiveFunFact}
          ></FunFact>
          <FunFact
            fact = "I can recite 50 digits of pi"
            setActiveFunFact={setActiveFunFact}
          ></FunFact>
        </div>
      </div>
      <br></br>
          <h2>{activeFunFact}</h2>
    </div>
  );
}
