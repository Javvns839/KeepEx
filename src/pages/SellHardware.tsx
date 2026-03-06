import { useState, useRef } from "react";
import { Camera, Upload, X, DollarSign, Cpu, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

const SellHardware = () => {
  const [photos, setPhotos] = useState<{ url: string; file: File }[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [showEstimate, setShowEstimate] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    vram: "",
    condition: "",
    age: "",
    quantity: "1",
    tdp: "",
    originalPrice: "",
    notes: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 5) {
      toast.error("Maximum 5 photos allowed");
      return;
    }
    const newPhotos = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
    setAiResult(null);
  };

  const analyzePhotos = () => {
    if (photos.length === 0) {
      toast.error("Upload at least one photo first");
      return;
    }
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAiResult(
        "Detected: NVIDIA GPU — appears to be an RTX-series card in good physical condition. No visible damage to PCB or cooling assembly. Thermal paste appears intact. Estimated model: RTX 4090 based on PCB layout and cooler design."
      );
      setAnalyzing(false);
      toast.success("AI analysis complete");
    }, 2500);
  };

  const getEstimate = () => {
    if (!form.name || !form.condition || !form.originalPrice) {
      toast.error("Fill in at least the model, condition, and original price");
      return;
    }
    setShowEstimate(true);
  };

  const originalNum = parseFloat(form.originalPrice) || 0;
  const conditionMultiplier =
    form.condition === "Excellent"
      ? 0.45
      : form.condition === "Good"
        ? 0.35
        : form.condition === "Fair"
          ? 0.22
          : 0.3;
  const estimatedPrice = Math.round(originalNum * conditionMultiplier);
  const qty = parseInt(form.quantity) || 1;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Sell Your <span className="gradient-text">Hardware</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Enter your hardware details to get an instant resale estimate.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form — left column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Machine Details Card */}
            <Card className="border-border card-gradient">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-display">
                  <Cpu className="h-5 w-5 text-primary" />
                  Hardware Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Model Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g. RTX 4090"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Select
                      value={form.brand}
                      onValueChange={(v) => update("brand", v)}
                    >
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NVIDIA">NVIDIA</SelectItem>
                        <SelectItem value="AMD">AMD</SelectItem>
                        <SelectItem value="Intel">Intel</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="vram">VRAM</Label>
                    <Input
                      id="vram"
                      placeholder="e.g. 24GB GDDR6X"
                      value={form.vram}
                      onChange={(e) => update("vram", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tdp">TDP</Label>
                    <Input
                      id="tdp"
                      placeholder="e.g. 450W"
                      value={form.tdp}
                      onChange={(e) => update("tdp", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition *</Label>
                    <Select
                      value={form.condition}
                      onValueChange={(v) => update("condition", v)}
                    >
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      placeholder="e.g. 1.5 yrs"
                      value={form.age}
                      onChange={(e) => update("age", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Purchase Price (USD) *</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    placeholder="e.g. 1599"
                    value={form.originalPrice}
                    onChange={(e) => update("originalPrice", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional details — mining history, warranty status, accessories included…"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Photo Upload Card */}
            <Card className="border-border card-gradient">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg font-display">
                  <Camera className="h-5 w-5 text-primary" />
                  Photos &amp; AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Upload up to 5 photos. Our AI will analyze them to verify
                  hardware condition and identify the model.
                </p>

                {/* Photo grid */}
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {photos.map((photo, i) => (
                    <div
                      key={i}
                      className="group relative aspect-square overflow-hidden rounded-lg border border-border"
                    >
                      <img
                        src={photo.url}
                        alt={`Upload ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => removePhoto(i)}
                        className="absolute right-1 top-1 rounded-full bg-background/80 p-1 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <X className="h-3 w-3 text-foreground" />
                      </button>
                    </div>
                  ))}
                  {photos.length < 5 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Plus className="h-6 w-6" />
                    </button>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handlePhotoUpload}
                />

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Photos
                  </Button>
                  <Button
                    onClick={analyzePhotos}
                    disabled={photos.length === 0 || analyzing}
                    className="gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    {analyzing ? "Analyzing…" : "Analyze with AI"}
                  </Button>
                </div>

                {/* AI result */}
                {aiResult && (
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      AI Analysis
                    </p>
                    <p className="text-sm text-foreground">{aiResult}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Estimate — right column */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 space-y-4">
              <Card className="border-border card-gradient">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg font-display">
                    <DollarSign className="h-5 w-5 text-accent" />
                    Resale Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!showEstimate ? (
                    <div className="text-center py-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        Fill in your hardware details and click below to get a
                        price estimate.
                      </p>
                      <Button onClick={getEstimate} className="w-full gap-2">
                        <DollarSign className="h-4 w-4" />
                        Get Estimate
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Model</span>
                          <span className="font-medium text-foreground">
                            {form.name || "—"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Condition</span>
                          <Badge
                            variant="outline"
                            className="border-primary/40 text-primary"
                          >
                            {form.condition}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Quantity</span>
                          <span className="font-mono-data text-foreground">
                            ×{qty}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Original Price
                          </span>
                          <span className="font-mono-data text-foreground">
                            ${originalNum.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Est. Unit Price
                          </span>
                          <span className="font-mono-data text-lg font-bold text-primary">
                            ${estimatedPrice.toLocaleString()}
                          </span>
                        </div>
                        {qty > 1 && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Est. Total ({qty} units)
                            </span>
                            <span className="font-mono-data text-lg font-bold text-accent">
                              ${(estimatedPrice * qty).toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>
                      <Separator />
                      <Button className="w-full" size="lg">
                        Submit Listing
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        Estimates are based on current market data and may vary.
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellHardware;
