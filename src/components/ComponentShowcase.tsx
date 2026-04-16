import './ComponentShowcase.css';

interface ComponentShowcaseProps {
  title: string;
  description: string;
  anatomy: string[];
  usage: string[];
  children: React.ReactNode;
}

export function ComponentShowcase({
  title,
  description,
  anatomy,
  usage,
  children,
}: ComponentShowcaseProps) {
  return (
    <div className="component-showcase">
      <div className="component-showcase__header">
        <h3 className="component-showcase__title">{title}</h3>
        <p className="component-showcase__description">{description}</p>
      </div>

      <div className="component-showcase__preview">
        {children}
      </div>

      <div className="component-showcase__anatomy-section">
        <h4 className="component-showcase__section-title">Anatomy</h4>
        <ul className="component-showcase__list">
          {anatomy.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="component-showcase__usage-section">
        <h4 className="component-showcase__section-title">Usage</h4>
        <ul className="component-showcase__list">
          {usage.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}