import { useEffect, useState } from 'react';

const useFetch = (server: string) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(server)
      .then((response) => response.json())
      .then((fetchedFilm) => setResult(fetchedFilm));
  }, [server]);

  return result;
};

export default useFetch;
