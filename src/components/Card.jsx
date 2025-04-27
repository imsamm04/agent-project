import React from 'react';

const Card = ({ children, className = '', ...rest }) => {
  return (
    <div className={`bg-white rounded-xl shadow p-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card; 