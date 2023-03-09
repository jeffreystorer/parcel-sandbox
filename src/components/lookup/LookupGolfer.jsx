import React from 'react';
import { Loading } from '/packages';
import { useLookupGolfer } from '@/components/lookup/hooks';

export default function LookupGolfer() {
  const [loading] = useLookupGolfer();

  if (loading) return <Loading />;

  document.location = '/ghininfo';

  return null;
}
