import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import { Margin } from '@mui/icons-material';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function PieActiveArc() {
  return (
    <>
    <h5 style={{margin:"5px"}}><center>My Daily Activities</center></h5>
    <div style={{height:"80%"}}>
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      
    />
    </div>
    </>
  );
}
