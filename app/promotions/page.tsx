'use client';
import React from 'react';
import {Pagination} from 'antd';
import type {PaginationProps} from 'antd';

const StudyAbroad = () => {
  const handleChangePage: PaginationProps['onChange'] = page => {
    console.log(page);
  };

  return (
    <div className="">
      <div className=""></div>
      <Pagination
        // current={1}
        defaultPageSize={6}
        total={200}
        showSizeChanger={false}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default StudyAbroad;
