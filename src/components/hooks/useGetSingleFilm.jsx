import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetSingleFilm = () => {
  const { id } = useParams();
  const URLDetails = `https://api.themoviedb.org/3/movie/${id}`;

  const [arrayFilmDetails, setArrayFilmDetails] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getByFilmDetails() {
      setIsLoading(true);
      try {
        const moviesByFilmDetails = await axios.get(URLDetails, {
          params: {
            api_key: '0d6b7f02361f71d6620832d1646be22b',
          },
        });
        setArrayFilmDetails(moviesByFilmDetails.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getByFilmDetails();
  }, [URLDetails]);

  return { arrayFilmDetails, error, isLoading };
};