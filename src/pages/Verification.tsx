import { ShieldCheck, CheckCircle, FileSearch, Cpu } from "lucide-react";

const Verification = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="font-mono-data">Hardware Verification</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Every GPU, <span className="gradient-text">Verified</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Our multi-step verification process ensures every listing on KeepEx meets enterprise-grade quality standards.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileSearch,
                title: "Documentation Review",
                description: "Original purchase records, depreciation schedules, and maintenance logs verified against seller claims.",
              },
              {
                icon: Cpu,
                title: "Hardware Stress Test",
                description: "72-hour burn-in test covering compute, memory, and thermal performance benchmarks.",
              },
              {
                icon: CheckCircle,
                title: "Condition Grading",
                description: "Transparent Excellent / Good / Fair grading based on standardized criteria and test results.",
              },
            ].map((step) => (
              <div key={step.title} className="card-gradient rounded-lg border border-border p-6">
                <step.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verification;
