import React from 'react';

const ChallengeMenuCard = ({ image, title, subLabel }) => (
  <div
    className="flex flex-col items-center justify-center"
    style={{ width: 288, height: 288, background: '#FFCC21', padding: 0 }}
  >
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ width: 240, height: 240, background: '#282828' }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute top-0 left-0 opacity-60"
        style={{ zIndex: 1, filter: 'grayscale(1)' }}
      />
      <div
        className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 2 }}
      >
        <span
          className="text-[#FFCC21] mb-4"
          style={{
            fontWeight: 400,
            fontSize: '25px',
            lineHeight: '30px',
            letterSpacing: '0.13px',
            textAlign: 'center',
            width: '100%',
            display: 'block',
          }}
        >
          {title}
        </span>
        <span
          className="bg-[#FF963C] text-white text-base px-6 py-2"
          style={{ fontFamily: 'Hiragino Kaku Gothic Pro, sans-serif', fontWeight: 400 }}
        >
          {subLabel}
        </span>
      </div>
    </div>
  </div>
);

export default ChallengeMenuCard; 