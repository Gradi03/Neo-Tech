"use client";

import { useState } from "react";
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

  return (
    <header>
      {/* Sticky Navbar */}
      <nav className="bg-sky-500 shadow-md px-4 md:px-12 py-4 flex justify-between items-center fixed top-0 w-full z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/neologo.png" alt="NEO Logo" width={60} height={50} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
            >
              {link.icon} {link.name}
            </Link>
          ))}
          <a
            href="tel:+27123456789"
            className="bg-yellow-400 text-blue-800 px-5 py-2 rounded hover:bg-yellow-300 transition text-base font-semibold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute top-full left-0 w-2/3 bg-sky-500 text-white shadow-lg z-50 p-6 space-y-8 md:hidden"
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

              {/* Mobile Book Now Button (now inside navbar menu) */}
              <a
                href="tel:+27123456789"
                className="block bg-yellow-400 text-blue-800 px-5 py-3 rounded hover:bg-yellow-300 text-center text-lg font-semibold"
              >
                Book Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to avoid content hidden under fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </header>
  );
}
