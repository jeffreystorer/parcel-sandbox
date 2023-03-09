import React from 'react';
import { Loading } from '/packages';
import { useFromRoster } from '/packages/hooks';

export default function FromRoster() {
  const [loading] = useFromRoster();

  if (loading) return <Loading />;

  document.location = '/';
  return null;
}
