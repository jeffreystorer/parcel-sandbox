import React from 'react';
import { Loading } from '/packages';
import { SaturdayTable } from '@/components/saturday';
import { useFromGHIN } from '/packages/hooks';

export default function FromGHINSaturday() {
  const [loading] = useFromGHIN();

  if (loading) return <Loading />;
  return <SaturdayTable isLoggedIn={false} />;
}
