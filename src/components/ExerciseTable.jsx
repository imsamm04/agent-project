import React from 'react';
import { COLORS } from '../constants/colors';

const ExerciseTable = ({ data }) => {
  // Chia data thành 2 cột
  const half = Math.ceil(data.length / 2);
  const leftCol = data.slice(0, half);
  const rightCol = data.slice(half);

  return (
    <div
      className="bg-[#414141] text-white rounded-lg overflow-hidden custom-scrollbar"
      style={{ maxHeight: 264, minHeight: 264, overflowY: 'auto', paddingRight: 8, background: '#414141', color: COLORS.white }}
    >
      <div className="flex">
        {[leftCol, rightCol].map((col, colIdx) => (
          <div key={colIdx} className="flex-1">
            {col.map((row, idx) => (
              <div
                key={idx}
                className={`border-b border-[#777] last:border-none py-2 pr-4`}
                style={{ minHeight: 44, borderColor: COLORS.gray[400] }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-2 text-lg" style={{ fontWeight: 700, color: COLORS.white }}>&bull;</span>
                    <span className="text-sm leading-tight">{row.name}</span>
                  </div>
                  <span className="text-base ml-2" style={{ fontWeight: 400, minWidth: 60, textAlign: 'right', color: COLORS.primary[300] }}>{row.time}</span>
                </div>
                <div className="flex items-center mt-1 ml-4">
                  <span className="text-base leading-tight" style={{ fontWeight: 400, color: COLORS.primary[300] }}>{row.calories}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${COLORS.primary[300]};
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #666;
        }
      `}</style>
    </div>
  );
};

export default ExerciseTable; 