'use client';

import { Suspense } from 'react';
import AboutUsContent from './AboutUsContent';

export default function AboutUsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUsContent />
    </Suspense>
  );
}