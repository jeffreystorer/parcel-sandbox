import React from 'react';
import { ChooseSource, Loading } from '/packages';
import { useFetchData } from '/packages/hooks';

export default function FetchData() {
  const [loading] = useFetchData();

  if (loading) return <Loading />;

  return <ChooseSource />;
}
