import React from 'react';

const LoadingSpinner = ({ className = '', size = 24, color = '#fff' }) => (
  <svg
    className={`animate-spin mr-2 ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="4" opacity="0.2" />
    <path d="M22 12a10 10 0 0 1-10 10" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default LoadingSpinner; 