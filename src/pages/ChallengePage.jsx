import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ChartSection from '../components/ChartSection';
import ExerciseTable from '../components/ExerciseTable';
import DiaryCard from '../components/DiaryCard';
import ScrollToTop from '../components/ScrollToTop';
import { TEXT_STYLES, CHALLENGE_STYLES } from '../constants/styles';
import ChallengeMenuCard from '../components/ChallengeMenuCard';
import ChartFilterButton from '../components/ChartFilterButton';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { recordCards, chartLabels, chartData, exerciseData, diaryData, FILTERS } from '../data/dummyData';

const DIARY_LOAD_STEP = 4;
const DIARY_INITIAL = 8;

const ChallengePage = () => {
  const [filterType, setFilterType] = useState('year');
  const [visibleDiary, setVisibleDiary] = useState(DIARY_INITIAL);
  const [loading, setLoading] = useState(false);

  const handleLoadMoreDiary = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleDiary((prev) => Math.min(prev + DIARY_LOAD_STEP, diaryData.length));
      setLoading(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-gray-100 pt-[64px] pb-12">
        {/* Record Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 px-4 sm:px-6">
          {recordCards.map((card, idx) => (
            <ChallengeMenuCard key={idx} image={card.image} title={card.title} subLabel={card.subLabel} />
          ))}
        </div>

        {/* Chart Section */}
        <div className="flex justify-center mt-8 sm:mt-12 px-4 sm:px-6">
          <div className="w-full max-w-[960px] h-[300px] bg-[#414141] p-4 sm:p-6">
            <div className="flex items-center mb-2">
              <span className="text-white mr-4" style={CHALLENGE_STYLES.heading}>BODY<br />RECORD</span>
              <span className="text-white text-base" style={CHALLENGE_STYLES.date}>2021.05.21</span>
            </div>
            <ChartSection data={chartData[filterType]} labels={chartLabels[filterType]} />
            <div className="flex ml-0 sm:ml-6 gap-2 sm:gap-4 mt-[-60px] justify-start overflow-x-auto">
              {FILTERS.map(f => (
                <ChartFilterButton
                  key={f.key}
                  label={f.label}
                  active={filterType === f.key}
                  onClick={() => setFilterType(f.key)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Exercise Table */}
        <div className="flex justify-center mt-8 sm:mt-12 px-4 sm:px-6">
          <div className="w-full max-w-[960px] bg-[#414141] p-4 sm:p-6">
            <div className="flex items-center mb-2">
              <span className="text-white mr-4" style={CHALLENGE_STYLES.heading}>MY<br />EXERCISE</span>
              <span className="text-white text-base" style={CHALLENGE_STYLES.date}>2021.05.21</span>
            </div>
            <ExerciseTable data={exerciseData} />
          </div>
        </div>

        {/* Diary Cards */}
        <div className="flex flex-col items-center mt-8 sm:mt-12 px-4 sm:px-6">
          <div className="w-full max-w-[960px]">
            <span className="text-[#414141] text-lg font-bold mb-4 block" style={TEXT_STYLES.HEADING}>MY DIARY</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {diaryData.slice(0, visibleDiary).map((item, idx) => (
                <DiaryCard key={idx} date={item.date} time={item.time} content={item.content} />
              ))}
            </div>
            {visibleDiary < diaryData.length && (
              <div className="flex justify-center mt-8">
                <Button variant="gradient" onClick={handleLoadMoreDiary} disabled={loading}>
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <LoadingSpinner />
                      ローディング中...
                    </span>
                  ) : (
                    '自分の日記をもっと見る'
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Scroll To Top */}
        <div className="fixed bottom-8 right-4 sm:right-8 z-50">
          <ScrollToTop />
        </div>
      </main>
    </MainLayout>
  );
};

export default ChallengePage; 