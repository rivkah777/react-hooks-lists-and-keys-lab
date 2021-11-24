import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const techno = technologies.map((technologie) => {
    return<span key={technologie}>{technologie}</span>
   
    
  })
 
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {techno}
      </div>
    </div>
  );
}

  export default ProjectItem;
