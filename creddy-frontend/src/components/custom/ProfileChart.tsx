import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Solution Architecture',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Teamwork',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Communication',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Problem Solving',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Project Planning',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Business Strategy',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class ProfilecChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}