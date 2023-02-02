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
    getItem('Portfolio', '1', <CodeOutlined />),
    getItem('About Me', '2', <UserOutlined />),
    getItem('Contact Me', '3', <MailOutlined />),
    getItem('', '4', <Button type="link" icon = {<LinkedinFilled style={{color: '#0077b5' }} />}>LinkedIn</Button>)
    ];


  function Navbar() {
    
    return (
<Header className="header">
                <div className="logo" />
                
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={nav_items } />
                
            </Header>
    );
  }

  export default Navbar;