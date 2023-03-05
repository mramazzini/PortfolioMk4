import React from 'react';

import Bubbles from '../Bubbles';
import Intro from '../Intro';
import AboutMe from '../AboutMe';


import Projects from '../Projects';
import SideNav1 from '../SideNav1';
function Home() {
 
    return (
      <div className='main-background'>
      <body>
      <SideNav1/>
        <Bubbles/>
        <Intro/>
        <AboutMe />
        
        <Projects/>
      </body>
       <main className='secondary-background'></main>
       </div>
    );
}

export default Home;