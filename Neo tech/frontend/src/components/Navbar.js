"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Wrench, Info, Contact2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: <Home size={20} /> },
  { name: "Services", href: "/services", icon: <Wrench size={20} /> },
  { name: "About", href: "/about", icon: <Info size={20} /> },
  { name: "Contact", href: "/contact", icon: <Contact2 size={20} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav className="bg-sky-500 shadow-md px-4 md:px-12 py-4 flex justify-between items-center fixed top-0 w-full z-50">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image src="/neologo.png" alt="NEO Logo" width={50} height={45} />
          </motion.div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-10 items-center text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 transition-colors duration-300 ease-in-out ${
                pathname === link.href
                  ? "text-yellow-300 font-bold"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
          <a
            href="tel:+27721598813"
            className="bg-yellow-400 text-blue-800 px-5 py-2 rounded hover:bg-yellow-300 transition text-base font-semibold shadow-md"
          >
            Book Now
          </a>
        </div>

        {/* Mobile: Book Now + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:+27721598813"
            className="bg-yellow-400 text-blue-800 px-3 py-2 rounded hover:bg-yellow-300 transition text-sm font-semibold shadow-md"
          >
            Book Now
          </a>
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-20 left-0 w-2/3 bg-sky-500 text-white shadow-lg z-50 p-6 space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 hover:text-yellow-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer (adjusted to fix extra space issue) */}
      <div className="h-15 md:h-19"></div>
    </header>
  );
}
