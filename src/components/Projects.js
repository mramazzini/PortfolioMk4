import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'antd';

const Projects = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const [inViewport, setInViewport] = useState(false);
  const [sections, setSections] = useState([
      { id: 1},
      { id: 2},
      { id: 3},
      
    ]);
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInViewport(true);
        let i = 0;
  const intervalId = setInterval(() => {
    setSections(prevSections => {
      i++;
      if (i === prevSections.length) {
        clearInterval(intervalId);
      }
      return prevSections.map(section =>
        section.id === i ? { ...section, show: true } : section
      );
    });
  }, 200);
  return () => clearInterval(intervalId);
      }
    });
  });

  observer.observe(document.querySelector(".projects"));

  return () => {
    observer.disconnect();
  };
}, []);

  return (
    <div className = 'projects'>
      
      <div className = {`card-container ${inViewport ? 'in-viewport' : ''}`}>
      <Link target="_blank" to="https://github.com/hhealing123/Workout-Tracker" className= {`card ${sections[0].show ? 'show' : 'hide'}`}  key = {sections[0].id}>
      
        <div className = 'inner-card'>
        Peak Performance
          <div className = 'card-image' id = 'image-1'></div>
          
          <div className = 'projects-card-divider'></div>
          <div className = 'projects-content'>A Workout MERN stack application utilizing GraphQL, JWT, MongoDB, and React. </div>
        </div>
      </Link>
      <Link target="_blank" to="https://github.com/hhealing123/ListenToMe" className= {`card ${sections[1].show ? 'show' : 'hide'}`} key = {sections[1].id}>
      <div className = 'inner-card'>
      Listen To Me
      <div className = 'card-image' id = 'image-2'></div>
      
          <div className = 'projects-card-divider'></div>
          <div className = 'projects-content'>A Musical Blog making use of SQL, Sequelize, Handlebars, and ExpressJS.  </div>
      </div>

      </Link>
      <Link target="_blank" to="https://github.com/mramazzini/WalkerGame" className= {`card ${sections[2].show ? 'show' : 'hide'}`} key = {sections[2].id}>
      <div className = 'inner-card'>
      Frederick the Penguin
      <div className = 'card-image' id = 'image-3'></div>
      
          <div className = 'projects-card-divider'></div>
          <div className = 'projects-content'>2D platformer featuring a pixelated penguin. Built with Java. </div>
      
      </div>

      </Link>
    </div>
    </div>
  

  );
};

export default Projects;
