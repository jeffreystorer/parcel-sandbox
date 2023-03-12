import React, { useEffect, useState } from 'react';
import { useFetchToken } from '/packages/apis/hooks';
import { get, set } from '/packages/utils/localStorage';

export default function useFetchData() {
  const [loading, setLoading] = useState(true);
  const [token, tokenLoading] = useFetchToken();

  useEffect(() => {
    if (!tokenLoading) {
      set('token', token.golfer_user.golfer_user_token);
      setLoading(false);
    }
  }, [tokenLoading]);

  return [loading];
}
