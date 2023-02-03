import React, { useState, useEffect } from 'react';


  

function AboutMe() {
    const [inViewport, setInViewport] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewport(true);
          }
        });
      });
  
      observer.observe(document.querySelector(".box"));
  
      return () => {
        observer.disconnect();
      };
    }, []);

    return (
        <div className={`box ${inViewport ? "in-viewport" : ""}`}>
        <header className={'section-head'}>
            My name is Matteo Ramazzini
        </header>
        <div className='divider'></div>
        <section className='about-content'>iwabdauwb</section>
        </div>
    );
}

export default AboutMe;


