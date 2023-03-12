import React from 'react';
import { LookupGolfer } from '/src/components/lookup';
import { useFetchData } from '/src/components/lookup/hooks';

export default function FetchData() {
  const [loading] = useFetchData();

  if (loading) return <p>Loading . . . </p>;

  return <LookupGolfer />;
}
