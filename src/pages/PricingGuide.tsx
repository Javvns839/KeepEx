import { DollarSign, TrendingDown, BarChart3 } from "lucide-react";

const PricingGuide = () => {
  const examples = [
    { model: "NVIDIA A100 80GB", original: "$15,000", depreciated: "$4,200", savings: "72%" },
    { model: "NVIDIA H100 PCIe", original: "$30,000", depreciated: "$12,500", savings: "58%" },
    { model: "AMD MI250X", original: "$12,000", depreciated: "$3,100", savings: "74%" },
    { model: "NVIDIA RTX 4090", original: "$1,599", depreciated: "$680", savings: "57%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="font-mono-data">Pricing Guide</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Understand how depreciated CAPEX translates to market pricing. Our data-driven approach ensures fair value for buyers and sellers.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-gradient rounded-lg border border-border p-6">
              <TrendingDown className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">Depreciation-Based Pricing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prices reflect the hardware's fully or partially depreciated book value, adjusted for market demand, condition, and remaining useful life.
              </p>
            </div>
            <div className="card-gradient rounded-lg border border-border p-6">
              <BarChart3 className="mb-4 h-8 w-8 text-accent" />
              <h3 className="font-display text-lg font-semibold text-foreground">Market Comparables</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every listing is benchmarked against recent transactions on KeepEx and secondary market data to ensure competitive pricing.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Sample Pricing</h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Model</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Original MSRP</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">KeepEx Price</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((row) => (
                    <tr key={row.model} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground">{row.model}</td>
                      <td className="px-4 py-3 text-right font-mono-data text-muted-foreground">{row.original}</td>
                      <td className="px-4 py-3 text-right font-mono-data text-foreground">{row.depreciated}</td>
                      <td className="px-4 py-3 text-right font-mono-data text-primary font-semibold">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingGuide;
