export default function Navbar() {
  const navItems = ["Growth", "Creative", "Talent", "White Label", "Solutions", "Company", "FinTech", "Capital", "Pricing"];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="https://gogorilla.com" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#002ABF"/>
            <text x="8" y="28" fill="white" fontWeight="bold" fontSize="22" fontFamily="sans-serif">G</text>
          </svg>
          <span className="text-xl font-bold text-text-primary tracking-tight">
            GoGorilla<span className="text-text-muted text-sm">.com</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                item === "Pricing"
                  ? "text-blue-primary font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-black/5"
              }`}
            >
              {item}
              {!["Pricing"].includes(item) && (
                <svg className="inline-block w-3 h-3 ml-1 opacity-50" fill="none" viewBox="0 0 12 12">
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-blue-primary hover:underline">Log In</a>
          <a href="#" className="bg-blue-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors">
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}