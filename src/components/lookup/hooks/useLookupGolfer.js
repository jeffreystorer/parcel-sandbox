import React, { useEffect, useState } from 'react';
import { useLookup } from '/packages/apis/hooks';
import { get, set } from '/packages/utils/localStorage';

export default function useLookupGolfer() {
  const [loading, setLoading] = useState(true);
  const [golfers, golfersLoading] = useLookup();

  useEffect(() => {
    if (!golfersLoading) {
      set('golfers', golfers);
      setLoading(false);
    }
  }, [golfersLoading]);

  return [loading];
}
