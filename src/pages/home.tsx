import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Sparkles, Coins, Users, Map, Calendar, ArrowRight } from "lucide-react";
import { PlayerCount } from "@/components/player-count";
import { CopyIp } from "@/components/copy-ip";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, title: "Land Claims", desc: "Protect your builds from griefing with our intuitive land claim system." },
  { icon: Coins, title: "Player Economy", desc: "Trade with others, set up shops, and build your fortune." },
  { icon: Sparkles, title: "Enhanced Survival", desc: "Vanilla-friendly but enhanced with quality-of-life plugins." },
  { icon: Users, title: "Active Community", desc: "Join our welcoming community with active global staff." },
  { icon: Map, title: "Custom Generation", desc: "Explore unique biomes and breathtaking custom landscapes." },
  { icon: Calendar, title: "Weekly Events", desc: "Participate in regular server events and seasonal celebrations." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Epic Minecraft Landscape" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
              SWORD ART SMP <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/60">SMP</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-medium">
              Step into an immersive survival experience. Claim your land, build your legacy, and join a legendary community.
            </motion.p>
            
            <motion.div variants={item} className="mb-10">
              <PlayerCount />
            </motion.div>
            
            <motion.div variants={item} className="w-full mb-10">
              <CopyIp />
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Link href="/server-info">
                  Start Your Journey <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base bg-[#5865F2] hover:bg-[#4752C4] text-white border-none shadow-lg">
                <a href="https://discord.gg/hKvstg3hFg" target="_blank" rel="noopener noreferrer">
                  Join our Discord
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-900 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Sword Art?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We've crafted a premium survival experience with custom features to keep gameplay fresh and engaging.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="p-6 rounded-2xl bg-zinc-800 border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
