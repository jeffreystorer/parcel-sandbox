import React from 'react';
import { get } from '/packages/utils/localStorage';
import useFetchToken from '/packages/apis/hooks/useFetchToken';

export default function App() {
  const [token, loading] = useFetchToken();

  if (loading) return <p>Loading . . . </p>;
  navigator.clipboard.writeText(token.golfer_user.golfer_user_token);

  return <h1>{token.golfer_user.golfer_user_token}</h1>;
}
