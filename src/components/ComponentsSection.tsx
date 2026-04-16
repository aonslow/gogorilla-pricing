import { useState } from 'react';
import { ComponentShowcase } from './ComponentShowcase';
import { GuidanceRow } from './GuidanceCard';
import './ComponentsSection.css';

export function ComponentsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activePeriod, setActivePeriod] = useState(2);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [checks, setChecks] = useState([true, false, true]);
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [boxChecks, setBoxChecks] = useState([true, false, false]);
  const [rating1, setRating1] = useState<number | null>(8);
  const [rating2, setRating2] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [multiOpen, setMultiOpen] = useState(false);
  const [multiValues, setMultiValues] = useState<string[]>(['analytics']);

  const dropdownOptions = ['Marketing', 'Sales', 'Analytics', 'Engineering', 'Design'];

  const toggleMulti = (val: string) => {
    setMultiValues((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  return (
    <section className="doc-section" id="components">
      <div className="section-eyebrow">Components</div>
      <h2 className="section-title">Component Library</h2>
      <p className="section-description">
        Documented below are the core reusable UI components observed across the GoGorilla
        website. Each includes a rendered preview, anatomy breakdown, and usage guidance
        reflecting the website's established patterns.
      </p>

      {/* ── Buttons ── */}
      <div id="comp-buttons">
        <h3 className="section-subtitle">Buttons</h3>

        <ComponentShowcase
          title="Primary Button"
          description="The primary call-to-action button used for conversion-critical actions like 'Get Started', 'Book a Call', and form submissions. Always rendered in brand blue with white text."
          anatomy={[
            'Container: brand blue (#002ABF) fill with 12 px rounded radius',
            'Label: white text, semibold weight, centered',
            'Optional trailing arrow or icon',
            'Multi-layer inset and outer box-shadow for tactile depth',
          ]}
          usage={[
            'One primary CTA per viewport section is the established pattern',
            'Used for the highest-priority action on the page',
            'Never stack multiple primary buttons adjacent to each other',
            'Pair with secondary links, not secondary buttons',
          ]}
        >
          <div className="button-preview-row">
            <button className="gg-btn gg-btn--primary">Get Started</button>
            <button className="gg-btn gg-btn--primary">
              Get Started <span className="gg-btn__arrow">&rsaquo;</span>
            </button>
            <button className="gg-btn gg-btn--primary gg-btn--hover">Hover State</button>
            <button className="gg-btn gg-btn--primary gg-btn--pressed">Pressed</button>
            <button className="gg-btn gg-btn--primary" disabled>Disabled</button>
          </div>
        </ComponentShowcase>
      </div>
    </section>
  );
}