import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between section-px">
        <a href="/" className="flex items-center gap-2">
          <span className="font-accent text-3xl text-champagne">Venue</span>
          <span className="font-heading text-lg font-semibold tracking-wider text-primary-foreground">
            FOR EVENT
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {["Venues", "Celebrations", "Ideas", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-champagne"
            >
              {item}
            </a>
          ))}
          <button className="flex items-center gap-2 rounded-full border border-champagne/30 px-4 py-2 text-sm text-champagne transition-all hover:border-champagne/60 hover:bg-champagne/10">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>

        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-dark mt-2 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {["Venues", "Celebrations", "Ideas", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary-foreground/80 hover:text-champagne"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
