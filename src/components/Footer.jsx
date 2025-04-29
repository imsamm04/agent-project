import React from 'react';
import { TEXT_STYLES } from '../constants/styles';

const footerLinks = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];

const Footer = () => (
  <footer className="w-full bg-[#414141] py-8 md:py-12">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 lg:gap-12">
        {footerLinks.map((link, idx) => (
          <li 
            key={idx} 
            className="text-white text-[12px] md:text-[14px] lg:text-[16px] hover:opacity-80 transition-opacity cursor-pointer"
            style={TEXT_STYLES.FOOTER_LINK}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer; 