import React from 'react';

const DiaryCard = ({ date, time, content }) => (
  <div className="bg-white border border-gray-300 rounded p-3 text-sm">
    <div className="font-bold">{date} {time}</div>
    <div className="mt-1 text-gray-700">{content}</div>
  </div>
);

export default DiaryCard; 