import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ChartSection = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data[0],
        borderColor: '#FFCC21',
        backgroundColor: 'rgba(255,204,33,0.2)',
        tension: 0.4,
      },
      {
        label: 'Dataset 2',
        data: data[1],
        borderColor: '#8FE9D0',
        backgroundColor: 'rgba(143,233,208,0.2)',
        tension: 0.4,
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 55,
              right: 100,
            }
          },
          plugins: { legend: { display: false } },
          scales: {
            y: {
              display: false,
              grid: { display: false, drawBorder: false },
              ticks: { display: false },
            },
            x: {
              grid: {
                color: '#777777',
                lineWidth: 2,
                drawBorder: false,
              },
              offset: true,
              ticks: {
                color: '#fff',
                font: { weight: 'bold' },
                padding: 10,
                callback: function(value, index, values) {
                  if (index === 0) return '' + this.getLabelForValue(value);
                  if (index === values.length - 1) return this.getLabelForValue(value) + '';
                  return this.getLabelForValue(value);
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartSection; 