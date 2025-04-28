import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import HexMenuItem from '../components/HexMenuItem';
import RecordCard from '../components/RecordCard';
import ChartSection from '../components/ChartSection';
import Button from '../components/Button';
import ScrollToTop from '../components/ScrollToTop';
import { records, hexMenus } from '../data/dummyData';
import '../styles/common.css';
import LoadingSpinner from '../components/LoadingSpinner';
import useLoadMore from '../hooks/useLoadMore';

const TopPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('');

  const filteredRecords = records.filter(rec => {
    if (!selectedMenu) return true;
    const meal = rec.timeLabel.split('.').pop();
    return meal === selectedMenu;
  });

  const { visibleCount, loading, handleLoadMore } = useLoadMore(filteredRecords.length);

  return (
    <MainLayout>
      <main className="min-h-screen pt-[64px]">
        {/* Banner + Chart */}
        <div className="flex mb-8 items-stretch w-full">
          <div className="relative w-5/12 h-[316px]">
            <img src="/imgs/d01.jpg" alt="banner" className="w-full h-full object-cover" />
            <img src="/imgs/main_photo_text.png" alt="banner overlay" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" />
          </div>
          <div className="w-7/12 h-[316px] flex items-center bg-[#2E2E2E]">
            <div className="w-full h-full flex items-center">
              <ChartSection
                data={[
                  [80, 78, 75, 60, 62, 60, 58, 55, 53, 50, 48, 50],
                  [80, 77, 73, 65, 64, 62, 60, 58, 55, 52, 48, 45],
                ]}
                labels={['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          {/* Hex Menu */}
          <div className="flex justify-center gap-[74px] mb-8">
            {hexMenus.map((item, idx) => (
              <HexMenuItem
                key={item.label}
                {...item}
                active={selectedMenu === item.label}
                onClick={() => setSelectedMenu(item.label)}
              />
            ))}
          </div>
          {/* Record Cards + ScrollToTop */}
          <div className="relative mb-8" style={{ width: 'fit-content', margin: '0 auto' }}>
            <div className="grid grid-cols-4 gap-2 max-w-grid">
              {filteredRecords.slice(0, visibleCount).map((rec, idx) => (
                <RecordCard key={idx} {...rec} />
              ))}
            </div>
            <div
              className="fixed z-50"
              style={{
                right: `calc((100vw - var(--container-width)) / 2 - 10px)`,
                bottom: '32px',
              }}
            >
              <ScrollToTop />
            </div>
          </div>
          {visibleCount < filteredRecords.length && (
            <div className="flex justify-center mt-[28px] mb-[64px]">
              <Button variant="gradient" onClick={handleLoadMore} disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center">
                    <LoadingSpinner />
                    ローディング中...
                  </span>
                ) : (
                  '記録をもっと見る'
                )}
              </Button>
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  );
};

export default TopPage; 