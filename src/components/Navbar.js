import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import {LinkedinFilled, CodeOutlined, UserOutlined, MailOutlined, AntDesignOutlined} from '@ant-design/icons';
import { MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
//Create Items for navbar
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const nav_items = [
    getItem('', '1', <Button type="link" href = "/" icon = {<CodeOutlined/>}>Portfolio</Button>),
    getItem('', '2', <Button type="link" href = "/about" icon = {<UserOutlined />}>About Me</Button>),
    getItem('', '3', <Button type="link" href = "/contact" icon = {<MailOutlined />}>Contact Me</Button>),
    getItem('', '4', <Button type="link" href = "https://www.linkedin.com/in/matteo-ramazzini-276470229/" icon = {<LinkedinFilled style={{color: '#0077b5' }} />}>LinkedIn</Button>)
    ];


  function Navbar() {
    
    return (
<Header className="header">
                <div className="logo" />
                
                <Menu theme="dark" mode="horizontal"  items={nav_items } />
                
            </Header>
    );
  }

  export default Navbar;