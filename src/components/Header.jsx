import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: '自分の記録', path: '/challenge' },
    { title: '体重グラフ', path: '/weight-graph' },
    { title: '目標', path: '/goal' },
    { title: '選択中のコース', path: '/selected-course' },
    { title: 'コラム一覧', path: '/column' },
    { title: '設定', path: '/settings' },
  ];

  return (
    <header className="bg-[#2E2E2E] fixed top-0 left-0 right-0 z-50">
      <div className="h-[64px] flex items-center w-full max-w-grid">
        <div className="container mx-auto flex justify-between items-center max-w-grid">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/icons/logo.png" alt="healthy" className="h-[40px] w-auto" />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="flex items-center space-x-[56px]">
            <Link 
              to="/challenge" 
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <img src="/icons/icon_memo.png" alt="memo" className="w-[32px] h-[32px]" />
              </div>
              <span className="text-[16px]">自分の記録</span>
            </Link>
            <Link 
              to="/column" 
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <img src="/icons/icon_challenge.png" alt="challenge" className="w-[32px] h-[32px]" />
              </div>
              <span className="text-[16px]">チャレンジ</span>
            </Link>
            <Link 
              to="/notification" 
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity relative"
            >
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <img src="/icons/icon_message.png" alt="notification" className="w-[32px] h-[32px]" />
                <span className="absolute -top-1 left-[22px] -right-1 w-[18px] h-[18px] bg-[#EA6C00] rounded-full flex items-center justify-center text-white text-[10px]">1</span>
              </div>
              <span className="text-[16px]">お知らせ</span>
            </Link>

            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-[32px] h-[32px] flex items-center justify-center hover:opacity-80 transition-opacity ml-[24px]"
              aria-label="Toggle menu"
            >
              <img src="/icons/icon_menu.png" alt="menu" className="w-[32px] h-[32px]" />
            </button>
          </nav>

          {/* Side Menu */}
          <SideMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};

export default Header; 