import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const ChartComponent = (props) => {
  const { chartDatas } = props;
  const styles = {
    marginTop: "6em",
  };

  if (!chartDatas || chartDatas.length === 0)
    return <p>No data found, sorry</p>;
  return (
    <BarChart width={600} height={400} data={chartDatas} style={styles}>
      <XAxis dataKey="date" height={70} />
      <YAxis
        width={30}
        height={25}
        allowDecimals="true"
        allowDuplicatedCategory="false"
        tickCount={9}
      />
      <Legend />
      <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
      <Bar
        type="monotone"
        barSize="25"
        dataKey="notesymbole"
        fill="#0c53ac"
      />
      <Bar
        type="monotone"
        barSize="25"
        dataKey="notenumeratie"
        fill="#07aaf1"
      />
      <Bar
        type="monotone"
        barSize="25"
        dataKey="notenumeratie"
        fill="#079f95"
      />
      <Tooltip type="" />
    </BarChart>
  );
};

export default ChartComponent;
