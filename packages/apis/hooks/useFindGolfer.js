import React, { useEffect, useState } from 'react';
import { get } from '/packages/utils/localStorage';
import { GolferApi } from '/packages/apis';

export default function useFindGolfer() {
  const [loading, setLoading] = useState(true);
  const [golfer, setGolfer] = useState('');
  const ghinNumber = get('ghinNumber');
  const token = get('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await GolferApi.findGolfer(
          ghinNumber,
          token
        );
        setGolfer(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return [golfer, loading];
}
