import { Badge } from "@/components/ui/badge";
import { TrendingDown, Zap, HardDrive, Thermometer } from "lucide-react";

export interface GPUListing {
  id: string;
  name: string;
  brand: string;
  vram: string;
  originalPrice: number;
  currentPrice: number;
  depreciationPct: number;
  condition: "Excellent" | "Good" | "Fair";
  seller: string;
  sellerType: "business" | "individual";
  tdp: string;
  age: string;
  quantity: number;
}

const GPUCard = ({ gpu }: { gpu: GPUListing }) => {
  const savings = gpu.originalPrice - gpu.currentPrice;
  
  const conditionColor = {
    Excellent: "text-primary",
    Good: "text-accent",
    Fair: "text-muted-foreground",
  }[gpu.condition];

  const depColor = gpu.depreciationPct >= 70 
    ? "text-depreciation-high" 
    : gpu.depreciationPct >= 40 
      ? "text-depreciation-mid" 
      : "text-depreciation-low";

  return (
    <div className="group card-gradient rounded-lg border border-border p-5 transition-all hover:border-primary/30 hover:glow-primary">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{gpu.brand}</p>
          <h3 className="font-display text-lg font-semibold text-foreground">{gpu.name}</h3>
        </div>
        <Badge variant="outline" className={`${conditionColor} border-current`}>
          {gpu.condition}
        </Badge>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <HardDrive className="h-3.5 w-3.5" />
          <span className="font-mono-data">{gpu.vram}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Thermometer className="h-3.5 w-3.5" />
          <span className="font-mono-data">{gpu.tdp}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Zap className="h-3.5 w-3.5" />
          <span className="font-mono-data">{gpu.age}</span>
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground line-through font-mono-data">
              ${gpu.originalPrice.toLocaleString()}
            </p>
            <p className="font-mono-data text-2xl font-bold text-foreground">
              ${gpu.currentPrice.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <div className={`flex items-center gap-1 ${depColor}`}>
              <TrendingDown className="h-4 w-4" />
              <span className="font-mono-data text-lg font-bold">{gpu.depreciationPct}%</span>
            </div>
            <p className="text-xs text-muted-foreground">depreciated</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {gpu.seller} · {gpu.quantity > 1 ? `${gpu.quantity} units` : "1 unit"}
        </span>
        <button className="rounded-md bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default GPUCard;
