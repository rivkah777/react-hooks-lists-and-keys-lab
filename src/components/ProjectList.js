import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const info = projects.map(({name,about, id , technologies}) =>
   <ProjectItem key={id} name={name} about={about} technologies={technologies}/>)
   
  
  return (
    
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{info}</div>
      
     </div>    
     
     
    
  );
}

export default ProjectList;
