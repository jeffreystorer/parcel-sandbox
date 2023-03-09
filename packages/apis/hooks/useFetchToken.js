import React, { useEffect, useState } from 'react';
import GolferApi from '/packages/apis/golfer-api';

export default function useFetchToken() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const GHIN_PASSWORD = process.env.REACT_APP_GHIN_PASSWORD;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await GolferApi.login(
          GHIN_PASSWORD,
          '585871'
        );
        setToken(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return [token, loading];
}
