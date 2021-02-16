import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

const data = [
  {
    name: '20.1',
    hours: 7
  },
  {
    name: '21.1',
    hours: 9
  },
  {
    name: '22.1',
    hours: 8.6
  },
  {
    name: '23.1',
    hours: 7.2
  },
  {
    name: '24.1',
    hours: 6
  },
  {
    name: '25.1',
    hours: 11
  },
  {
    name: '26.1',
    hours: 8
  },
];

const SleepChart = () => {
  return (
    <LineChart margin={{ top:20 }} width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" strokeWidth={2} dataKey="hours" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default SleepChart