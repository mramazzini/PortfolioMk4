import React from 'react';
import {DownOutlined} from '@ant-design/icons';



function Intro() {
 
    return (
        <div>
        <p className='intro-text'>I am a software Developer. Delve into the <p className='madness'>depths.</p></p>
        <div className='bobbing-arrow'><DownOutlined style = {{fontSize:'300%'}}/></div>
        </div>
    );
}

export default Intro;


