import React from 'react';
import './PageTemplate.css';
import AboveBar from './AboveBar'
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function PageTemplate() {
  return (
    <Layout className="layout">
      
      <AboveBar />

      <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Course Information and Review</Menu.Item>
        <Menu.Item key="3">Personal Timetable</Menu.Item>
      </Menu>
    </Header>

    <Content style={{ padding: '0 0px' }}>
      {/*
      <Breadcrumb style={{ margin: '0px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content">Content</div>
    </Content>

    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  );
}

export default PageTemplate;