import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function ContactMe(){


    return(
        <div className = 'contact-me'>
            <div className="contact-header">You've reached the bottom!</div>
            <div className = "contact-body">Get in touch with me on the left or view my resume here!</div>
            <Link to="https://docs.google.com/document/d/1c4Osj5DolhG_0aajPyQpNgGjOwkETryZPVIWtfE56f4/edit?usp=sharing" target="_blank"><DownloadOutlined className="resume-icon clickable" /></Link>
        </div>
    );
};

export default ContactMe;