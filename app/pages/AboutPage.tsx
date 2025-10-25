"use client";

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect } from 'react';
import GlassSurface from '../components/GlassSurface';

export function AboutPage() {
  const plants = [
    { name: 'Factory 01 - Sri Lanka', capacity: '30,000-50,000 belts/month', left: '70%', top: '48%' },
    { name: 'Factory 02 - China', capacity: '500,000 zippers/month', left: '75%', top: '38%' },
    { name: 'Corporate HQ - Hong Kong', capacity: 'Head Office', left: '76%', top: '40%' },
  ];

  // Carousel auto-play functionality
  useEffect(() => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('opacity-0');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.remove('opacity-100');
          slide.classList.add('opacity-0');
        }
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    // Initialize first slide
    showSlide(0);

    // Auto-play every 4 seconds
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbWFudWZhY3R1cmluZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYxMzgyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Manufacturing facility"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-white">Since 2005</h1>
            <p className="text-xl max-w-2xl font-cormorant text-heading-md" >
              Elegant design. Enduring quality.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Us Section */}
        <section className="mb-20">
          <h2 className="mb-6 font-cormorant text-heading-xl text-coffee">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 font- font-light text-md sm:text-xl/10">
                Our Factory is a specialized manufacturing facility where high-quality leather belts are produced through a combination of skilled craftsmanship and advanced machinery. From selecting premium leather hides to cutting, stitching, and finishing, each belt is crafted with precision to ensure durability, comfort, and timeless style.
              </p>
              <p className="text-gray-700 font-lato font-semibold text-md text-body-sm">
                Our factory is committed to excellence, offering both custom and large-scale production for international markets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200" style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05); background-image: url("/leatherbg.png"); background-size: 150%; background-position: center; background-repeat: no-repeat' }}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-gray-900 text-body-xl">50,000+</div>
                  <div className="text-gray-600 font-montserrat text-caption-lg">Belts Monthly</div>
                </div>
                <div>
                  <div className="text-gray-900 text-body-xl">500,000+</div>
                  <div className="text-white mix-blend-difference font-montserrat text-caption-lg">Zippers Monthly</div>
                </div>
                <div>
                  <div className="text-gray-900 text-body-xl">6</div>
                  <div className="text-gray-600 font-montserrat text-caption-lg">Global Offices</div>
                </div>
                <div>
                  <div className="text-body-xl text-white mix-blend-difference">2,500 sq ft</div>
                  <div className="text-white mix-blend-difference font-montserrat font-bold text-caption-lg">Factory Space</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    {/* Mission & Vision */}
    <section className="">
      <div className="grid md:grid-cols-1">
        <div className="p-8 flex items-center justify-evenly border border-gray-200 bg-amber-900 rounded-lg "style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)'}}>
          <h3 className="mb-3 font-cormorant text-heading-md text-blush w-[10px]">Our Vision</h3>
          <p className="text-gray-200 font-lato font-light text-md sm:text-xl/10">
            To be the leading global provider of high-quality garment accessories, recognized for innovation, reliability, and exceptional service.
          </p>
        </div>

        <div className="p-8 flex items-center justify-evenly border border-gray-200 bg-coffee rounded-lg "style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)'}}>
         <h3 className=" mb-3 font-cormorant text-heading-md text-blush w-[10px]">Our Mission</h3>
          <p className="text-gray-200 font-lato font-light text-md sm:text-xl/10 w-4/6">
            To deliver superior garment accessories that meet the evolving needs of our clients, ensuring timely delivery and consistent quality while fostering sustainable growth and contributing to the local economy.
          </p>
        </div>
      </div>
     </section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


        {/* Scope of Services */}
        <section className="mb-20">
          <h2 className="mb-8 text-heading-md font-cormorant">Scope of Services</h2>
          <div className="grid md:grid-cols-1 gap-6">

           <div className="flex p-6 border border-gray-200 hover:shadow-md transition-shadow bg-white rounded-lg "style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)'}}>
              <div className="w-1/2">
              <h3 className="text-gray-900 mb-3 font-cookie text-heading-sm text-coffee">Leather Belts</h3>
              <p className="text-gray-700 mb-4 font-lato font-light text-md sm:text-xl/10">
                We manufacture leather belts for our existing buyers in the UK, Europe, and the USA, with an initial focus on producing 30,000 - 50,000 belts per month.
              </p>
              <p className="text-gray-600 font-lato font-bold text-body-sm sm:text-xl/10">
                Capacity expansion for leather belts will be aligned with buyer demand in the subsequent phase.
              </p>
              </div>
              <div className="w-1/2">
                <img src="/zipper.png" alt="Zipper" width={20} height={20} />
              </div>
            </div>
            <div className="flex p-6 border border-gray-200 hover:shadow-md transition-shadow bg-white rounded-lg "style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)'}}>
              <div className="w-1/2">
                <h3 className="text-gray-900 mb-3 font-cookie text-heading-sm text-coffee">Zippers & Elasticated Tapes</h3>
                <p className="text-gray-700 mb-4 font-lato font-light text-md sm:text-xl/10">
                  Our manufacturing unit focuses on producing zippers and elasticated tapes for personnel protective kit manufacturers and garment exporters in Sri Lanka, Bangladesh, Pakistan, and India.
                </p>
                <p className="text-gray-600 font-lato font-bold text-body-sm sm:text-xl/10">
                  First phase: 500,000 zippers per month, with planned capacity doubling in the second phase.
                </p>
              </div>
              <div className="w-1/2">
                <img src="/zipper.png" alt="Zipper" width={20} height={20} />
              </div>
            </div>
          </div>
        </section>
        </div>
        {/* Manufacturing Facility */}
        <section className="relative pb-30 p-10 overflow-hidden" >
          {/* Auto-playing Image Carousel Background */}
          <div className="absolute bg-coffee inset-0 z-0 ">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="carousel-container relative w-full h-full">
                <div className="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out">
                  <img
                    src="https://cdn.exitofasteners.com/exitoButtonMachine.webp"
                    alt="Leather manufacturing facility"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out">
                  <img
                    src="https://cdn.exitofasteners.com/exitoTools.webp"
                    alt="Zipper manufacturing machinery"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out">
                  <img
                    src="https://cdn.exitofasteners.com/exitoLeatherBrown.webp"
                    alt="Quality control and finishing"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20">
            <h2 className="mb-8 text-heading-lg text-center font-cookie text-white">Our Manufacturing Facility</h2>
            <GlassSurface
              width={800}
              height={600}
              borderRadius={24}
              className="mx-auto"
          >
            <div className="p-8  mx-auto text-white rounded-lg backdrop-blur-sm">
              <h3 className="text-heading-sm font-cormorant text-white mb-4">Udammita, JaEla Facility</h3>
              <p className="text-gray-300 mb-6 font-light sm:text-lg/10">
                Our Udammita, Jaela facility (2,500 sq. ft.) utilizes advanced machinery from China and Italy to ensure quality and consistency. We source zipper raw materials and braided tapes from China and leather from Indian and European tanneries.
              </p>

              <h4 className="text-white text-heading-sm font-cormorant mb-4">Key Machinery</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 font-cormorant sm:text-xl/10">
                {[
                  'Tape Ironing and Gapping machines',
                  'Bottom Stopper Welding machine',
                  'Slider Inserting machines',
                  'Top Stopper Attaching machine',
                  'High Beam Ultrasonic Cutting machine',
                  'Leather Cutting and Pasting machines',
                  'Gally Spa Italy Belt Edge machines',
                  'Logo Stamping and Pattern Saw machines',
                  'Button and Snap Attaching machines',
                ].map((machine, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{machine}</span>
                  </div>
                ))}
              </div>


            </div>
          </GlassSurface>
        </div>

        </section>
        <section>
        <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-white mb-4">Raw Materials Sourcing</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-white mb-1">Zipper Materials</div>
                    <div className="text-gray-600">China</div>
                  </div>
                  <div>
                    <div className="text-white mb-1">Braided Tapes</div>
                    <div className="text-gray-600">China</div>
                  </div>
                  <div>
                    <div className="text-white mb-1">Premium Leather</div>
                    <div className="text-gray-600">India & Europe</div>
                  </div>
                </div>
              </div>
        </section>
        {/* Global Presence Map */}
        <section>
          <h2 className="mb-8">Global Presence</h2>
          <div className="p-8 border border-gray-200 bg-white rounded-lg">
            <div className="relative bg-gray-100 rounded overflow-hidden" style={{ height: '400px' }}>
              {/* Simple world map representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                  <circle cx="480" cy="180" r="100" fill="#374151" />
                  <circle cx="700" cy="220" r="120" fill="#374151" />
                  <circle cx="200" cy="250" r="80" fill="#374151" />
                  <circle cx="850" cy="300" r="60" fill="#374151" />
                  <circle cx="150" cy="400" r="50" fill="#374151" />
                </svg>
              </div>

              {/* Location markers */}
              {plants.map((plant, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: plant.left, top: plant.top }}
                >
                  <div className="relative group">
                    <div className="w-4 h-4 bg-gray-900 rounded-full border-2 border-white shadow-lg" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                      <div className="bg-gray-900 text-white px-3 py-2 rounded whitespace-nowrap text-sm">
                        <div>{plant.name}</div>
                        <div className="text-gray-300">{plant.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">Hong Kong - Corporate HQ</div>
                  <div className="text-gray-600">18th Floor, On Hong Commercial Building</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">Sri Lanka - Factory 01</div>
                  <div className="text-gray-600">30,000-50,000 belts/month</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">China - Factory 02</div>
                  <div className="text-gray-600">500,000 zippers/month</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-gray-900 mb-4">Additional Offices</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-700">WinTex Sri Lanka - Kohuwala</div>
                <div className="text-gray-700">WinTex China - Wenzhou</div>
                <div className="text-gray-700">WinTex Bangladesh - Dhaka</div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
