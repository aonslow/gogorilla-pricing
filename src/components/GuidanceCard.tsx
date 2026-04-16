interface GuidanceCardProps {
  type: 'do' | 'dont';
  children: React.ReactNode;
}

export function GuidanceCard({ type, children }: GuidanceCardProps) {
  return (
    <div className={`guidance-card guidance-card--${type}`}>
      <div className="guidance-card__label">
        {type === 'do' ? 'Do' : "Don’t"}
      </div>
      <div className="guidance-card__text">{children}</div>
    </div>
  );
}

interface GuidanceRowProps {
  doText: string;
  dontText: string;
}

export function GuidanceRow({ doText, dontText }: GuidanceRowProps) {
  return (
    <div className="guidance-grid">
      <GuidanceCard type="do">{doText}</GuidanceCard>
      <GuidanceCard type="dont">{dontText}</GuidanceCard>
    </div>
  );
}