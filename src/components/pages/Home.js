import React from 'react';
import Side_menu from '../Side_menu';
import Navbar from '../Navbar';
import Bottom from '../Bottom';
import { Carousel } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {LinkedinFilled} from '@ant-design/icons';
import { MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;







function Home() {
    const {
        token: {colorBgContainer},
            } = theme.useToken();
    return (
        
        <Layout>
            
            <Navbar/>
            
            <Content style={{ padding: '0 50px', }}>
                
            </Content>
            
            <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
          
        >
        <Side_menu/>
        <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            Content
          </Content>
          
        </Layout>
        <Bottom/>
        </Layout>
    );
}

export default Home;