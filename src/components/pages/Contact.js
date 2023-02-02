import React from 'react';
import Navbar from '../Navbar';
import Bottom from '../Bottom';
import { Breadcrumb, Layout, Menu, theme} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function Contact() {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>

            <Navbar />

            <Content style={{ padding: '0 50px', }}>

            </Content>

            <Layout
                style={{
                    padding: '24px 0',
                    background: colorBgContainer,
                }}

            >

                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280,
                    }}
                >
                    Select a tab to the left to view my work!
                </Content>

            </Layout>
            <Bottom />
        </Layout>
    );
}

export default Contact;