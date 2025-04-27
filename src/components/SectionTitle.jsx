import React from 'react';

const SectionTitle = ({ title, subTitle, icon }) => (
  <div className="flex flex-col items-center mb-4">
    {icon && <img src={icon} alt={title} className="w-8 h-8 mb-2" />}
    <div className="text-lg font-bold text-[#FFCC21]">{title}</div>
    {subTitle && <div className="text-sm text-gray-500">{subTitle}</div>}
  </div>
);

export default SectionTitle; 