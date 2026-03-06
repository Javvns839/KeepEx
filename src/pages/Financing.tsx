import { Landmark, Clock, Percent, FileCheck } from "lucide-react";

const Financing = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <Landmark className="h-4 w-4 text-primary" />
            <span className="font-mono-data">Financing</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Flexible <span className="gradient-text">Financing</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Scale your compute infrastructure without large upfront costs. Financing options for businesses and individuals.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
          {[
            { icon: Clock, title: "Net 30/60/90", description: "Deferred payment terms for verified business accounts with established credit." },
            { icon: Percent, title: "0% for 12 Months", description: "Interest-free installment plans on qualifying orders over $5,000." },
            { icon: FileCheck, title: "Lease-to-Own", description: "Monthly lease payments with a buyout option. Ideal for scaling teams." },
          ].map((plan) => (
            <div key={plan.title} className="card-gradient rounded-lg border border-border p-6">
              <plan.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">{plan.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Financing;
