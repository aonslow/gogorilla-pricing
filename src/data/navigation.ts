export interface NavSection {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

export const navigationSections: NavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
  },
  {
    id: 'foundations',
    label: 'Foundations',
    children: [
      { id: 'brand-principles', label: 'Brand Principles' },
      { id: 'colour', label: 'Colour' },
      { id: 'typography', label: 'Typography' },
      { id: 'spacing-layout', label: 'Spacing & Layout' },
      { id: 'surfaces', label: 'Surfaces & Depth' },
      { id: '3d-visual-language', label: '3D Visual Language' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    children: [
      { id: 'comp-buttons', label: 'Buttons' },
      { id: 'comp-links', label: 'Action Links' },
      { id: 'comp-tabs', label: 'Segmented Controls' },
      { id: 'comp-cards', label: 'Cards' },
      { id: 'comp-accordion', label: 'Accordion' },
      { id: 'comp-stepper', label: 'Stepper' },
      { id: 'comp-circular-progress', label: 'Circular Progress Bar' },
      { id: 'comp-progress-bar', label: 'Progress Bar' },
      { id: 'comp-stats', label: 'Stat Blocks' },
      { id: 'comp-cta-bar', label: 'CTA Bar' },
      { id: 'comp-navigation', label: 'Navigation' },
      { id: 'comp-badges', label: 'Badges & Labels' },
      { id: 'comp-input', label: 'Input' },
      { id: 'comp-dividers', label: 'Dividers' },
      { id: 'comp-loading', label: 'Loading Indicators' },
      { id: 'comp-pagination', label: 'Pagination' },
      { id: 'comp-checkbox', label: 'Checkbox' },
      { id: 'comp-rating-scale', label: 'Rating Scale' },
      { id: 'comp-radio', label: 'Radio Button' },
      { id: 'comp-dropdown', label: 'Dropdown' },
      { id: 'comp-tooltip', label: 'Tooltip' },
      { id: 'comp-modal', label: 'Modal / Overlay' },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    children: [
      { id: 'pattern-hero', label: 'Hero' },
      { id: 'pattern-split-grid', label: 'Intro + Card Grid' },
      { id: 'pattern-split-3d', label: 'Text + 3D Split' },
      { id: 'pattern-process', label: 'Guided Process' },
      { id: 'pattern-faq', label: 'FAQ' },
      { id: 'pattern-metrics', label: 'Metrics & Proof' },
    ],
  },
  {
    id: 'assets',
    label: 'Assets & Visual Language',
  },
  {
    id: 'icon-library',
    label: 'Icon Library',
  },
  {
    id: 'content',
    label: 'Content & Messaging',
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
  },
  {
    id: 'resources',
    label: 'Resources & Tokens',
  },
];