'use client';

import { Suspense } from 'react';
import InvestorRelationsContent from './InvestorRelationsContent';

export default function InvestorRelationsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvestorRelationsContent />
    </Suspense>
  );
}