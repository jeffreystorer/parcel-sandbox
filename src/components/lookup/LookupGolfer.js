import React from 'react';
import { useLookupGolfer } from '/src/components/lookup/hooks';

export default function LookupGolfer() {
  const [loading] = useLookupGolfer();

  if (loading) return <p>Loading . . . </p>;

  document.location = '/ghininfo';

  return null;
}
