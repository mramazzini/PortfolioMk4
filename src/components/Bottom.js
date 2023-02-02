import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

function Bottom() {

    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Matteo Ramazzini ©2023 Created with Ant Design
        </Footer>);
}
export default Bottom;
