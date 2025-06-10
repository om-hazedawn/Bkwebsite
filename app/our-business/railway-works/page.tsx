'use client';

import { Suspense } from 'react';
import RailwayWorksContent from './RailwayWorksContent';

export default function RailwayWorksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RailwayWorksContent />
    </Suspense>
  );
}