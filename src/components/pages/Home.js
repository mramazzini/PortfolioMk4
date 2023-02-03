import React from 'react';

import Bubbles from '../Bubbles';
import Intro from '../Intro';

function Home() {
 
    return (
      <div className='main-background'>
      <body>
        <Bubbles/>
        <Intro/>
      </body>
       <main className='secondary-background'></main>
       </div>
    );
}

export default Home;