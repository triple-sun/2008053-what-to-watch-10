import { useCallback, useState } from 'react';

const useMovieCard = () => {
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);

  const handleMovieMouseOver = useCallback(
    (movieId: number | null) => setActiveMovieId(movieId),
    [],
  );

  return {
    activeMovieId,
    handleMovieMouseOver
  };
};

export default useMovieCard;
