import React, { useState, useEffect } from "react";

import  {MailOutlined, GithubOutlined, PhoneOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const SideNav1 = () => {
    const [inViewport, setInViewport] = useState(false);
    const [showPhone, setShowPhone] = useState(false)
    const [icons, setIcons] = useState([
        { id: 1},
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
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
    }, 200);
    return () => clearInterval(intervalId);
        }
      });
    });

    observer.observe(document.querySelector(".side-nav"));

    return () => {
      observer.disconnect();
    };
  }, []);
 
  const handlePhoneClick = () => {
    setShowPhone(!showPhone);
  }

    return (
    <div className = {`side-nav ${inViewport ? 'in-viewport' : ''}`}>
        <div className = {`phone-number ${showPhone ? 'show' : 'hide'}`}>Call Me! +1(281)-620-2896</div>
        
        <Link key={icons[0].id} className = {`side-nav-icon   ${icons[0].show ? 'show' : 'hide'} phone`} to="#About" onClick ={handlePhoneClick}><PhoneOutlined/></Link>
        <div  key={icons[1].id}className = {`side-nav-divider ${icons[1].show ? 'show' : 'hide'}`}></div>
        <Link key={icons[2].id} className = {`side-nav-icon   ${icons[2].show ? 'show' : 'hide'}`} to="#" onClick={(e) => {
                window.location.href = "mailto:mramazzini123@gmail.com";
                e.preventDefault();
            }}><MailOutlined/></Link>
        <div  key={icons[3].id}className = {`side-nav-divider ${icons[3].show ? 'show' : 'hide'}`}></div>
        <Link key={icons[4].id} className = {`side-nav-icon   ${icons[4].show ? 'show' : 'hide'}`} to="https://github.com/mramazzini" ><GithubOutlined /></Link>
        <div  key={icons[5].id}className = {`side-nav-divider ${icons[5].show ? 'show' : 'hide'}`}></div>
        
        <Link key={icons[6].id} className = {`side-nav-icon   ${icons[6].show ? 'show' : 'hide'}`} to="https://www.linkedin.com/in/matteo-ramazzini/" ><LinkedinOutlined /></Link>
        
        
    </div>
    );
};

export default SideNav1;
