import React, { useRef } from 'react';
import  {DownOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

function Intro() {
  const aboutRef = useRef(null);

  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <p className='intro-text'>I am a Web Developer. Delve into the <p className='madness'>Depths</p> of my mind.</p>
      <Link onClick={handleClick} to="#About" className='bobbing-arrow'><DownOutlined style = {{fontSize:'300%'}}/></Link>
    </div>
  );
}

export default Intro;