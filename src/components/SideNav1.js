import React, { useState, useEffect } from "react";

import  {MailOutlined, GithubOutlined,  LinkedinOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const SideNav1 = () => {
    const [inViewport, setInViewport] = useState(false);
    
    const [icons, setIcons] = useState([
        { id: 1},
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        
      ]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          let i = 0;
    const intervalId = setInterval(() => {
      setIcons(prevIcons => {
        i++;
        if (i === prevIcons.length) {
          clearInterval(intervalId);
        }
        return prevIcons.map(icon =>
          icon.id === i ? { ...icon, show: true } : icon
        );
      });
    }, 100);
    return () => clearInterval(intervalId);
        }
      });
    });

    observer.observe(document.querySelector(".side-nav"));

    return () => {
      observer.disconnect();
    };
  }, []);
 
  

    return (
    <div className = {`side-nav ${inViewport ? 'in-viewport' : ''}`}>

        <div  key={icons[0].id} className = {`side-nav-divider ${icons[0].show ? 'show' : 'hide'}`} ></div>
        <Link key={icons[1].id} className = {`side-nav-icon   ${icons[1].show ? 'show' : 'hide'}`} to="#" target="_blank" onClick={(e) => {
                window.location.href = "mailto:mramazzini123@gmail.com";
                e.preventDefault();
            }}><MailOutlined/></Link>
        <div  key={icons[2].id}className = {`side-nav-divider ${icons[2].show ? 'show' : 'hide'}`}></div>
        <Link key={icons[3].id} className = {`side-nav-icon   ${icons[3].show ? 'show' : 'hide'}`} target="_blank" to="https://github.com/mramazzini" ><GithubOutlined /></Link>
        <div  key={icons[4].id}className = {`side-nav-divider ${icons[4].show ? 'show' : 'hide'}`}></div>
        
        <Link key={icons[5].id} className = {`side-nav-icon   ${icons[5].show ? 'show' : 'hide'}`} target="_blank" to="https://www.linkedin.com/in/matteo-ramazzini/" ><LinkedinOutlined /></Link>
        
        
    </div>
    );
};

export default SideNav1;
