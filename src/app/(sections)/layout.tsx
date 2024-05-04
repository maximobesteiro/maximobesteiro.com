'use client';

import PageHeader from '@/components/pageHeader';

const SectionLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PageHeader />
    <main className="container mx-auto min-h-screen space-y-10 px-6 pb-16 pt-20 md:space-y-14 md:pt-32 lg:px-8 2xl:max-w-7xl">
      {children}
    </main>
  </>
);

export default SectionLayout;
