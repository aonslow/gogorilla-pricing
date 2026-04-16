function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-check-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChannelIcons({ channels }) {
  const iconMap = {
    email: (
      <svg key="email" className="w-7 h-7 text-text-muted" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    linkedin: (
      <svg key="linkedin" className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path d="M8 10v6M8 7v.01M11 16v-4a2 2 0 014 0v4M15 10v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    phone: (
      <svg key="phone" className="w-7 h-7 text-text-muted" fill="none" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-2 bg-white/50 rounded-xl border border-black/5 px-4 py-3">
      <span className="text-sm font-medium text-text-primary mr-2">{channels.label}</span>
      <div className="flex items-center gap-1.5 ml-auto">
        {channels.icons.map((icon) => iconMap[icon])}
      </div>
    </div>
  );
}

function TagBadge({ tag }) {
  const colors = {
    "BUILT-IN": "bg-blue-primary/10 text-blue-primary",
    "OPTIONAL": "bg-orange-100 text-orange-600",
    "ADD-ON": "bg-emerald-100 text-emerald-600",
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${colors[tag] || "bg-gray-100 text-gray-600"}`}>
      {tag}
    </span>
  );
}

export default function PricingCard({ plan }) {
  return (
    <div className="flex-1 bg-bg-card backdrop-blur-sm rounded-2xl border border-border-card p-6 flex flex-col hover:bg-bg-card-hover hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>
          {plan.badge && (
            <span className="bg-gold text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
              {plan.badge}
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-text-primary">&pound;{plan.price.toLocaleString()}</span>
          <span className="text-text-muted text-sm">/month</span>
        </div>
        <p className="text-xs text-text-muted mt-1">
          + &pound;{plan.setup.toLocaleString()} setup | + &pound;{plan.sqaPrice} per SQA
        </p>
      </div>

      {/* Who is it for */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-text-primary flex items-center gap-1 mb-1">
          Who is it for
          <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <text x="5.5" y="12" fontSize="10" fill="currentColor">i</text>
          </svg>
        </h4>
        <p className="text-xs text-text-secondary leading-relaxed">{plan.whoIsItFor}</p>
      </div>

      {/* Commitment */}
      <div className="mb-5">
        <p className="text-xs text-text-muted">
          <span className="font-semibold text-text-primary">Commitment:</span>
        </p>
        <p className="text-xs text-text-secondary">{plan.commitment}</p>
      </div>

      {/* Channels */}
      <ChannelIcons channels={plan.channels} />

      {/* Plan Highlights */}
      <div className="mt-5 flex-1">
        <h4 className="text-sm font-bold text-text-primary mb-3">Plan Highlights</h4>
        <ul className="space-y-2.5">
          {plan.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* GorillaMatrix Section */}
      <div className="mt-5 pt-4 border-t border-black/5">
        <h4 className="text-xs font-bold text-text-primary mb-3">
          GorillaMatrix&reg; Two-Sided Financial Incentives
        </h4>
        <div className="space-y-2">
          {plan.matrixFeatures.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <TagBadge tag={feat.tag} />
              <span className="text-xs text-text-secondary">{feat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding Availability */}
      <div className="mt-5 pt-4 border-t border-black/5">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-[10px] text-text-muted">Onboarding Availability:</p>
            <p className="text-sm font-bold text-emerald-600">Open</p>
            <p className="text-[10px] text-text-muted">Last update: Wednesday 8 April 2026</p>
          </div>
          <span className="text-[10px] font-bold border border-black/10 px-2 py-1 rounded text-text-muted uppercase tracking-wider">
            Accepting Clients
          </span>
        </div>
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-black/5 rounded-full mt-2 overflow-hidden">
          <div className="h-full bg-blue-primary/60 rounded-full" style={{ width: "35%" }} />
        </div>
      </div>

      {/* CTA */}
      <button className="mt-5 w-full bg-text-primary text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-black transition-colors">
        Get Started
      </button>
    </div>
  );
}