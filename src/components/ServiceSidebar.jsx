import { serviceCategories } from "../data/pricingData";

export default function ServiceSidebar({ activeService, onServiceChange }) {
  return (
    <div className="w-[280px] shrink-0 bg-white/60 backdrop-blur-sm rounded-2xl border border-black/5 p-5 self-start sticky top-24">
      <a
        href="#"
        className="flex items-center gap-3 bg-[#fef9e7] border border-[#e8d88a] rounded-xl px-4 py-3 mb-5 hover:bg-[#fdf3cc] transition-colors group"
      >
        <span className="bg-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded">NEXT STEP</span>
        <span className="font-bold text-sm text-text-primary">Get Started</span>
        <svg className="w-5 h-5 ml-auto text-text-muted group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 20 20">
          <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      {serviceCategories.map((cat) => (
        <div key={cat.title} className="mb-4">
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wide mb-2 flex items-center gap-1.5">
            {cat.title}
            <svg className="w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <text x="5.5" y="12" fontSize="10" fill="currentColor">i</text>
            </svg>
          </h3>
          <div className="flex flex-col gap-0.5">
            {cat.items.map((item) => (
              <button
                key={item.slug}
                onClick={() => onServiceChange(item.slug)}
                className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                  activeService === item.slug
                    ? "bg-[#fef9e7] border border-[#e8d88a] text-blue-primary font-semibold"
                    : "text-text-secondary hover:bg-black/5 border border-transparent"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}