"use client";

import { Hero } from "../components/Hero";

import {
  Building2,
  HardHat,
  ClipboardCheck,
  Mountain,
  Home,
  Ruler,
  MapPin,
  Shield,
} from "lucide-react";
import Link from "next/link";

export function Promotional() {
  const services = [
    {
      icon: Building2,
      title: "Civil Engineering",
      description:
        "Comprehensive infrastructure design including subdivision development, site servicing, grading, drainage, and municipal approvals for all project types.",
      slug: "civil-engineering",
    },
    {
      icon: HardHat,
      title: "Structural Engineering",
      description:
        "Expert structural design for residential, commercial, and industrial buildings with complete seismic analysis and BC Building Code compliance.",
      slug: "structural-engineering",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description:
        "Professional coordination and construction administration ensuring projects are delivered on time, on budget, and to specification.",
      slug: "project-management",
    },
    {
      icon: Mountain,
      title: "Geotechnical Services",
      description:
        "Comprehensive soil analysis, foundation design recommendations, and geotechnical investigations for safe, cost-effective construction.",
      slug: "geotechnical-services",
    },
    {
      icon: Home,
      title: "Building Envelope Consulting",
      description:
        "Building envelope design and consulting services to ensure energy efficiency, moisture control, and long-term durability.",
      slug: "building-envelope",
    },
    {
      icon: Ruler,
      title: "Subdivision Design",
      description:
        "Complete subdivision planning, lot layout optimization, infrastructure design, and municipal approval coordination.",
      slug: "subdivision-design",
    },
    {
      icon: MapPin,
      title: "Site Development",
      description:
        "Full-service site development including grading, drainage, access roads, parking, utilities, and landscape engineering.",
      slug: "site-development",
    },
    {
      icon: Shield,
      title: "Structural Assessment",
      description:
        "Detailed structural evaluations, condition assessments, seismic retrofits, and building renovation engineering support.",
      slug: "structural-assessment",
    },
  ];

  return (
    <main>
      <Hero
        title="Our Engineering Services"
        subtitle="Comprehensive civil and structural engineering solutions for projects throughout British Columbia"
      />

      {/* Introduction */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 text-center">
          <h2 className="font-['Poiret_One',_cursive] mb-6 text-[#1B2E4C]">
            Full-Service Engineering Solutions
          </h2>
          <p className="font-['Montserrat',_sans-serif] text-gray-700 leading-relaxed mb-6">
            K2AE Engineering & Consulting provides a complete range of civil and
            structural engineering services to support your project from initial
            concept through to final completion. Our multidisciplinary approach
            ensures seamless coordination across all engineering disciplines,
            delivering integrated solutions that meet your projects unique
            requirements.
          </p>
          <p className="font-['Montserrat',_sans-serif] text-gray-700 leading-relaxed">
            Whether youre developing raw land, constructing a new building,
            renovating an existing structure, or require expert consultation,
            our team of licensed P.Eng professionals has the expertise to
            deliver innovative, compliant, and cost-effective engineering
            solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
          <h2 className="font-['Poiret_One',_cursive] mb-4 text-center text-[#1B2E4C]">
            Explore Our Specialized Services
          </h2>
          <p className="font-['Montserrat',_sans-serif] mx-auto max-w-3xl text-center text-gray-700 mb-12">
            Click on any service below to learn more about our capabilities and
            how we can support your project.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"></div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
          <h2 className="font-['Poiret_One',_cursive] mb-12 text-center text-[#1B2E4C]">
            Our Service Approach
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border-2 border-gray-200 p-8 transition-all hover:border-[#D05F2A]">
              <div className="mb-4 flex justify-center">
                <span className="font-['Poiret_One',_cursive] text-6xl text-[#D05F2A] opacity-30">
                  01
                </span>
              </div>
              <h3 className="font-['Poiret_One',_cursive] mb-4 text-center text-[#1B2E4C]">
                Client-Focused
              </h3>
              <p className="font-['Montserrat',_sans-serif] text-center text-sm text-gray-700">
                We take the time to understand your project goals, constraints,
                and vision, tailoring our services to meet your specific needs
                and delivering solutions that align with your objectives.
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-200 p-8 transition-all hover:border-[#D05F2A]">
              <div className="mb-4 flex justify-center">
                <span className="font-['Poiret_One',_cursive] text-6xl text-[#D05F2A] opacity-30">
                  02
                </span>
              </div>
              <h3 className="font-['Poiret_One',_cursive] mb-4 text-center text-[#1B2E4C]">
                Technically Excellent
              </h3>
              <p className="font-['Montserrat',_sans-serif] text-center text-sm text-gray-700">
                Our licensed P.Eng professionals apply rigorous engineering
                principles, advanced analysis tools, and industry best practices
                to deliver designs that are safe, compliant, and optimized.
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-200 p-8 transition-all hover:border-[#D05F2A]">
              <div className="mb-4 flex justify-center">
                <span className="font-['Poiret_One',_cursive] text-6xl text-[#D05F2A] opacity-30">
                  03
                </span>
              </div>
              <h3 className="font-['Poiret_One',_cursive] mb-4 text-center text-[#1B2E4C]">
                Constructible
              </h3>
              <p className="font-['Montserrat',_sans-serif] text-center text-sm text-gray-700">
                We design with construction in mind, creating practical
                solutions that contractors can build efficiently and
                cost-effectively while maintaining structural integrity and code
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-gradient-to-br from-[#1B2E4C] to-[#0f1a2e] py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
          <h2 className="font-['Poiret_One',_cursive] mb-8 text-center">
            Industries We Serve
          </h2>
          <p className="font-['Montserrat',_sans-serif] mx-auto max-w-3xl text-center text-gray-300 mb-12">
            Our engineering expertise spans multiple sectors and building types
            across British Columbia.
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Residential",
              "Commercial",
              "Industrial",
              "Institutional",
              "Mixed-Use",
              "Retail",
              "Office",
              "Hospitality",
              "Healthcare",
              "Education",
              "Municipal",
              "Infrastructure",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-600 bg-white/10 px-4 py-3 text-center backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <p className="font-['Montserrat',_sans-serif] text-sm">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
          <h2 className="font-['Poiret_One',_cursive] mb-12 text-center text-[#1B2E4C]">
            Why Choose K2AE Engineering Services
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Local Expertise",
                desc: "Deep knowledge of BC Building Code, municipal requirements, and local construction practices",
              },
              {
                title: "Licensed Professionals",
                desc: "All work performed by or under supervision of P.Eng professionals registered with EGBC",
              },
              {
                title: "Comprehensive Services",
                desc: "Full range of civil and structural engineering services under one roof",
              },
              {
                title: "Proven Track Record",
                desc: "Hundreds of successful projects completed throughout British Columbia",
              },
              {
                title: "Responsive Service",
                desc: "Timely communication and quick turnaround on design deliverables and RFIs",
              },
              {
                title: "Value Engineering",
                desc: "Cost-effective solutions that optimize budget without compromising quality or safety",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg bg-gray-50 p-6">
                <h3 className="font-['Poiret_One',_cursive] mb-3 text-[#1B2E4C]">
                  {item.title}
                </h3>
                <p className="font-['Montserrat',_sans-serif] text-sm text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#1B2E4C] to-[#0f1a2e] py-16 md:py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-['Poiret_One',_cursive] mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-['Montserrat',_sans-serif] mb-8 text-gray-300 text-lg">
            Contact us today to discuss your project requirements and learn how
            our engineering services can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#D05F2A] px-10 py-4 font-['Montserrat',_sans-serif] text-lg transition-all hover:bg-[#b54f20]"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
