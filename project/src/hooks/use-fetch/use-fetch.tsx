import { useEffect, useState } from 'react';

const useFetch = (server: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(server)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, [server]);

  return data;
};

export default useFetch;
