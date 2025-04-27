import React from 'react';

const RecordCard = ({ image, timeLabel }) => (
  <div className="relative bg-[#F5F5F5] overflow-hidden" style={{ width: 234, height: 234 }}>
    <img src={image} alt={timeLabel} className="w-full h-full object-cover" />
    <div className="absolute left-0 bottom-0 bg-[#FFCC21] text-white text-lg px-4 py-2 font-normal" style={{borderRadius: 0}}>{timeLabel}</div>
  </div>
);

export default RecordCard; 