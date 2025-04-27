import React from 'react';

const HexMenuItem = ({ icon, label, subLabel, active, onClick }) => (
  <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
    <div
      className={`relative flex flex-col items-center justify-center ${active ? 'shadow-lg' : ''}`}
      style={{
        width: '134px',
        height: '150px',
        background: 'linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        transform: 'rotate(0deg)',
      }}
    >
      {/* Nội dung nằm trong lục giác */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Icon overlay */}
        <img src={icon} alt="hexagon icon" className="w-10 h-10 mt-4" />
        {/* Label nằm trong hexagon */}
        <span className="text-white text-lg mt-2 leading-tight text-center" style={{wordBreak: 'break-word'}}>{label}</span>
      </div>
    </div>
    {subLabel && <div className="text-xs text-gray-500 mt-2">{subLabel}</div>}
  </div>
);

export default HexMenuItem; 