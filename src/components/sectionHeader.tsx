const SectionHeader: React.FC<{ title: string, subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-zinc-200">{title}</h2>
      <div>{subtitle}</div>
    </>
  )
}

export default SectionHeader;
