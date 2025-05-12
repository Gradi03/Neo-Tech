"use client";

import { Mail, Phone, Facebook } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [showText, setShowText] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-6 sm:px-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="mb-4">
            <Image
              src="/neologo.png"
              alt="Neo Dstv Technologies Logo"
              width={130}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed">
            Neo DStv Technologies delivers fast, professional DStv installations
            and signal support across Cape Town. Trusted by homeowners and
            businesses alike.
          </p>
          {/* <div className="text-xs text-gray-400 mt-4 space-y-1">
            <p>📍 Based in Parow, Cape Town</p>
            <p>🕒 Mon–Sat: 8:00 AM – 6:00 PM</p>
            <p>🆔 Reg. No: 2023/123456/07</p>
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              {/* <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link> */}
            </li>
            <li>
              {/* <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link> */}
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@neodstvtechnologies.co.za"
                className="hover:text-white"
              >
                info@neodstvtechnologies.co.za
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+27721598813" className="hover:text-white">
                +27 72 159 8813
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4 text-white" />
              <a
                href="https://www.facebook.com/profile.php?id=61576155950681"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Neo DStv Technologies
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Neo DStv Technologies. All rights reserved.{" "}
        <br />
        Created by{" "}
        <a
          href="https://ninjatechdesign.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 hover:underline"
        >
          Ninja Tech Design
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/27721598813"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-500 ease-in-out z-50 ${
          showText ? "pl-4 pr-6 py-3" : "p-4 w-14 h-14"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.84.74 5.51 2.12 7.88L2 30l6.32-2.09A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 26c-2.38 0-4.67-.66-6.68-1.9l-.48-.29-3.75 1.24 1.24-3.63-.31-.5A11.96 11.96 0 014 16c0-6.62 5.38-12 12-12s12 5.38 12 12-5.38 12-12 12zm6.28-8.68c-.34-.17-2-1-2.31-1.12-.31-.12-.53-.17-.75.17s-.86 1.12-1.05 1.34c-.19.22-.39.25-.73.08-.34-.17-1.43-.53-2.72-1.7-1-.9-1.67-2-1.87-2.34-.19-.34-.02-.52.15-.68.16-.16.34-.39.51-.58.17-.2.22-.34.34-.56.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.03-2.47-.27-.65-.55-.56-.75-.57l-.65-.01c-.22 0-.58.08-.88.39-.3.3-1.15 1.12-1.15 2.73s1.18 3.17 1.35 3.39c.17.22 2.32 3.55 5.63 4.97.79.34 1.4.54 1.88.68.79.25 1.5.22 2.07.13.63-.09 2-.81 2.28-1.58.28-.77.28-1.43.2-1.57-.08-.14-.31-.22-.65-.39z" />
        </svg>

        {isMounted && showText && (
          <span className="ml-2 text-sm font-medium transition-opacity duration-500">
            Get a quote now
          </span>
        )}
      </Link>
    </footer>
  );
}
