import React from 'react';
import { COLORS } from '../constants/colors';
import { CHALLENGE_CARD_STYLES } from '../constants/styles';

const ChallengeMenuCard = ({ image, title, subLabel }) => (
  <div
    className="flex flex-col items-center justify-center w-full sm:w-[288px] aspect-square"
    style={{ background: COLORS.primary[300], padding: 0 }}
  >
    <div
      className="relative flex flex-col items-center justify-center w-[calc(100%-48px)] sm:w-[240px] aspect-square"
      style={{ background: COLORS.black[500] }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute top-0 left-0 opacity-60"
        style={{ zIndex: 1, filter: 'grayscale(1)' }}
      />
      <div
        className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 2 }}
      >
        <span
          className="mb-4 text-xl sm:text-[25px]"
          style={CHALLENGE_CARD_STYLES.title}
        >
          {title}
        </span>
        <span
          className="text-white text-sm sm:text-sm"
          style={CHALLENGE_CARD_STYLES.subLabel}
        >
          {subLabel}
        </span>
      </div>
    </div>
  </div>
);

export default ChallengeMenuCard; 