import React from 'react';
import { DIARY_CARD_STYLES } from '../constants/styles';

const DiaryCard = ({ date, time, content }) => (
  <div
    className="bg-white border p-3 text-sm w-full sm:w-[231px] aspect-square"
    style={{ borderWidth: 2, borderColor: '#707070' }}
  >
    <div style={DIARY_CARD_STYLES.date}>{date}</div>
    <div style={DIARY_CARD_STYLES.time}>{time}</div>
    <div
      className="mt-2"
      style={DIARY_CARD_STYLES.content}
    >
      {content}
    </div>
  </div>
);

export default DiaryCard; 