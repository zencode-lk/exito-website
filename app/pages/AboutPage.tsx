"use client";

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect } from 'react';
import GlassSurface from '../components/GlassSurface';
import CountUp from '../components/CountUp';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title:'About Exito Fasteners',
  description:"Discover Exito Fasteners' legacy in premium craftsmanship. We combine industrial scale with modern sustainability to serve global fashion brands."
}

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
          src="https://cdn.exitofasteners.com/exitofactory.png"
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
            <div className="bg-white p-8 rounded-2xl flex flex-col  justify-between border border-gray-200" style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05); background-image: url("/leatherbg.png"); background-size: 150%; background-position: center; background-repeat: no-repeat' }}>
              <div className="">
                <div className="text-gray-900 text-heading-xl">
                  <CountUp
                    from={0}
                    to={50000}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
              </div>
                <div className="text-gray-600 font-montserrat text-caption-lg">Belts Monthly</div>
              </div>
              <div className="grid grid-cols-2 gap-6 w-full">


                <div>
                  <div className="text-gray-900 text-body-xl">06</div>
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
          <div className="p-8 flex sm:flex-row flex-col items-center justify-evenly border border-gray-200 bg-amber-900 rounded-lg " style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)' }}>
            <h3 className="mb-3 font-cormorant text-heading-md text-blush sm:w-[10px]">Our Vision</h3>
            <p className="text-gray-200 font-lato font-light text-md sm:text-xl/10">
              To be the leading global provider of high-quality garment accessories, recognized for innovation, reliability, and exceptional service.
            </p>
          </div>

          <div className="p-8 flex sm:flex-row flex-col items-center justify-evenly border border-gray-200 bg-coffee rounded-lg " style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)' }}>
            <h3 className=" mb-3 font-cormorant text-heading-md text-blush sm:w-[10px]">Our Mission</h3>
            <p className="text-gray-200 font-lato font-light text-md sm:text-xl/10 sm:w-4/6">
              To deliver superior garment accessories that meet the evolving needs of our clients, ensuring timely delivery and consistent quality while fostering sustainable growth and contributing to the local economy.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


        {/* Scope of Services */}
        <section className="mb-20">

          <div className="grid md:grid-cols-1 gap-6">

            <div className="flex flex-col gap-4 sm:flex-row p-6 border border-gray-200 hover:shadow-md transition-shadow bg-white rounded-2xl " style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)' }}>
              <div className="sm:w-1/2">
                <h3 className="text-gray-900 mb-3 font-cookie text-heading-xl text-coffee">Leather Belts</h3>
                <p className="text-gray-700 mb-4 font-lato font-light text-md sm:text-xl/10">
                  We manufacture leather belts for our existing buyers in the UK, Europe, and the USA, with an initial focus on producing 30,000 - 50,000 belts per month.
                </p>
                <p className="text-gray-600 font-lato font-bold text-body-sm sm:text-xl/10">
                  Capacity expansion for leather belts will be aligned with buyer demand in the subsequent phase.
                </p>
              </div>
              <div className="sm:w-1/2">
                <img src="https://cdn.exitofasteners.com/exitoCollection.webp" alt="Zipper" className="rounded-4xl w-full h-full object-cover" />
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
            <div className="sm:p-8  mx-auto text-white rounded-lg backdrop-blur-sm">
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
      {/* Global Presence - Minimal Design Section */}
      <section className="relative min-h-[300vh] bg-gradient-to-b from-gray-50 via-white to-gray-100">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-10 w-96 h-96 bg-coffee rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-900 rounded-full blur-3xl"></div>
        </div>

        {/* Section Header */}
        <div className="relative z-10 pt-20 pb-24 text-center max-w-5xl mx-auto px-4">
          <h2 className=" font-cormorant text-heading-lg text-coffee">Global Presence</h2>
          <h3 className="mb-8  font-cookie text-3xl text-amber-800">Connecting Continents Through Craftsmanship</h3>
          <p className="text-xl font-light text-gray-700 font-lato leading-relaxed ">
            Since our establishment in 2005, we have built a comprehensive global network that spans across Asia, connecting strategic manufacturing hubs with international markets. Our presence extends from corporate headquarters in Hong Kong to specialized manufacturing facilities in Sri Lanka and China, creating a seamless supply chain that delivers excellence across continents.
          </p>
          <p className="text-lg text-gray-700 font-lato leading-relaxed">
            This strategic positioning allows us to leverage regional expertise, optimize production costs, and maintain the highest quality standards while serving diverse markets across Europe, North America, and Asia-Pacific regions.
          </p>
        </div>

        <hr className="my-16 border-gray-200 w-[80%] mx-auto" />

        {/* Manufacturing Facilities */}
        <div className="relative z-10 max-w-7xl mt-32 mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h3 className="font-cormorant text-heading-lg text-coffee">Manufacturing Excellence</h3>
            <h4 className="font-cookie text-2xl text-amber-800 mb-8">Strategic Locations, Superior Quality</h4>
          </div>

          <div className="space-y-16">
            {/* Hong Kong HQ */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h4 className="font-cormorant text-2xl text-coffee text-heading-sm ">Hong Kong Corporate Headquarters</h4>
                <h5 className="font-cookie text-body-lg text-amber-800 mb-6">Strategic Command Center</h5>
                <p className="text-gray-700 font-lato text-xl/20 font-light leading-relaxed mb-2">
                  Located on the 18th floor of the On Hong Commercial Building, our Hong Kong headquarters serves as the strategic nerve center of our global operations. This prime location in one of Asia&apos;s most important financial and trading hubs provides us with unparalleled access to international markets and supply chains.
                </p>
                <p className="text-gray-700 font-lato leading-relaxed mb-6">
                  From this central command post, we coordinate our manufacturing operations across multiple countries, manage international client relationships, and oversee quality control standards that ensure consistency across all our production facilities.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h6 className="font-cormorant text-body-lg text-coffee mb-3">Key Functions</h6>
                  <ul className="space-y-2 font-lato text-body-md text-gray-700">
                    <li>• Global operations management and coordination</li>
                    <li>• International client relationship management</li>
                    <li>• Supply chain optimization and logistics</li>
                    <li>• Quality assurance and standards development</li>
                    <li>• Strategic planning and market expansion</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <ImageWithFallback
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  src="https://cdn.exitofasteners.com/factory-01.png"
                  alt="Hong Kong skyline and business district"
                  className="w-full sm:h-[700px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Sri Lanka Factory */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ImageWithFallback
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                  src="https://cdn.exitofasteners.com/exitoBeltcollection2.webp"
                  alt="Leather manufacturing facility in Sri Lanka"
                  className="w-full sm:h-[700px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h4 className="font-cormorant text-heading-sm text-coffee mb-4">Sri Lanka Manufacturing Facility</h4>
                <h5 className="font-cookie text-xl text-amber-800 mb-6">Premium Leather Belt Production</h5>
                <p className="text-gray-700 font-lato text-xl/20 font-light leading-relaxed mb-2">
                  Our Udammita, JaEla facility represents the pinnacle of leather belt manufacturing in South Asia. Spanning 2,500 square feet, this state-of-the-art facility combines traditional craftsmanship with modern manufacturing techniques to produce 30,000 to 50,000 premium leather belts monthly.
                </p>
                <p className="text-gray-700 font-lato leading-relaxed mb-6">
                  The facility specializes in serving our established client base across the United Kingdom, Europe, and the United States. Our skilled artisans work with premium leather sourced from certified tanneries in India and Europe, ensuring each belt meets the exacting standards expected by international markets.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h6 className="font-cormorant text-lg text-coffee mb-3">Production Capabilities</h6>
                  <ul className="space-y-2 font-lato text-gray-700">
                    <li>• Monthly capacity: 30,000-50,000 leather belts</li>
                    <li>• Premium leather processing and finishing</li>
                    <li>• Custom design and pattern development</li>
                    <li>• Quality control and testing procedures</li>
                    <li>• Scalable production for market demand</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Chain Network */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h3 className="font-cormorant text-heading-lg text-coffee mb-4">Global Supply Chain</h3>
            <h4 className="font-cookie text-heading-sm text-amber-600">Sourcing Excellence Worldwide</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Leather */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
                </div>
                <h5 className="font-cormorant text-body-xl text-coffee mb-2">Premium Leather</h5>
                <p className="font-cookie text-amber-600 mb-4">India & Europe</p>
                <p className="text-gray-600 font-lato text-sm leading-relaxed">
                  Finest quality hides from certified tanneries, ensuring durability and excellence.
                </p>
              </div>
            </div>

            {/* Hardware */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-amber-500 rounded-sm"></div>
                </div>
                <h5 className="font-cormorant text-body-xl text-coffee mb-2">Premium Hardware</h5>
                <p className="font-cookie text-amber-600 mb-4">Italy & Germany</p>
                <p className="text-gray-600 font-lato text-sm leading-relaxed">
                  Precision-crafted buckles combining traditional craftsmanship with innovation.
                </p>
              </div>
            </div>

            {/* Craftsmanship */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-amber-500 rounded-full transform rotate-45"></div>
                </div>
                <h5 className="font-cormorant text-body-xl text-coffee mb-2">Expert Craftsmanship</h5>
                <p className="font-cookie text-amber-600 mb-4">Local Artisans</p>
                <p className="text-gray-600 font-lato text-sm leading-relaxed">
                  Skilled artisans with generations of expertise in traditional techniques.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Global Impact Statistics */}
        <div className="relative z-10 bg-gradient-to-r from-coffee via-amber-900 to-coffee py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="font-cormorant text-heading-lg text-white mb-6">Global Impact</h3>
            <h4 className="font-cookie text-2xl text-amber-200 mb-16">Two Decades of Excellence</h4>

            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <div className="text-5xl font-cormorant text-white mb-4">6</div>
                <div className="text-amber-200 font-lato text-lg mb-2">Global Offices</div>
                <p className="text-gray-300 font-lato text-sm">Strategic locations across Asia</p>
              </div>
              <div>
                <div className="text-5xl font-cormorant text-white mb-4">550K+</div>
                <div className="text-amber-200 font-lato text-lg mb-2">Monthly Production</div>
                <p className="text-gray-300 font-lato text-sm">Combined manufacturing capacity</p>
              </div>
              <div>
                <div className="text-5xl font-cormorant text-white mb-4">15+</div>
                <div className="text-amber-200 font-lato text-lg mb-2">Countries Served</div>
                <p className="text-gray-300 font-lato text-sm">International market presence</p>
              </div>
              <div>
                <div className="text-5xl font-cormorant text-white mb-4">2005</div>
                <div className="text-amber-200 font-lato text-lg mb-2">Since</div>
                <p className="text-gray-300 font-lato text-sm">Years of manufacturing excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
