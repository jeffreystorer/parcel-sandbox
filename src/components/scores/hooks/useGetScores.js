import React, { useEffect, useState } from 'react';
import { useScores } from '/packages/apis/hooks';
import { get, set } from '/packages/utils/localStorage';

export default function useGetScores() {
  const [loading, setLoading] = useState(true);
  const [scores, scoresLoading] = useScores();

  useEffect(() => {
    if (!scoresLoading) {
      set('scores', scores);
      setLoading(false);
    }
  }, [scoresLoading]);

  return [loading];
}
