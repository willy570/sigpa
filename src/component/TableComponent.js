import React from "react";
import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';

import {tableCol} from '../TableData'


const TableComponent = (props) => {
  const { datas } = props;
  //console.log(datas);
  if (!datas || datas.length === 0) return <p>No data found, sorry</p>;

    return (
      <div>
        <Table columns={tableCol} rows={datas} per_page={6}/>
      </div>
    );
};

export default TableComponent;
