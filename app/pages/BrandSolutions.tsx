"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/Card';
import {Metadata} from 'next';

export const metadata: Metadata={
  title:"Brand Solutions | Private Label Belts & Upcycling",
  description:"Comprehensive B2B solutions by Exito Fasteners: from custom private-label belt manufacturing to innovative leather waste upcycling strategies."
}
export function BrandSolutions() {
  useEffect(() => {
    AOS.init();
  }, []);

  const beltFeatures = [
    'Premium leather sourcing from China and European tanneries',
    'Custom buckle design and manufacturing',
    'Multiple leather grades: Full-grain, Top-grain, Genuine',
    'Advanced cutting and stitching for consistency',
    'Hand-finishing for premium lines',
    'Custom embossing and branding capabilities',
    'Serving buyers in UK, Europe, and USA',
    'Initial capacity: 30,000 - 50,000 belts per month',
  ];

  const craftingProcess = [
    {
      step: '01',
      title: 'Material Selection',
      description: 'Carefully sourced premium leather from certified tanneries'
    },
    {
      step: '02',
      title: 'Precision Cutting',
      description: 'Advanced cutting techniques for consistent quality'
    },
    {
      step: '03',
      title: 'Expert Crafting',
      description: 'Skilled artisans combine traditional and modern techniques'
    },
    {
      step: '04',
      title: 'Quality Finishing',
      description: 'Hand-finishing and quality control for premium results'
    }
  ];

  const machinery = [
    'Leather Cutting and Pasting machines',
    'Gally Spa Italy Belt Edge machines',
    'Logo Stamping and Pattern Saw machines',
    'Button and Snap Attaching machines',
    'Advanced Stitching Equipment',
    'Quality Control Systems'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-amber text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-cormorant text-display-md mb-6">Premium Leather Belts</h1>
          <p className="text-body-lg font-cookie text-gray-100 max-w-2xl">
            Crafting exceptional leather belts with precision, quality, and timeless elegance for discerning buyers worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Belt Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-heading-lg font-cormorant mb-8 text-gray-900">Exceptional Craftsmanship</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We manufacture premium leather belts for discerning buyers across the UK, Europe, and USA. Our facility seamlessly blends traditional craftsmanship with cutting-edge technology to deliver unparalleled quality, durability, and style.
              </p>

              <div className="space-y-4">
                {beltFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664286022007-9d2eb1003165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmVsdCUyMGJ1Y2tsZXxlbnwxfHx8fDE3NjEzODI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Premium leather belt craftsmanship"
                className="w-full h-[650px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

        </section>

        {/* Crafting Process */}
        <section className="mb-24">
          <h2 className="text-heading-lg  font-cormorant mb-12 text-center text-gray-900">Our Crafting Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftingProcess.map((process, index) => (
              <div data-aos="fade-up"
                data-aos-delay={250*index}
                data-aos-duration={1000} key={index} className="text-center">
                <div className="w-16 h-16 bg-amber text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturing Excellence */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://cdn.exitofasteners.com/exitoButtonMachine.webp"
                alt="Advanced manufacturing equipment"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-body-xl font-cormorant mb-8 text-gray-900">Advanced Manufacturing</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our 2,500 sq. ft. facility in Udammita, Jaela houses state-of-the-art equipment from Italy and China, ensuring precision and consistency in every belt we produce.
              </p>

              <div className="space-y-3">
                {machinery.map((machine, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{machine}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Materials */}
        <section>
          <h2 className="text-body-xl font-cormorant mb-12 text-center text-gray-900">Premium Materials</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">European Leather</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sourced from certified European tanneries, our premium leather undergoes rigorous quality control to ensure exceptional durability and luxurious feel.
              </p>
              <div className="text-sm text-amber font-medium">Full-grain • Top-grain • Genuine</div>
            </Card>

            <Card className="p-8 border-0 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sri Lankan Craftsmanship</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Traditional Sri Lankan leather crafting techniques combined with modern precision manufacturing create belts that are both authentic and contemporary.
              </p>
              <div className="text-sm text-amber font-medium">Hand-finished • Custom embossing • Precision cutting</div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
