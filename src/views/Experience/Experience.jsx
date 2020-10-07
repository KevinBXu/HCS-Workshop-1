import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div 
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
      className="timeline-item"
    >
      <h1>{props.title}</h1>
      
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Samsung Global Solve for Tomorrow"
            description = "Team collaboration with students in Tunisia to further UN development goals and presented solutions at UNHQ"
            setActiveDescription = {setActiveDescription}
            setActiveTitle = {setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
            title="Research"
            description = "Aimed at developing an AI to play cheat during a summer camp at CMU."
            setActiveDescription = {setActiveDescription}
            setActiveTitle = {setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
