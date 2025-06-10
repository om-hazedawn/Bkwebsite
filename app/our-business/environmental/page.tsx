'use client';

import { Suspense } from 'react';
import EnvironmentalContent from './EnvironmentalContent';

export default function EnvironmentalPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnvironmentalContent />
    </Suspense>
  );
}