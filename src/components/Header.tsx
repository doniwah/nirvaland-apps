import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isMobileProjectOpen, setIsMobileProjectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const projectItems = [
    { label: "Beverly Kost", href: "/beverly-kost" },
    { label: "Orchard Kost", href: "/orchard-kost" },
  ];

  const navItems = [  
    { label: "HOME", href: "#" },
    { label: "OUR PROJECT", hasDropdown: true },
    { label: "JOIN US", href: "#join" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectDropdownOpen(false);
      }
    };

    if (isProjectDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProjectDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="text-primary-foreground font-display font-bold text-xl md:text-2xl tracking-wide">
              <img src={logo} alt="Nirvaland Logo" className="h-12" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
                      className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isProjectDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProjectDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {projectItems.map((project) => (
                          <a
                            key={project.label}
                            href={project.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                            onClick={() => setIsProjectDropdownOpen(false)}
                          >
                            {project.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-primary-foreground/10">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setIsMobileProjectOpen(!isMobileProjectOpen)}
                      className="w-full text-left py-3 text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProjectOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileProjectOpen && (
                      <div className="pl-4 pb-2">
                        {projectItems.map((project) => (
                          <a
                            key={project.label}
                            href={project.href}
                            className="block py-2 text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                            onClick={() => {
                              setIsOpen(false);
                              setIsMobileProjectOpen(false);
                            }}
                          >
                            {project.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-primary-foreground/90 hover:text-secondary transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
