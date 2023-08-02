import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function StackBars() {
  return (
    <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'series B1' },
      ]}
   
    />
  );
}