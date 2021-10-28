import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchCatalog(category) {
  const [catalogSets, setCatalogSets] = useState([]);
  const [isLoaded, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://run.mocky.io/v3/a20d246d-ba15-4f00-a52f-29a561872e30');

        const { data } = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
          }, 1000);
        });

        setCatalogSets(data.items[category]);
        setIsLoading(true);
      } catch (e) {
        console.error(`Ошибка при запросе ${e}`);
      }
    })();
  }, [category]);

  return { catalogSets, isLoaded };
}

export default useFetchCatalog;
