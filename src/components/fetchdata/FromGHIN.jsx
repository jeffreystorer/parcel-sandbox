import React from 'react';
import { Loading } from '/packages';
import { useFromGHIN } from '/packages/hooks';

export default function FromGHIN() {
  const [loading] = useFromGHIN();

  if (loading) return <Loading />;

  document.location = '/';
  return null;
}
