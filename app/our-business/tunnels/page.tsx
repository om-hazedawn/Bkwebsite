'use client';

import { Suspense } from 'react';
import TunnelsContent from './TunnelsContent';

export default function TunnelsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TunnelsContent />
    </Suspense>
  );
}