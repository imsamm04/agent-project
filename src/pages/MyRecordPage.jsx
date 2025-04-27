import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ChartSection from '../components/ChartSection';
import ExerciseTable from '../components/ExerciseTable';
import DiaryCard from '../components/DiaryCard';
import Button from '../components/Button';

const diaryData = [
  // mock data
];

const exerciseData = [
  // mock data
];

const MyRecordPage = () => (
  <div>
    <Header />
    <main className="min-h-screen bg-gray-100 pt-[64px]">
      <div className="container mx-auto py-8">
        {/* Section Titles */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <SectionTitle title="BODY RECORD" subTitle="自分のカラダの記録" />
          <SectionTitle title="MY EXERCISE" subTitle="自分の運動の記録" />
          <SectionTitle title="MY DIARY" subTitle="自分の日記" />
        </div>
        {/* Chart */}
        <div className="mb-8">
          <ChartSection data={[[75, 60, 55, 50, 45, 40], [80, 70, 65, 60, 55, 50]]} labels={['6月', '7月', '8月', '9月', '10月', '11月']} />
        </div>
        {/* Exercise Table */}
        <div className="mb-8">
          <ExerciseTable data={exerciseData} />
        </div>
        {/* Diary Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {diaryData.map((item, idx) => (
            <DiaryCard key={idx} {...item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="gradient">自分の日記をもっと見る</Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MyRecordPage; 