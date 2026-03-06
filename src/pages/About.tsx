import { Info, TrendingUp, Target, Shield, DollarSign, Building2, BarChart3, Zap, Users, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const tamData = [
  { year: "2024", value: 8.2 },
  { year: "2025", value: 12.6 },
  { year: "2026", value: 18.4 },
  { year: "2027", value: 26.1 },
  { year: "2028", value: 35.8 },
];

const marketShareData = [
  { name: "Broker Networks", value: 45 },
  { name: "Direct / Off-market", value: 35 },
  { name: "Marketplaces", value: 15 },
  { name: "KeepEx (Target)", value: 5 },
];

const COLORS = ["hsl(220, 14%, 30%)", "hsl(220, 14%, 24%)", "hsl(220, 14%, 18%)", "hsl(145, 72%, 46%)"];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border px-6 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <Info className="h-4 w-4 text-primary" />
            <span className="font-mono-data">Investment Overview</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            The <span className="gradient-text">Secondary Market</span> for Enterprise GPUs
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Fortune 500 companies depreciate $35B+ in GPU infrastructure annually. KeepEx is the first verified marketplace capturing this value at the point of asset disposition.
          </p>
        </div>
      </section>

      {/* Problem / Opportunity */}
      <section className="border-b border-border px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">The Opportunity</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-gradient rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <Building2 className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Seller Pain</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Enterprises hold fully depreciated GPUs with $0 book value but significant market value</li>
                <li>• Current disposition channels (brokers, scrap) capture 15–25% of residual value</li>
                <li>• No standardized grading or price discovery for used enterprise GPUs</li>
              </ul>
            </div>
            <div className="card-gradient rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Buyer Pain</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Startups, labs, and mid-market companies priced out of new GPU procurement</li>
                <li>• Used hardware carries quality and provenance risk</li>
                <li>• No marketplace with verified benchmarks, warranty, or financing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TAM Section */}
      <section className="border-b border-border px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Total Addressable Market</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Depreciated GPU inventory across Fortune 500 and hyperscalers represents a rapidly growing secondary market. As AI infrastructure refresh cycles shorten from 5 years to 2–3 years, the volume of post-CAPEX hardware entering secondary markets is accelerating.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "TAM (2026)", value: "$18.4B", sub: "Depreciated GPU inventory" },
                  { label: "SAM", value: "$5.5B", sub: "Addressable via marketplace" },
                  { label: "SOM (Y3)", value: "$275M", sub: "5% capture rate" },
                ].map((item) => (
                  <div key={item.label} className="card-gradient rounded-lg border border-border p-4">
                    <div className="font-mono-data text-xl font-bold text-primary">{item.value}</div>
                    <div className="text-xs font-semibold text-foreground mt-1">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-gradient rounded-lg border border-border p-6">
              <h3 className="font-mono-data text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Depreciated GPU Market Size ($B)
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={tamData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
                  <XAxis dataKey="year" tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 12 }} axisLine={false} />
                  <YAxis tick={{ fill: "hsl(215, 12%, 50%)", fontSize: 12 }} axisLine={false} tickFormatter={(v) => `$${v}B`} />
                  <Tooltip
                    contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, color: "hsl(210, 20%, 92%)" }}
                    formatter={(value: number) => [`$${value}B`, "Market Size"]}
                  />
                  <Bar dataKey="value" fill="hsl(145, 72%, 46%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Take Rate & Unit Economics */}
      <section className="border-b border-border px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Unit Economics & Take Rate</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Blended Take Rate", value: "12%", detail: "8% buyer + 4% seller" },
              { label: "Avg. Transaction", value: "$38K", detail: "Per GPU lot" },
              { label: "Gross Margin", value: "78%", detail: "Marketplace model" },
              { label: "CAC Payback", value: "< 2 mo", detail: "High-intent B2B buyers" },
            ].map((item) => (
              <div key={item.label} className="card-gradient rounded-lg border border-border p-5 text-center">
                <div className="font-mono-data text-2xl font-bold text-primary">{item.value}</div>
                <div className="text-sm font-semibold text-foreground mt-1">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
          <div className="card-gradient rounded-lg border border-border p-6 mt-6">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Revenue Projections</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 text-muted-foreground font-mono-data text-xs uppercase tracking-wider">Metric</th>
                    <th className="pb-3 text-muted-foreground font-mono-data text-xs uppercase tracking-wider text-right">Year 1</th>
                    <th className="pb-3 text-muted-foreground font-mono-data text-xs uppercase tracking-wider text-right">Year 2</th>
                    <th className="pb-3 text-muted-foreground font-mono-data text-xs uppercase tracking-wider text-right">Year 3</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  {[
                    { metric: "GMV", y1: "$14M", y2: "$68M", y3: "$275M" },
                    { metric: "Net Revenue (12%)", y1: "$1.7M", y2: "$8.2M", y3: "$33M" },
                    { metric: "Transactions", y1: "368", y2: "1,789", y3: "7,237" },
                    { metric: "Verified Sellers", y1: "120", y2: "480", y3: "1,400" },
                  ].map((row) => (
                    <tr key={row.metric} className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">{row.metric}</td>
                      <td className="py-3 text-right font-mono-data">{row.y1}</td>
                      <td className="py-3 text-right font-mono-data">{row.y2}</td>
                      <td className="py-3 text-right font-mono-data text-primary font-semibold">{row.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="border-b border-border px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Competitive Positioning</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="card-gradient rounded-lg border border-border p-6">
                <h3 className="font-mono-data text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Current Market Channels
                </h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={marketShareData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name} ${value}%`} labelLine={false}>
                      {marketShareData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="hsl(220, 18%, 10%)" strokeWidth={2} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, color: "hsl(210, 20%, 92%)" }}
                      formatter={(value: number) => [`${value}%`, "Market Share"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: "Broker Networks", weakness: "Opaque pricing, no verification, high fees (20–30%)", icon: Building2 },
                { name: "eBay / Generic Marketplaces", weakness: "No enterprise trust, no benchmarking, consumer-grade UX", icon: Users },
                { name: "OEM Buyback Programs", weakness: "Low payouts (10–15%), limited to own brands", icon: Shield },
              ].map((comp) => (
                <div key={comp.name} className="card-gradient rounded-lg border border-border p-4 flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <comp.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{comp.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{comp.weakness}</p>
                  </div>
                </div>
              ))}
              <div className="card-gradient rounded-lg border border-primary/30 p-4 flex gap-4 glow-primary">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary">KeepEx Advantage</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Verified benchmarks, transparent pricing, 12% take rate, built-in financing, enterprise-grade trust layer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Status */}
      <section className="px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">MVP & Traction</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-gradient rounded-lg border border-border p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Live MVP Features</h3>
              <div className="space-y-3">
                {[
                  "GPU marketplace with real-time listings & filters",
                  "Seller onboarding with photo AI identification",
                  "Hardware verification & stress-test grading",
                  "Market-value pricing engine (vs. MSRP)",
                  "Corporate financing (Net 30/60/90, lease-to-own)",
                  "Contact sales pipeline for enterprise deals",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-gradient rounded-lg border border-border p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Early Traction</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "$14.2M", label: "GMV to date" },
                  { value: "412", label: "Verified sellers" },
                  { value: "2,847", label: "Active listings" },
                  { value: "68%", label: "Avg. buyer savings" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary/50">
                    <div className="font-mono-data text-xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
