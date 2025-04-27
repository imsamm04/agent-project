import React from 'react';

const ColumnCard = ({ image, date, time, desc, tags }) => (
  <div className="bg-[#F5F5F5] p-0 w-[234px] h-[222px]">
    <div className="relative">
      <img src={image} alt={desc} className="w-[234px] h-[144.47px] object-cover" />
      <div className="absolute left-0 bottom-0 bg-[#FFCC21] text-white text-sm px-3 py-1 font-normal">
        {date}　{time}
      </div>
    </div>
    <div className="py-3 px-0">
      <div className="text-[#414141] text-base mb-2 truncate">{desc}</div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs text-[#FF963C]">#{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ColumnCard; 