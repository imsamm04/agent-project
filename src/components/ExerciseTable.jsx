import React from 'react';

const ExerciseTable = ({ data }) => (
  <div className="bg-[#414141] text-white rounded-lg overflow-hidden">
    <table className="w-full text-sm">
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-b border-[#777] last:border-none">
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2">{row.time}</td>
            <td className="px-4 py-2">{row.calories}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExerciseTable; 