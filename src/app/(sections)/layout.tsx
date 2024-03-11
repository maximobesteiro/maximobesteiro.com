'use client'

import PageHeader from "@/components/pageHeader";

const SectionLayout = ({children}: {children: React.ReactNode}) => (
  <>
    <PageHeader />
    <main className="px-6 pt-20 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 mx-auto">
      {children}
    </main>
  </>
);

export default SectionLayout;
