"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import imgLogo from "figma:asset/3fdda514fea8fd9b8a58c0d8f1a5403e1f9467c5.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee text-white">
      <div className="h-[100px] w-full bg-cognac"></div>
      <div className="h-[200px] w-full bg-amber"></div>
      <div className="flex flex-row justify-between  w-full px-4 py-12 md:px-8 lg:px-20">
        <div className="w-1/6">
          {/*<Image src="/logo.png" alt="K2AE Engineering & Consulting Ltd." width={100} height={100} />*/}
          Exito
          <p className="font-caption text-sm text-justify text-gray-300">
            Engineering excellence in British Columbia. Innovative design,
            rigorous compliance, and collaborative expertise.
          </p>
        </div>
        <div className="flex flex-col w-4/6 justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo and Description */}

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-title">Quick Links</h3>
              <ul className="space-y-2 font-caption text-sm">
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer transition-colors hover:text-[#D05F2A]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="cursor-pointer transition-colors hover:text-[#D05F2A]"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="cursor-pointer transition-colors hover:text-[#D05F2A]"
                  >
                    Promotions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="cursor-pointer transition-colors hover:text-[#D05F2A]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-title">Legal</h3>
              <ul className="space-y-2 font-caption text-sm">
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer transition-colors hover:text-[#D05F2A]"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Brand"
                    className="cursor-pointer transition-colors hover:text-[#D05F2A]"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-title">Contact Us</h3>
              <ul className="space-y-3 font-caption text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#D05F2A]" />
                  <a
                    href="tel:6049911976"
                    className="transition-colors hover:text-[#D05F2A]"
                  >
                    07234567345
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#D05F2A]" />
                  <a
                    href="mailto:engineering@k2ae.ca"
                    className="transition-colors hover:text-[#D05F2A]"
                  >
                    hello@exito.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-600 pt-8 text-center font-['Montserrat',_sans-serif] text-sm text-gray-400">
            <p>&copy; {currentYear} Exito Fasteners. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
