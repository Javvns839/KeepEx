import { Cpu } from "lucide-react";

const MarketplaceHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border px-6 py-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container relative mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
          <Cpu className="h-4 w-4 text-primary" />
          <span className="font-mono-data">Depreciated CAPEX Hardware Exchange</span>
        </div>
        
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          <span className="gradient-text">GPU Market</span>
          <br />
          <span className="text-foreground">for Smart Buyers</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Enterprise-grade GPUs at post-depreciation prices. Fully written-off hardware 
          from data centers and enterprises — verified, tested, and priced to move.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { label: "Active Listings", value: "2,847" },
            { label: "Avg. Savings", value: "68%" },
            { label: "Verified Sellers", value: "412" },
            { label: "Total Volume", value: "$14.2M" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-data text-2xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceHero;
