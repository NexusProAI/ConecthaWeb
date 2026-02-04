"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Glitter from "./Glitter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay before closing
    setDropdownTimeout(timeoutId);
  };

  const menuItems = [
    { name: "Home", href: "#" },
    {
      name: "Soluções",
      href: "#solucoes",
      dropdown: [
        { name: "Redes Sociais", href: "#redes-sociais" },
        { name: "Tráfego Pago", href: "#trafego-pago" },
        { name: "Criação de Sites", href: "#criacao-de-sites" },
        { name: "Posicionamento no Google (SEO)", href: "#posicionamento-google" },
        { name: "Identidade Visual", href: "#identidade-visual" },
        { name: "E-mail Marketing", href: "#email-marketing" },
        { name: "Consultoria de Marketing", href: "#consultoria-marketing" },
      ],
    },
    {
      name: "Contatos",
      href: "#contato",
      dropdown: [
        { 
          name: "Solicitar Proposta", 
          href: "#contato", 
          action: () => document.getElementById('solicitar-proposta-btn')?.click() 
        },
        { 
          name: "Seja um Parceiro", 
          href: "#contato", 
          action: () => document.getElementById('seja-parceiro-btn')?.click() 
        },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg shadow-lg py-2`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Logo */}
          <a
            href="#"
            className="relative flex items-center space-x-2 -ml-4"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <img src="/logo%202.png" alt="ConecthaWeb Logo" className="h-14 w-auto" />
            <AnimatePresence>
              {isLogoHovered && <Glitter />}
            </AnimatePresence>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 text-gray-700 hover:text-blue-600`}
                >
                  <span>{item.name}</span>
                </a>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-white shadow-xl py-2 border border-gray-100"
                  >
                    {item.dropdown.map((subItem: any) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={subItem.action}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}


          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors text-gray-900`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem: any) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => {
                            subItem.action && subItem.action();
                            setIsMobileMenuOpen(false); // Close mobile menu on click
                          }}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
