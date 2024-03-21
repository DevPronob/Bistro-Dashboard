import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Customer Map',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [50,60,70,80,90,100,200,300,400,500],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [50,60,70,80,90,100,200,300,400,500],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

export default function MapChart() {
    return <Bar  options={options} data={data} />;
}
