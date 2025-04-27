import { useState } from 'react';

const useLoadMore = (totalCount, initialCount = 8, step = 8) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisibleCount((prev) => Math.min(prev + step, totalCount));
    }, 1500);
  };

  return { visibleCount, loading, handleLoadMore };
};

export default useLoadMore; 