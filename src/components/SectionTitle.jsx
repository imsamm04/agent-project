import React from 'react';

const SectionTitle = ({ title, subTitle, className = '' }) => (
  <div className={`flex flex-col items-center justify-center bg-[#2E2E2E] w-full sm:w-[216px] h-[144px] px-4 ${className}`}>
    <span
      className="text-[#FFCC21]"
      style={{
        fontWeight: 400,
        fontSize: '22px',
        lineHeight: '27px',
        letterSpacing: '0.11px',
        textAlign: 'center',
      }}
    >
      {title}
    </span>
    <div className="w-16 h-[1px] bg-white my-3" />
    <span
      className="text-white"
      style={{
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '26px',
        letterSpacing: '0px',
        textAlign: 'center',
      }}
    >
      {subTitle}
    </span>
  </div>
);

export default SectionTitle; 