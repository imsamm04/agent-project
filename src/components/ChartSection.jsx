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
import { COLORS } from '../constants/colors';
import { CHART_STYLES } from '../constants/styles';

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
        borderColor: COLORS.chart.line1,
        backgroundColor: COLORS.chart.line1Bg,
        tension: 0.4,
      },
      {
        label: 'Dataset 2',
        data: data[1],
        borderColor: COLORS.chart.line2,
        backgroundColor: COLORS.chart.line2Bg,
        tension: 0.4,
      },
    ],
  };
  return (
    <div className="w-full h-full" style={style}>
      <div className="flex items-center mb-2">
        {title && (
          <span className={`mr-4 ${titleClassName}`} style={CHART_STYLES.title}>{title}</span>
        )}
        {date && (
          <span className={dateClassName} style={CHART_STYLES.date}>{date}</span>
        )}
      </div>
      <Line
        data={chartData}
        options={CHART_STYLES.chartOptions}
      />
      {children && <div className="mt-4 flex justify-end">{children}</div>}
    </div>
  );
};

export default ChartSection; 