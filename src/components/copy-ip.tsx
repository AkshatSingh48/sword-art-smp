import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./ui/button";

export function CopyIp() {
  const [copied, setCopied] = useState(false);
  const ip = "pro-1.pterodactly.in:25000";

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 p-1.5 pr-2 rounded-lg bg-secondary/80 border border-white/10 backdrop-blur max-w-sm w-full mx-auto">
      <div className="px-3 py-2 bg-background/50 rounded-md font-mono text-sm tracking-wider text-foreground flex-1 text-left truncate">
        {ip}
      </div>
      <Button 
        size="sm" 
        onClick={handleCopy}
        className={`shrink-0 transition-all duration-300 ${copied ? "bg-primary text-primary-foreground" : ""}`}
      >
        {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
        {copied ? "Copied!" : "Copy IP"}
      </Button>
    </div>
  );
}
