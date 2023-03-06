import React, { useState, useEffect } from 'react';

import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Projects = () => {
    const [inViewport, setInViewport] = useState(false);
    const [cards, setCards] = useState([
        { id: 1},
        { id: 2 },
        { id: 3 },
      
      ]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          let i = 0;
    const intervalId = setInterval(() => {
      setCards(prevCards => {
        i++;
        if (i === prevCards.length) {
          clearInterval(intervalId);
        }
        return prevCards.map(card =>
          card.id === i ? { ...card, show: true } : card
        );
      });
    }, 200);
    return () => clearInterval(intervalId);
        }
      });
    });

    observer.observe(document.querySelector(".card-container"));

    return () => {
      observer.disconnect();
    };
  }, []);
 

  

  return (
    <div className = 'projects'>
      
      
    <div className={`card-container ${inViewport ? 'in-viewport' : ''}`}>
      
       <div
          key={cards[0].id}
          className={`card ${cards[0].show ? 'show' : 'hide'} `}
        >
          <div className = 'inner-card'>
          <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
          </div>
        </div>

        <div
          key={cards[1].id}
          className={`card ${cards[1].show ? 'show' : 'hide'} `}
        >
          <div className = 'inner-card'></div>
        </div>

        <div
          key={cards[2].id}
          className={`card ${cards[2].show ? 'show' : 'hide'} `}
        >
          <div className = 'inner-card'></div>
        </div>

       

    </div>
    </div>
  );
};

export default Projects;
