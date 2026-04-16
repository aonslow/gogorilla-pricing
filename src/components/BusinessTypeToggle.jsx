import { businessTypes } from "../data/pricingData";

export default function BusinessTypeToggle({ activeType, onTypeChange }) {
  return (
    <div className="inline-flex bg-white/70 backdrop-blur-sm rounded-full border border-black/10 p-1">
      {businessTypes.map((bt) => (
        <button
          key={bt.value}
          onClick={() => onTypeChange(bt.value)}
          className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeType === bt.value
              ? "bg-blue-primary text-white shadow-md"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {bt.label}
        </button>
      ))}
    </div>
  );
}