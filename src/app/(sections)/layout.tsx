'use client';

import PageHeader from '@/components/pageHeader';

const SectionLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PageHeader />
    <main className="px-6 pb-16 pt-20 space-y-10 max-w-7xl lg:px-8 md:space-y-14 md:pt-24 lg:pt-32 mx-auto">
      {children}
    </main>
  </>
);

export default SectionLayout;
