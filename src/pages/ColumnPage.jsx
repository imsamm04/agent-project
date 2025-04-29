import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionTitle from '../components/SectionTitle';
import ColumnCard from '../components/ColumnCard';
import Button from '../components/Button';
import { columnData } from '../data/columnData';
import '../styles/common.css';
import useLoadMore from '../hooks/useLoadMore';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollToTop from '../components/ScrollToTop';

const sectionTitles = [
  { title: 'RECOMMENDED COLUMN', subTitle: 'オススメ' },
  { title: 'RECOMMENDED DIET', subTitle: 'ダイエット' },
  { title: 'RECOMMENDED BEAUTY', subTitle: '美容' },
  { title: 'RECOMMENDED HEALTH', subTitle: '健康' },
];

const ColumnPage = () => {
  const { visibleCount, loading, handleLoadMore } = useLoadMore(columnData.length);

  return (
    <MainLayout>
      <main className="min-h-screen pt-[64px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Section Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-4 sm:gap-6 lg:gap-[32px] max-w-grid mx-auto mb-[56px]">
            {sectionTitles.map((item, idx) => (
              <SectionTitle key={item.title} {...item} />
            ))}
          </div>
          {/* Column Cards + ScrollToTop */}
          <div className="relative mb-8" style={{ width: 'fit-content', margin: '0 auto' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-2 mb-8 max-w-grid">
              {columnData.slice(0, visibleCount).map((rec, idx) => (
                <ColumnCard key={idx} {...rec} />
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
          {visibleCount < columnData.length && (
            <div className="flex justify-center">
              <Button variant="gradient" onClick={handleLoadMore} disabled={loading} className="text-lg">
                {loading ? (
                  <span className="flex items-center justify-center">
                    <LoadingSpinner />
                    ローディング中...
                  </span>
                ) : (
                  'コラムをもっと見る'
                )}
              </Button>
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  );
};

export default ColumnPage; 