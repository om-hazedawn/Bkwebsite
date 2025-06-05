'use client';

import { Suspense } from 'react';
import CorporateGovernanceContent from './CorporateGovernanceContent';

export default function CorporateGovernancePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CorporateGovernanceContent />
    </Suspense>
  );
}