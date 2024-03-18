'use client';

import PageHeader from '@/components/pageHeader';

const SectionLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PageHeader />
    <main className="mx-auto max-w-7xl space-y-10 px-6 pb-16 pt-20 md:space-y-14 md:pt-24 lg:px-8 lg:pt-32">
      {children}
    </main>
  </>
);

export default SectionLayout;
