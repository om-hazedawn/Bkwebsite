'use client';

import { Suspense } from 'react';
import MarineWorksContent from './MarineWorksContent';

export default function MarineWorksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarineWorksContent />
    </Suspense>
  );
}