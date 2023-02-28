import React from 'react';

import Bubbles from '../Bubbles';
import Intro from '../Intro';
import AboutMe from '../AboutMe';
import Fish from '../Fish';

import Projects from '../Projects';
function Home() {
 
    return (
      <div className='main-background'>
      <body>
        <Bubbles/>
        <Intro/>
        <AboutMe />
        <Fish/>
        
        <Projects/>
      </body>
       <main className='secondary-background'></main>
       </div>
    );
}

export default Home;