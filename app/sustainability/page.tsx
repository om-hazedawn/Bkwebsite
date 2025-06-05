'use client';

import { Suspense } from 'react';
import SustainabilityContent from './SustainabilityContent';

export default function SustainabilityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SustainabilityContent />
    </Suspense>
  );
}