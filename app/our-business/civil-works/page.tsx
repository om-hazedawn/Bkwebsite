'use client';

import { Suspense } from 'react';
import CivilWorksContent from './CivilWorksContent';

export default function CivilWorksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CivilWorksContent />
    </Suspense>
  );
}