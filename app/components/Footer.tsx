"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ScrollVelocity from "./ScrollVelocity";
// import imgLogo from "figma:asset/3fdda514fea8fd9b8a58c0d8f1a5403e1f9467c5.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee z-80 text-white">
      <div className="h-[100px] w-full bg-cognac flex flex-col sm:flex-row justify-evenly items-center">
        <h2 className="font-lato text-lg sm:text-6xl text-blush font-extralight">
          Let's Talk
        </h2>
        <a
          href="mailto:sales@exitofasteners.com"
          className="font-lato text-lg sm:text-3xl text-blush font-extralight"
        >
          sales@exitofasteners.com
        </a>
        <a
          href="mailto:info@exitofasteners.com"
          className="font-lato text-lg sm:text-3xl text-blush font-extralight"
        >
          info@exitofasteners.com
        </a>
      </div>
      <div className="h-[200px] w-full bg-coffee text-amber">
        <ScrollVelocity
          texts={[
            "Your Trusted Leather Fasteners and Trims Solutions Provider.",
            "Let's Become Partners!",
          ]}
          velocity={10}
          className="custom-scroll-text text-display-md font-cormorant"
        />
      </div>
      <div className="flex flex-row justify-between  w-full px-4 py-12 md:px-8 lg:px-20">
        <div className="w-1/6">
          <Image src="/exito.svg" alt="Exito Fasteners best Leather and Zipper Trims provider in south asia." width={100} height={100} />

          <p className="font-caption mt-8 text-sm text-justify text-gray-300">
          To deliver superior garment accessories that meet the evolving needs of our clients, ensuring timely delivery and consistent quality while fostering sustainable growth and contributing to the local economy.
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
                <Mail size={16} className="text-[#D05F2A]" />
                  <a
                    href="mailto:info@exitofasteners.com"
                    className="transition-colors hover:text-[#D05F2A]"
                  >
                    info@exitofasteners.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#D05F2A]" />
                  <a
                    href="mailto:sales@exitofasteners.com"
                    className="transition-colors hover:text-[#D05F2A]"
                  >
                    sales@exitofasteners.com
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
