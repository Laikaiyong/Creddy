import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Vector Search',
    claimed: 4000,
    unclaimed: 2400,
  },
  {
    name: 'Atlas 101',
    claimed: 3000,
    unclaimed: 1398,
  },
  {
    name: 'MongoDB.locale',
    claimed: 2000,
    unclaimed: 9800,
  },
  {
    name: 'Serverless Deployment',
    claimed: 2780,
    unclaimed: 3908,
  },
  {
    name: 'Intro: NoSQL',
    claimed: 1890,
    unclaimed: 4800,
  },
];

export default class CompanyChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/mixed-bar-chart-lv3l68';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="unclaimed" stackId="a" fill="#00000" />
          <Bar dataKey="claimed" fill="#00684a" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
