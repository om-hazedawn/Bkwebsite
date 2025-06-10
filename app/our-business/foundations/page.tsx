'use client';

import { Suspense } from 'react';
import FoundationsContent from './FoundationsContent';

export default function FoundationsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FoundationsContent />
    </Suspense>
  );
}