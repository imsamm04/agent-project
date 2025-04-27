import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import RecordCard from '../components/RecordCard';
import Button from '../components/Button';

const columnData = [
  // mock data
];

const ColumnPage = () => (
  <div>
    <Header />
    <main className="min-h-screen bg-gray-100 pt-[64px]">
      <div className="container mx-auto py-8">
        {/* Section Titles */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          <SectionTitle title="RECOMMENDED COLUMN" subTitle="オススメ" />
          <SectionTitle title="RECOMMENDED DIET" subTitle="ダイエット" />
          <SectionTitle title="RECOMMENDED BEAUTY" subTitle="美容" />
          <SectionTitle title="RECOMMENDED HEALTH" subTitle="健康" />
        </div>
        {/* Record Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {columnData.map((rec, idx) => (
            <RecordCard key={idx} {...rec} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="gradient">コラムをもっと見る</Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ColumnPage; 