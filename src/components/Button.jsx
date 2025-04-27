import React from 'react';

const variants = {
  primary: 'bg-primary-400 hover:bg-primary-500 text-white',
  secondary: 'bg-secondary-300 hover:bg-secondary-300 text-black',
  gradient: '', // Sẽ custom inline style cho gradient
};

const Button = ({ children, onClick, variant = 'primary', className = '', ...rest }) => {
  const isGradient = variant === 'gradient';
  return (
    <button
      onClick={onClick}
      className={`${isGradient ? '' : 'px-6 py-2 font-bold shadow transition-colors duration-200'} ${variants[variant]} ${className}`}
      style={
        isGradient
          ? {
              background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
              width: 296,
              height: 56,
              color: '#fff',
              fontFamily: 'Hiragino Kaku Gothic Pro',
              fontWeight: 300,
              fontSize: 18,
              lineHeight: '26px',
              letterSpacing: 0,
              textAlign: 'center',
              borderRadius: 8,
              border: 'none',
              boxShadow: 'none',
              padding: 0,
              transition: 'background 0.2s',
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 