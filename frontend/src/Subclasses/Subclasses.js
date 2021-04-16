import React from 'react';
import { Table, Tag, Space } from 'antd';
import './Subclass.css';

const columns = [
    {
        title: 'Subclass',
        dataIndex: 'subclass',
        key: 'subclass',
    },
    {
        title: 'Day',
        dataIndex: 'day',
        key: 'day',
    },
    {
        title: 'Start Time',
        dataIndex: 'starttime',
        key: 'starttime',
    },
    {
        title: 'End Time',
        key: 'endtime',
        dataIndex: 'endtime',
    },
    {
        title: 'Room',
        key: 'room',
        dataIndex: 'room',
    },
    {
        title: 'Add',
        key: 'add',
        dataIndex: 'add',
        render: (subclass) => (
            <Space size="middle">
              <a>Add</a>
            </Space>
        ),
    }
  ];
  
  const data = [
    {
        subclass: '1A',
        day: 'wed',
        starttime: '12:30',
        endtime: '14:20',
        room: 'online',
    },
    {
        subclass: '1B',
        day: 'fri',
        starttime: '12:30',
        endtime: '14:20',
        room: 'online',
    },
  ];

function Subclasses() {
  return (
    <div className='subclassbox'>
        <h2>[Course Title] IIMT4601 Information Systems Project Management</h2>
        <Table className='subclasstable' columns={columns} dataSource={data} />
    </div>
  );
}

export default Subclasses;