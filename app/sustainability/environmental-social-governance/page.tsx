'use client';

import { Suspense } from 'react';
import ESGContent from './ESGContent';

export default function ESGPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ESGContent />
    </Suspense>
  );
}