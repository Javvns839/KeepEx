import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  selectedCondition: string;
  onConditionChange: (condition: string) => void;
}

const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  selectedCondition,
  onConditionChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1 min-w-[240px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search GPUs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
        
        <select
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="all">All Brands</option>
          <option value="NVIDIA">NVIDIA</option>
          <option value="AMD">AMD</option>
          <option value="Intel">Intel</option>
        </select>

        <select
          value={selectedCondition}
          onChange={(e) => onConditionChange(e.target.value)}
          className="rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="all">All Conditions</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
