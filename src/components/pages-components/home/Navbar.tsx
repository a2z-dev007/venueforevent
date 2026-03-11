import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  useEffect(() => {
    const onScroll = () => {
      if (!isHome) {
        setScrolled(window.scrollY > 50);
        return;
      }
      const section = document.getElementById("categories-section");
      if (section) {
        const sectionTop = section.offsetTop;
        setScrolled(window.scrollY >= sectionTop - 100);
      } else {
        setScrolled(window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-3" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between section-px">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="VenueFOR EVENT" 
            className={`h-10 md:h-16 w-auto object-contain transition-all duration-300 `}
            
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {["Venues", "Celebrations", "Ideas", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-foreground/80 hover:text-wine" : "text-white/90 hover:text-champagne"
              }`}
            >
              {item}
            </a>
          ))}
          <button className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
            scrolled 
              ? "border-wine/30 text-wine hover:border-wine/60 hover:bg-wine/10" 
              : "border-white/40 text-white hover:border-white hover:bg-white/10"
          }`}>
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>

        <button
          className={`${scrolled ? "text-wine" : "text-white"} md:hidden`}
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
            className={`mt-2 overflow-hidden md:hidden ${scrolled ? "bg-white border-b border-champagne/10 shadow-lg" : "bg-white/95 backdrop-blur-md border-b"}`}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {["Venues", "Celebrations", "Ideas", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-wine font-medium"
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
