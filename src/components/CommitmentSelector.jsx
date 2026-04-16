import { commitmentOptions } from "../data/pricingData";

export default function CommitmentSelector({ activeCommitment, onCommitmentChange }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-text-muted">Minimum commitment:</span>
      <div className="flex items-center gap-1">
        <div className="inline-flex bg-white/70 backdrop-blur-sm rounded-full border border-black/10 p-0.5">
          {commitmentOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onCommitmentChange(opt.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCommitment === opt.value
                  ? "bg-text-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {activeCommitment === 12 && (
          <div className="flex items-center gap-1 ml-2">
            <span className="text-gold text-lg">&#10004;</span>
            <span className="bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
              Save up to 45%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}