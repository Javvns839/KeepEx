import { Cpu, ShoppingCart, Tag } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">
              Keep<span className="text-primary">Ex</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4" />
            Buy Hardware
          </button>
          <button className="flex items-center gap-2 rounded-md border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
            <Tag className="h-4 w-4" />
            Sell Hardware
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
