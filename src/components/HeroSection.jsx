export default function HeroSection() {
  return (
    <section className="relative text-center py-16 px-6 overflow-hidden">
      {/* Glass container */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-block text-blue-primary text-sm font-bold uppercase tracking-widest mb-4">
          Pricing
        </span>
        <h1 className="text-3xl md:text-[42px] font-bold leading-tight text-text-primary">
          Our model is built on transparent pricing, so you can{" "}
          <span className="underline decoration-blue-primary decoration-2 underline-offset-4">
            plug into our growth engine, faster.
          </span>
        </h1>
      </div>
    </section>
  );
}