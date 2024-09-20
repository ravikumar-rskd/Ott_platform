// src/components/Projects.js
import React from 'react';

function ProjectsMe() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <div className='h3-p'>
          <h3>Project 1</h3>
          <p>Created a movie website using TMDB api path and api key and displayed movie grid.Inserted an AppBar,a Sidebar to the web page. </p>
        </div>
        <div className='h3-p2' >
          <h3 >Project 2</h3>
          <p>Project 2 is about creating a portfolio of mine.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default ProjectsMe;
