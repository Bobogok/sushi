import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCatalog(category) {
  const [catalogSets, setCatalogSets] = useState([]);
  const [isLoaded, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/items'); // const { data } = ...

        // delete delay
        const { data } = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
          }, 2000);
        });

        setCatalogSets(data[category]);
        setIsLoading(true);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`Ошибка при запросе ${e}`);
      }
    })();
  }, [category]);

  return { catalogSets, isLoaded };
}

export default useFetchCatalog;
