import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useGetReviews = () => {
  const { id } = useParams();
  const URLReviews = `https://api.themoviedb.org/3/movie/${id}/reviews`;

  const [arrayReviews, setArrayReviews] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getByReviews() {
      setIsLoading(true);
      try {
        const moviesByFilm = await axios.get(URLReviews, {
          params: {
            api_key: '0d6b7f02361f71d6620832d1646be22b',
          },
        });
        setArrayReviews([...moviesByFilm.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getByReviews();
  }, []);
  return { arrayReviews, error, isLoading };
};