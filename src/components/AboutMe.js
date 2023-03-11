import React, { useState, useEffect, useRef  } from 'react';




function AboutMe() {
  const [inViewport, setInViewport] = useState(false);
  const aboutRef = useRef(null);
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
    <div ref={aboutRef}  id = "About" className={`box ${inViewport ? "in-viewport" : ""}`}>
      
      <div className = 'portrait-holder'>
        <div className='portrait' ></div>
      <div className='portrait-color-cover'></div>
      <div className = 'portrait-back'></div></div>
      
      <div className='About-content'>
        <header className={'section-head-mini'}>My name is</header>
        <header className={'section-head'}>
          Matteo Ramazzini
        </header>
        <div className='divider'></div>
        <section className='about-main'>
          Full Stack Developer based in Houston Texas, US, dedicated to creating aesthetic, intuitive, and highly functional user interfaces.
         
        </section>
        <section className='about-main-bottom'>
          Check out some stuff I made below!
         
        </section>
      </div>
    </div>
  );
}

export default AboutMe;


