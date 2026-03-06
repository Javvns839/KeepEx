import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  selectedCondition: string;
  onConditionChange: (condition: string) => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
  selectedUnits: string;
  onUnitsChange: (units: string) => void;
  selectedPrice: string;
  onPriceChange: (price: string) => void;
}

const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  selectedCondition,
  onConditionChange,
  selectedYear,
  onYearChange,
  selectedUnits,
  onUnitsChange,
  selectedPrice,
  onPriceChange,
}: FilterBarProps) => {
  const activeCount = [selectedBrand, selectedCondition, selectedYear, selectedUnits, selectedPrice].filter(v => v !== "all").length;

  const clearAll = () => {
    onBrandChange("all");
    onConditionChange("all");
    onYearChange("all");
    onUnitsChange("all");
    onPriceChange("all");
  };

  const labelClass = "text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5";
  const selectClass = "w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search GPUs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <button className="relative flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {activeCount}
              </span>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-72 border-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Filters</span>
            {activeCount > 0 && (
              <button onClick={clearAll} className="flex items-center gap-1 text-xs text-primary hover:underline">
                <X className="h-3 w-3" />
                Clear all
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className={labelClass}>Brand</label>
              <select value={selectedBrand} onChange={(e) => onBrandChange(e.target.value)} className={selectClass}>
                <option value="all">All Brands</option>
                <option value="NVIDIA">NVIDIA</option>
                <option value="AMD">AMD</option>
                <option value="Intel">Intel</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Condition</label>
              <select value={selectedCondition} onChange={(e) => onConditionChange(e.target.value)} className={selectClass}>
                <option value="all">All Conditions</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Age</label>
              <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)} className={selectClass}>
                <option value="all">Any Age</option>
                <option value="1">Under 1 yr</option>
                <option value="2">1–2 yrs</option>
                <option value="3">2–3 yrs</option>
                <option value="4">3+ yrs</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Quantity</label>
              <select value={selectedUnits} onChange={(e) => onUnitsChange(e.target.value)} className={selectClass}>
                <option value="all">Any Qty</option>
                <option value="1">Single unit</option>
                <option value="10">2–10 units</option>
                <option value="50">11–50 units</option>
                <option value="51">50+ units</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Price</label>
              <select value={selectedPrice} onChange={(e) => onPriceChange(e.target.value)} className={selectClass}>
                <option value="all">Any Price</option>
                <option value="500">Under $500</option>
                <option value="2000">$500–$2K</option>
                <option value="5000">$2K–$5K</option>
                <option value="10000">$5K–$10K</option>
                <option value="10001">$10K+</option>
              </select>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterBar;
