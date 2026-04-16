import './AccessibilitySection.css';

export function AccessibilitySection() {
  return (
    <section className="doc-section" id="accessibility">
      <div className="section-eyebrow">Accessibility</div>
      <h2 className="section-title">Accessibility & Inclusive Design</h2>
      <p className="section-description">
        All components follow WCAG 2.1 AA standards to ensure the GoGorilla website is
        accessible to users of all abilities. This section documents accessibility features,
        keyboard navigation, and screen reader support.
      </p>
    </section>
  );
}