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
    <div ref={aboutRef} className={`box ${inViewport ? "in-viewport" : ""}`}>
      <div className='portrait' id = 'About'></div>
      <div className='portrait-color-cover'></div>
      <div className = 'portrait-back'></div>
      <div className='About-content'>
        <header className={'section-head-mini'}>Hello my name is</header>
        <header className={'section-head'}>
          Matteo Ramazzini
        </header>
        <div className='divider'></div>
        <section className='about-main'>My interest in software development began in high school
          when I would make little games in Java. Snake, Space invaders, and Pong.
          <br /><br />
          Fast forward to today - I still am making those silly games, alongside my pursual of my Computer Science degree.
          <br /><br />
          I am dedicated to providing the best user experience in whatever project I <p className = 'pun'>dive</p> into.
        </section>
      </div>
    </div>
  );
}

export default AboutMe;


