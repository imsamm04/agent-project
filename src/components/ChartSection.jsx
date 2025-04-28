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

const ChartSection = ({
  data,
  labels,
  title,
  date,
  children,
  style = {},
  titleClassName = '',
  dateClassName = '',
}) => {
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
    <div className="w-full h-full" style={style}>
      <div className="flex items-center mb-2">
        {title && (
          <span className={`text-white text-lg font-bold mr-4 ${titleClassName}`}>{title}</span>
        )}
        {date && (
          <span className={`text-white text-base ${dateClassName}`}>{date}</span>
        )}
      </div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 0,
              right: 0,
              bottom: 70,
              top: 0,
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
                font: {
                  weight: 300,
                  size: 8,
                  lineHeight: 1.5,
                },
                padding: 10,
              },
            },
          },
        }}
      />
      {children && <div className="mt-4 flex justify-end">{children}</div>}
    </div>
  );
};

export default ChartSection; 