import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSidebar from "./components/ServiceSidebar";
import BusinessTypeToggle from "./components/BusinessTypeToggle";
import CommitmentSelector from "./components/CommitmentSelector";
import PricingCard from "./components/PricingCard";
import { getPlans } from "./data/pricingData";
import "./App.css";

function App() {
  const [activeService, setActiveService] = useState("sales-demand-generation");
  const [businessType, setBusinessType] = useState("startups");
  const [commitment, setCommitment] = useState(12);

  const plans = getPlans(activeService, businessType, commitment);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="flex gap-6 items-start">
          {/* Left sidebar */}
          <ServiceSidebar activeService={activeService} onServiceChange={setActiveService} />

          {/* Right content */}
          <div className="flex-1 min-w-0">
            {/* Controls */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <BusinessTypeToggle activeType={businessType} onTypeChange={setBusinessType} />
              <CommitmentSelector activeCommitment={commitment} onCommitmentChange={setCommitment} />
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/40 backdrop-blur-sm py-8 text-center">
        <p className="text-xs text-text-muted">
          Copyright 2026 &copy; GoGorilla Media and Technologies Group Ltd | Reg. UK Co. 15885866
        </p>
      </footer>
    </div>
  );
}

export default App;