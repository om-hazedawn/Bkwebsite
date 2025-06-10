'use client';

import { Suspense } from 'react';
import BuildingsContent from './BuildingsContent';

export default function BuildingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuildingsContent />
    </Suspense>
  );
}