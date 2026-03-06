import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import MarketplaceHero from "@/components/MarketplaceHero";
import SegmentSwitcher from "@/components/SegmentSwitcher";
import FilterBar from "@/components/FilterBar";
import GPUCard from "@/components/GPUCard";
import { gpuListings } from "@/data/gpuListings";

const Index = () => {
  const [segment, setSegment] = useState<"business" | "individual">("business");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");

  const filteredListings = useMemo(() => {
    return gpuListings.filter((gpu) => {
      if (gpu.sellerType !== segment) return false;
      if (searchQuery && !gpu.name.toLowerCase().includes(searchQuery.toLowerCase()) && !gpu.brand.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (selectedBrand !== "all" && gpu.brand !== selectedBrand) return false;
      if (selectedCondition !== "all" && gpu.condition !== selectedCondition) return false;
      return true;
    });
  }, [segment, searchQuery, selectedBrand, selectedCondition]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MarketplaceHero />

      <main className="container mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <SegmentSwitcher segment={segment} onSegmentChange={setSegment} />
          <p className="font-mono-data text-sm text-muted-foreground">
            {filteredListings.length} listing{filteredListings.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="mt-6">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedBrand={selectedBrand}
            onBrandChange={setSelectedBrand}
            selectedCondition={selectedCondition}
            onConditionChange={setSelectedCondition}
          />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((gpu) => (
            <GPUCard key={gpu.id} gpu={gpu} />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground">No GPUs match your filters.</p>
            <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
