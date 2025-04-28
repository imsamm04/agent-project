import React from 'react';
import { COLORS } from '../constants/colors';

const ChartFilterButton = ({ label, active, onClick, className = '', children }) => {
  return (
    <button
      className={`chart-filter-btn ${active ? '' : ''} ${className}`}
      style={{
        background: active ? COLORS.primary[300] : COLORS.white,
        color: active ? COLORS.white : COLORS.primary[300],
        fontWeight: 'bold',
      }}
      onClick={onClick}
      type="button"
    >
      {label || children}
    </button>
  );
};

export default ChartFilterButton; 