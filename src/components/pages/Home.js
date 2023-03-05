import React, {useEffect} from 'react';
import AboutParticles from '../AboutParticles';
import Bubbles from '../Bubbles';
import Intro from '../Intro';
import AboutMe from '../AboutMe';

import Projects from '../Projects';
import SideNav1 from '../SideNav1';
function Home() {

  useEffect(() => {
    

    window.scrollTo({top:0, behavior:'smooth'});
  }, []);
    return (
      <div className='main-background'>
      <body>
      <SideNav1/>
        <Bubbles/>
        <Intro/>
        <AboutMe />
        <div className = 'about-particles-holder' >
          <div className = 'page-divider' id = 'divider1'></div>
          <AboutParticles />
          <div className = 'page-divider' id = 'divider2'></div>
          </div>
        <Projects/>
      </body>
       <main className='secondary-background'></main>
       </div>
    );
}

export default Home;