import React, { useState, useEffect } from 'react';


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
          
        </div>

        <div
          key={cards[1].id}
          className={`card ${cards[1].show ? 'show' : 'hide'} `}
        ></div>

        <div
          key={cards[2].id}
          className={`card ${cards[2].show ? 'show' : 'hide'} `}
        >

        </div>

       

    </div>
    </div>
  );
};

export default Projects;
