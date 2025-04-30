"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  PhoneCall,
  Mail,
  Home,
  Wrench,
  Info,
  Contact2,
  FileText, // Added icon for the Blog
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Services", href: "/services", icon: <Wrench size={18} /> },
  { name: "About", href: "/about", icon: <Info size={18} /> },
  { name: "Contact", href: "/contact", icon: <Contact2 size={18} /> },
  // { name: "Blog", href: "/blog", icon: <FileText size={18} /> },
  // Added Blog link here
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm px-4 py-2 flex justify-between items-center">
        <a
          href="https://wa.me/27123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <PhoneCall size={16} /> +27 12 345 6789
        </a>
        <a
          href="mailto:info@example.com"
          className="flex items-center gap-2 hover:underline"
        >
          <Mail size={16} /> info@example.com
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-4 md:px-12 py-4 flex justify-between items-center sticky top-0 w-full z-50">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 tracking-wide"
        >
          NEO Technologies
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-700 transition"
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute top-full left-0 w-2/3 bg-white shadow-lg z-50 p-6 space-y-6 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-700 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon} {link.name}
                </Link>
              ))}

              {/* Top Bar Links Inside Mobile Menu */}
              <div className="pt-6 border-t text-gray-600 space-y-4">
                <a
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-700"
                >
                  <PhoneCall size={18} /> +27 12 345 6789
                </a>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-2 hover:text-blue-700"
                >
                  <Mail size={18} /> info@example.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
