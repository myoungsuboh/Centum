import React from 'react';
import {Dropdown, Space} from 'antd';
import {NaviItems} from '@/mocData/nevi';
import {DownOutlined} from '@ant-design/icons';

const dropDown = () => {
  return (
    <Dropdown className="w-150 pc:text-xs" menu={{items: NaviItems}}>
      <Space>
        사이트 <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default dropDown;
