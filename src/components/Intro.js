import React, { useRef , useState, useEffect} from 'react';
import  {DownOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

function Intro() {
  
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
        }
      });
    });

    observer.observe(document.querySelector(".intro"));

    return () => {
      observer.disconnect();
    };
  }, []);
  const scrollToAbout = () => {
    let el = document.querySelector('#divider1');
    var rect = el.getBoundingClientRect(), scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({top:rect.top+scrollTop, behavior:'smooth'});
  }

   
  return (
    <div  className={`intro ${inViewport ? "show" : "hide"}`} id = 'anchor' > 
      <p className='intro-text'><p className='madness'>Hi!</p> I am a web developer. </p>
      <div onClick = {scrollToAbout} className='clickable bobbing-arrow'><DownOutlined style = {{fontSize:'300%'}}/></div>
    </div>
  );
}

export default Intro;