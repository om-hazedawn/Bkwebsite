'use client';

import { Suspense } from 'react';
import SteelWorksContent from './SteelWorksContent';

export default function SteelWorksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SteelWorksContent />
    </Suspense>
  );
}