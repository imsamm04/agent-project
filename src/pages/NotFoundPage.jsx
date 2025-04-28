import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-[960px] pt-[100px] pb-[64px] text-center">
        <div className="bg-[#2E2E2E] p-8 rounded-lg">
          <h1 className="text-[120px] font-bold text-[#FF963C] mb-4">404</h1>
          <h2 className="text-[32px] text-white mb-6">ページが見つかりません</h2>
          <p className="text-[#FFFFFF] mb-8 text-[18px]">
            申し訳ありませんが、お探しのページは存在しないか、移動された可能性があります。
          </p>
          <Link 
            to="/" 
            className="inline-block bg-[#FF963C] text-white px-8 py-3 rounded-md hover:bg-[#FF8B2C] transition-colors duration-300"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage; 