import React from 'react';

const ScrollToTop = ({ className = '' }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-[50px] h-[48px] rounded-full border border-gray-100 hover:bg-gray-100 transition-colors"
        style={{ outline: 'none', padding: 0, background: 'transparent' }}
      >
        {/* Arrow up icon bằng ảnh */}
        <img src="/icons/icon_scroll.png" alt="scroll to top" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default ScrollToTop; 