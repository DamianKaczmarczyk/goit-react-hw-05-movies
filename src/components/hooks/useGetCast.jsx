import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useGetCast = () => {
  const { id } = useParams();
  // const URLCast = `https://api.themoviedb.org/3/movie/${id}/credits`;

  const [arrayCast, setArrayCast] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getByCast() {
      setIsLoading(true);
      try {
        const moviesByFilm = await axios.get(URLCast, {
          params: {
            api_key: '0d6b7f02361f71d6620832d1646be22b',
          },
        });

        setArrayCast([...moviesByFilm.data.cast]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getByCast();
  }, []);
  return { arrayCast, error, isLoading };
};