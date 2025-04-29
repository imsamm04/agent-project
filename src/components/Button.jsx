import React from 'react';
import { BUTTON_VARIANTS } from '../constants/styles';

const Button = ({ children, onClick, variant = 'primary', className = '', ...rest }) => {
  const isGradient = variant === 'gradient';
  return (
    <button
      onClick={onClick}
      className={`${isGradient ? 'w-[296px] h-[56px]' : 'px-6 py-2 font-bold shadow'} ${BUTTON_VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 