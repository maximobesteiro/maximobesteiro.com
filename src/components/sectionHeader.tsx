const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <header className="mx-auto lg:mx-0">
      <h2 className="text-3xl font-bold text-zinc-200 md:text-4xl">{title}</h2>
      <p className="mt-4 text-zinc-400">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
