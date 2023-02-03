import React from 'react';

import Bubbles from '../Bubbles';
import Intro from '../Intro';
import AboutMe from '../AboutMe';
function Home() {
 
    return (
      <div className='main-background'>
      <body>
        <Bubbles/>
        <Intro/>
        <AboutMe/>
        
      </body>
       <main className='secondary-background'></main>
       </div>
    );
}

export default Home;