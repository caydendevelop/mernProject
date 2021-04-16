import React from 'react';
import './AboveBar.css';
import { Input, Space, Button } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

function AboveBar() {
  return (
    <>
      <img src="/images/logo1.png" alt="logo here" className="logo"></img>
      
      <div className="positioning">
        <Space direction="vertical">
          <Search placeholder="Search here" allowClear onSearch={onSearch} className="SearchBar" />
        </Space>
        <Button type="text" className="ButtonDesign">[username]</Button>
        <Button type="text" className="ButtonDesign">Logout</Button>
      </div>
    </>
    );
}

  export default AboveBar;