import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Clist.css'
import { Layout, Menu, Row, Col, Breadcrumb } from 'antd';
import { Table, Tag, Space, Input } from 'antd';

const { Header, Content, Footer } = Layout;
const onSearch = value => console.log(value);
const { Search } = Input;
const columns = [
  {
    title: 'Course Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Reviews',
    dataIndex: 'reviews',
    key: 'reviews',
  },
  {
    title: 'Rating',
    dataIndex: 'stars',
    key: 'stars',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Enrol Details',
    dataIndex: 'details',
    key: 'details',
    render: text => <a>{text}</a>,
  },

];

const data = [
  {
    key: '1',
    name: 'ACCT1101 Introduction to Financial Accounting',
    reviews: 3,
    stars: '***',
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
  {
    key: '2',
    name: 'ACCT2102 Intermediate Financial Accounting I',
    stars: '**',
    reviews: 4,
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
  {
    key: '3',
    name: 'ACCT2105 Introduction to Management Accounting',
    stars: '*',
    reviews: 5,
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
];


function CList() {
  return (
    <div>
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Course Information</Menu.Item>
        <Menu.Item key="2">Course Review </Menu.Item>
        <Menu.Item key="3">Personal Timetable</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <Space direction="vertical"><Search className="InputBox" placeholder="input search text" onSearch={onSearch} enterButton /></Space>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Table dataSource={data} columns={columns}/>
      </div>
    </Content>
  </Layout>,
  </div>
  );
}


export default CList;
