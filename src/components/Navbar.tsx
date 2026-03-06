import { Cpu, ShoppingCart, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">
            Dep<span className="text-primary">GPU</span>
          </span>
        </div>

        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#" className="text-foreground transition-colors">Marketplace</a>
          <a href="#" className="transition-colors hover:text-foreground">Sell Hardware</a>
          <a href="#" className="transition-colors hover:text-foreground">Pricing Guide</a>
          <a href="#" className="transition-colors hover:text-foreground">Verification</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
