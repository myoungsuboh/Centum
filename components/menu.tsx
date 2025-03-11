import React, {useState} from 'react';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

const Menu = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <ul className="">
      <li onClick={handleClick}>솔루션{selected ? <UpOutlined /> : <DownOutlined />}</li>
    </ul>
  );
};

export default Menu;
