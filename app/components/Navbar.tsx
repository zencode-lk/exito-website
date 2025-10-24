"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import imgLogo from "figma:asset/3fdda514fea8fd9b8a58c0d8f1a5403e1f9467c5.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-4 z-50 w-full px-4">
      <div className={`mx-auto max-w-5xl px-6 py-3 md:py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-lg rounded-full'
          : 'bg-transparent'
      }`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 cursor-pointer transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="K2AE Engineering & Consulting Ltd."
            width={100}
            height={100}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 font-subtitle md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`cursor-pointer transition-colors hover:text-[#D05F2A] ${
                pathname === link.path ? "text-[#D05F2A]" : isScrolled ? "text-black" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg md:hidden">
          <div className="flex flex-col px-4 py-6 font-subtitle gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`cursor-pointer py-2 text-left transition-colors hover:text-[#D05F2A] ${
                  pathname === link.path ? "text-[#D05F2A]" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
