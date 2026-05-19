import { motion } from "framer-motion";
import { Server, ShieldAlert, CheckCircle2, Info, Monitor, Cpu } from "lucide-react";
import { CopyIp } from "@/components/copy-ip";

const rules = [
  { title: "Be Respectful", desc: "No harassment, bullying, discrimination, or hate speech." },
  { title: "No Cheating", desc: "Hacks, exploiting bugs, and unfair advantages are strictly bannable." },
  { title: "Keep Chat Clean", desc: "No spamming, excessive caps, or inappropriate content." },
  { title: "No Griefing", desc: "Do not destroy, alter, or steal from others' builds without permission." },
  { title: "Fair Trading", desc: "No scamming. Honor your trades and agreements." },
  { title: "Report Issues", desc: "Report rule breakers via Discord. Do not take matters into your own hands." },
];

export default function ServerInfo() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4">Server Information</h1>
        <p className="text-xl text-muted-foreground">Everything you need to connect and play.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-secondary/30 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="text-primary" size={28} />
            <h2 className="text-2xl font-bold">How to Connect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> Java Edition (Recommended)
              </h3>
              <p className="text-muted-foreground mb-3 text-sm">Supported versions: 1.19.x - 1.21.x (1.21.x recommended for best experience)</p>
              <CopyIp />
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> Bedrock Edition
              </h3>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Server Address:</span>
                  <span className="text-white">pro-1.pterodactyl.in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Port:</span>
                  <span className="text-white">25000</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-secondary/30 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-primary" size={28} />
            <h2 className="text-2xl font-bold">Server Details</h2>
          </div>
          
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary shrink-0">
                <Server size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Game Mode</h4>
                <p className="text-muted-foreground text-sm">Survival Multiplayer (SMP) with economy and claims.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary shrink-0">
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Performance</h4>
                <p className="text-muted-foreground text-sm">Premium hardware ensuring lag-free gameplay even at peak hours.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary shrink-0">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Protection</h4>
                <p className="text-muted-foreground text-sm">Advanced anti-cheat and robust land claiming system.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Server Rules</h2>
          <p className="text-muted-foreground mt-2">By playing on Sword Art SMP, you agree to these rules.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rules.map((rule, i) => (
            <div key={i} className="bg-background border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-colors">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" /> {rule.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
