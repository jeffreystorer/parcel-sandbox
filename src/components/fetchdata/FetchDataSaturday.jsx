import React from 'react';
import { FromGHINSaturday, Loading } from '/packages';
import { useFetchDataSaturday } from '/packages/hooks';

export default function FetchDataSaturday() {
  const [loading] = useFetchDataSaturday();

  if (loading) return <Loading />;

  return <FromGHINSaturday />;
}
