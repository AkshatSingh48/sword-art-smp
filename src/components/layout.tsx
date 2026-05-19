import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Sword } from "lucide-react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground dark">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Sword size={20} className="stroke-[2.5]" />
            </div>
            <span className="font-bold text-lg tracking-tight">Sword Art SMP</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className={`transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}>Home</Link>
            <Link href="/server-info" className={`transition-colors hover:text-primary ${location === "/server-info" ? "text-primary" : "text-muted-foreground"}`}>Server Info</Link>
            <Link href="/store" className={`transition-colors hover:text-primary ${location === "/store" ? "text-primary" : "text-muted-foreground"}`}>Store</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5 bg-secondary/30 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">&copy; {new Date().getFullYear()} Sword Art SMP. Not affiliated with Mojang AB.</p>
          <p>Java IP: pro-1.pterodactly.in:25000 | Bedrock Port: 25000</p>
        </div>
      </footer>
    </div>
  );
}
