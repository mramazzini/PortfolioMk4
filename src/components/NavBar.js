import React, { useState, useEffect } from "react";

import  {MailOutlined, GithubOutlined, PhoneOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [inViewport, setInViewport] = useState(false);
    const [sections, setSections] = useState([
        { id: 1},
        { id: 2 },
        { id: 3 },
        { id: 4},
        { id: 5},
        { id: 6},
        { id: 7},
        
      ]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          let i = 0;
    const intervalId = setInterval(() => {
      setSections(prevSections => {
        i++;
        if (i === prevSections.length) {
          clearInterval(intervalId);
        }
        return prevSections.map(section =>
          section.id === i ? { ...section, show: true } : section
        );
      });
    }, 200);
    return () => clearInterval(intervalId);
        }
      });
    });

    observer.observe(document.querySelector(".nav-bar-top"));

    return () => {
      observer.disconnect();
    };
  }, []);


  const scrollTo  = async (num) => {
    let str = "#divider" + num;
    let el = await document.querySelector(str);
    var rect = el.getBoundingClientRect(), scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({top:rect.top+scrollTop, behavior:'smooth'});
  }

    return(
        <div className = 'nav-bar-top'>
            <div onClick = {() => scrollTo('0')} className= {`clickable nav-section ${sections[0].show ? 'show' : 'hide'}`} key = {sections[0].id}>
            1 - Intro
                </div>
                <div className = {`top-nav-divider ${sections[1].show ? 'show' : 'hide'}`}></div>
                <div   onClick = {() => scrollTo('1')} className= {`clickable nav-section ${sections[2].show ? 'show' : 'hide'}`} key = {sections[1].id}>
            2 - About
                </div>
                <div className = {`top-nav-divider ${sections[3].show ? 'show' : 'hide'}`}></div>
                <div  onClick = {() => scrollTo('2')} className= {`clickable nav-section ${sections[4].show ? 'show' : 'hide'}`} key = {sections[2].id}>
                    3 - Projects
                </div>
                <div className = {`top-nav-divider ${sections[5].show ? 'show' : 'hide'}`}></div>
                <div  onClick = {() => scrollTo('3')} className= {`clickable nav-section ${sections[6].show ? 'show' : 'hide'}`} key = {sections[3].id}>
                    4 - Contact
                </div>
             
                

        </div>
    );
}
export default Navbar;