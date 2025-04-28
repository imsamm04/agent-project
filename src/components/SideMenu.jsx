import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ open, onClose, menuItems = [] }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
      {/* Close icon - đặt sát góc phải trên cùng */}
      <button
        className="fixed top-4 right-4 w-8 h-8 flex items-center justify-center z-50"
        onClick={onClose}
        aria-label="Close menu"
        style={{ background: 'transparent' }}
      >
        <img src="/icons/icon_close.png" alt="close" className="w-8 h-8" />
      </button>
      {/* Menu */}
      <div className="relative bg-[#777777] w-[320px] h-full shadow-lg animate-slideInRight" style={{ minWidth: 280, right: 0 }}>
        <div className="pt-12">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-center h-[72px] px-8 text-white border-b border-[#888] last:border-none text-[18px] hover:bg-[#414141]"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu; 