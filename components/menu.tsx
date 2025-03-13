import React, {useState} from 'react';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

const Menu = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="flex flex-col content-center justify-center">
      <ul className="">
        <li onClick={handleClick}>솔루션{selected ? <UpOutlined /> : <DownOutlined />}</li>
      </ul>
    </div>
  );
};

export default Menu;
