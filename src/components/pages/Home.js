import React from 'react';
import Side_menu from '../Side_menu';
import { Carousel } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const items1 = ['About Me', 'Portfolio', 'Hire Me!'].map((key) => ({
    key,
    label: `${key}`,
}));

function Home() {
    const {
        token: {colorBgContainer},
            } = theme.useToken();
    return (
        
        <Layout>
            
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            
            <Content style={{ padding: '0 50px', }}>
                
            </Content>
            <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
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
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Matteo Ramazzini ©2023 Created with Ant Design
      </Footer>
        </Layout>
    );
}

export default Home;