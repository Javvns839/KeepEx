import { Building2, User } from "lucide-react";

type Segment = "business" | "individual";

interface SegmentSwitcherProps {
  segment: Segment;
  onSegmentChange: (segment: Segment) => void;
}

const SegmentSwitcher = ({ segment, onSegmentChange }: SegmentSwitcherProps) => {
  return (
    <div className="inline-flex rounded-lg border border-border bg-secondary p-1">
      <button
        onClick={() => onSegmentChange("business")}
        className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all ${
          segment === "business"
            ? "bg-primary text-primary-foreground glow-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Building2 className="h-4 w-4" />
        Business
      </button>
      <button
        onClick={() => onSegmentChange("individual")}
        className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all ${
          segment === "individual"
            ? "bg-primary text-primary-foreground glow-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <User className="h-4 w-4" />
        Individual
      </button>
    </div>
  );
};

export default SegmentSwitcher;
