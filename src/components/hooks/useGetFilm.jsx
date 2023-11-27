import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetFilm = () => {
  const [arrayFilm, setArrayFilm] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getByFilm() {
      setIsLoading(true);
      try {
        const moviesByFilm = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day',
          {
            params: {
                api_key: '0d6b7f02361f71d6620832d1646be22b',
            },
          }
        );
        setArrayFilm([...moviesByFilm.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getByFilm();
  }, []);
  return { arrayFilm, error, isLoading };
};