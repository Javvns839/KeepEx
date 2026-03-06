import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const openings = [
  { title: "Senior Backend Engineer", location: "Remote", team: "Engineering" },
  { title: "Hardware Verification Specialist", location: "Austin, TX", team: "Operations" },
  { title: "Growth Marketing Manager", location: "Remote", team: "Marketing" },
  { title: "Product Designer", location: "San Francisco, CA", team: "Design" },
  { title: "Enterprise Account Executive", location: "New York, NY", team: "Sales" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="font-mono-data">Careers</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Join <span className="gradient-text">KeepEx</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Help build the future of hardware marketplaces. We're looking for ambitious people who want to make compute more accessible.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">Open Positions</h2>
          <div className="space-y-3">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group card-gradient flex items-center justify-between rounded-lg border border-border p-5 transition-all hover:border-primary/30 hover:glow-primary cursor-pointer"
              >
                <div>
                  <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{job.team}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
