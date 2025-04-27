import React from 'react';

const footerLinks = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];

const Footer = () => (
  <footer
    className="w-full"
    style={{ background: '#414141', height: 128 }}
  >
    <div className="flex items-center max-w-record-grid  h-full mt-[64px]">
      <ul className="flex flex-row gap-12">
        {footerLinks.map((link, idx) => (
          <li key={idx} className="text-white text-base whitespace-nowrap">
            {link}
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer; 