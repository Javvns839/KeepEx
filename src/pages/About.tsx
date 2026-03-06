import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <Info className="h-4 w-4 text-primary" />
            <span className="font-mono-data">About KeepEx</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            The Marketplace for <span className="gradient-text">Post-CAPEX</span> Hardware
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            KeepEx connects enterprises offloading fully depreciated GPU infrastructure with buyers seeking enterprise-grade compute at a fraction of the original cost.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="card-gradient rounded-lg border border-border p-6">
            <h2 className="font-display text-xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Billions of dollars in GPU hardware are written off every year as enterprises refresh their data center fleets. KeepEx captures that value — giving sellers liquidity on depreciated assets and giving buyers access to verified, tested hardware at post-depreciation prices.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: "$14.2M", label: "Total Volume" },
              { stat: "412", label: "Verified Sellers" },
              { stat: "68%", label: "Avg. Savings" },
            ].map((item) => (
              <div key={item.label} className="card-gradient rounded-lg border border-border p-6 text-center">
                <div className="font-mono-data text-3xl font-bold text-primary">{item.stat}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
