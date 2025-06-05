'use client';

import { Suspense } from 'react';
import WhatsNewContent from './WhatsNewContent';

export default function WhatsNewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WhatsNewContent />
    </Suspense>
  );
}