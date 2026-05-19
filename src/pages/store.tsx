import { motion } from "framer-motion";
import { ExternalLink, Star, Package, Key, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ranks = [
  {
    name: "Hunter",
    price: "50",
    popular: false,
    perks: [
      "Hat command (/hat)",
      "Colored chat",
      "2 Player homes",
      "Priority queue access"
    ]
  },
  {
    name: "Void",
    price: "100",
    popular: true,
    perks: [
      "All Hunter perks",
      "Nickname command (/nick)",
      "6 Player homes",
      "Particle effects & cosmetics",
      "Private vault space"
    ]
  },
  {
    name: "Void+",
    price: "150",
    popular: false,
    perks: [
      "All Void perks",
      "Craft anywhere (/craft)",
      "8 Player homes",
      "Unlockable pets",
      "Animated prefix",
      "Weekly bonus items",
      "Exclusive Discord role"
    ]
  },
  {
    name: "Sword",
    price: "200",
    popular: false,
    premium: true,
    perks: [
      "All Void+ perks",
      "Legendary prefix",
      "Portable enderchest (/ec)",
      "Unlimited homes",
      "Custom pet names",
      "Reserved server slot",
      "Monthly exclusive cosmetics",
      "Direct staff support",
      "Beta testing access"
    ]
  }
];

const crates = [
  { name: "Steal Crate", price: "50" },
  { name: "Empire Crate", price: "75" },
  { name: "Koth Crate", price: "100" },
  { name: "Master Crate", price: "125" },
];

export default function Store() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Server Store
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Support the server and get exclusive perks. All purchases go directly towards server upkeep and improvements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
            <a href="https://discord.com/invite/hKvstg3hFg" target="_blank" rel="noopener noreferrer">
              Purchase on Discord <ExternalLink size={18} className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Star className="text-primary" /> Ranks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank, i) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`relative flex flex-col p-6 rounded-2xl bg-secondary/40 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                rank.premium ? 'border-primary shadow-[0_0_20px_rgba(22,163,74,0.15)]' : 
                rank.popular ? 'border-white/30' : 'border-white/5'
              }`}
            >
              {rank.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              {rank.premium && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_10px_rgba(22,163,74,0.5)]">
                  Premium
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <h3 className={`text-2xl font-black mb-2 ${rank.premium ? 'text-primary drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]' : ''}`}>{rank.name}</h3>
                <div className="text-3xl font-bold">Rs. {rank.price}</div>
                <div className="text-sm text-muted-foreground">One-time purchase</div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {rank.perks.map((perk, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{perk}</span>
                  </div>
                ))}
              </div>

              <Button variant={rank.premium ? "default" : "secondary"} className="w-full mt-auto" asChild>
                <a href="https://discord.com/invite/hKvstg3hFg" target="_blank" rel="noopener noreferrer">Buy {rank.name} on Discord</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Key className="text-primary" /> Crate Keys
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {crates.map((crate, i) => (
            <motion.div
              key={crate.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (0.05 * i) }}
              className="p-5 rounded-xl bg-secondary/20 border border-white/5 flex items-center justify-between hover:bg-secondary/40 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <a
                href="https://discord.com/invite/hKvstg3hFg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-background text-primary group-hover:scale-110 transition-transform">
                    <Package size={20} />
                  </div>
                  <div>
                    <div className="font-bold">{crate.name}</div>
                    <div className="text-sm text-muted-foreground">Rs. {crate.price}</div>
                  </div>
                </div>
                <span className="text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Buy on Discord →</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
