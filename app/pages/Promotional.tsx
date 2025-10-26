"use client";

import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/Card';

export function Promotional() {
  const partnershipBenefits = [
    {
      title: 'Quality Manufacturing',
      description: 'Advanced machinery from China and Italy ensures consistent quality across all production runs.',
    },
    {
      title: 'Flexible Production Scale',
      description: 'From custom orders to large-scale production, we adapt to your business requirements.',
    },
    {
      title: 'Global Reach',
      description: 'Serving clients in UK, Europe, USA, and throughout South Asia with reliable delivery.',
    },
    {
      title: 'Experienced Team',
      description: 'Skilled craftspeople combined with modern manufacturing expertise.',
    },
  ];

  const partnershipModels = [
    {
      title: 'Contract Manufacturing',
      description: 'We manufacture your designed products according to your exact specifications',
      features: [
        'Your designs, our production facilities',
        'Quality control as per your standards',
        'Flexible order quantities',
        'Reliable delivery schedules',
      ],
    },
    {
      title: 'Co-Branding Opportunities',
      description: 'Partner with us to create co-branded product lines for specific markets',
      features: [
        'Joint product development',
        'Combined brand strength',
        'Market-specific solutions',
        'Collaborative approach',
      ],
    },
    {
      title: 'Private Label Production',
      description: 'Complete private label solutions with our standard or custom designs',
      features: [
        'Ready-to-brand product catalog',
        'Custom packaging design',
        'Quality assurance included',
        'Scalable production capacity',
      ],
    },
  ];

  const capabilities = [
    'Leather belts: 30,000-50,000 units per month',
    'Zippers: 500,000 units per month (Phase 1)',
    'Custom buckle design and manufacturing',
    'Advanced cutting and stitching',
    'Logo stamping and pattern work',
    'Quality control and inspection',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759310610775-b298f34f73aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MTM4Mjc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business partnership"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-white  text-heading-lg font-cormorant">Promotional Partnerships</h1>
            <p className="text-body-lg max-w-2xl font-cookie">
              Partner with WinTex for quality manufacturing and reliable service
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Your Manufacturing Partner</h2>
            <p className="text-gray-700 text-lg">
              WinTex offers comprehensive manufacturing solutions for garment accessories. With our specialized facility in Udammita, Jaela and global presence, we help brands bring their vision to life with quality and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership Models */}
        <section className="mb-20">
          <h2 className="mb-8">Partnership Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipModels.map((model, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-gray-900 mb-2">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="space-y-2">
                  {model.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Manufacturing Capabilities */}
        <section className="mb-20">
          <h2 className="mb-8">Our Manufacturing Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border border-gray-200">
              <h3 className="text-gray-900 mb-6">What We Offer</h3>
              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
              <h3 className="text-gray-900 mb-6">Our Facilities</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-900 mb-1">Udammita, Jaela Facility</div>
                  <div className="text-gray-600">2,500 sq. ft. specialized manufacturing</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Equipment</div>
                  <div className="text-gray-600">Advanced machinery from China and Italy</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Raw Materials</div>
                  <div className="text-gray-600">Premium leather from India & Europe, zipper materials from China</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Markets Served</div>
                  <div className="text-gray-600">UK, Europe, USA, Sri Lanka, Bangladesh, Pakistan, India</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-20">
          <h2 className="mb-8">How Our Partnership Works</h2>
          <Card className="p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-gray-900 mb-6">Partnership Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Initial Consultation</h4>
                      <p className="text-gray-600">
                        We discuss your requirements, specifications, and production needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Sample Development</h4>
                      <p className="text-gray-600">
                        Create prototypes and samples for your approval
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Production Planning</h4>
                      <p className="text-gray-600">
                        Configure production lines and schedule manufacturing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Quality Control</h4>
                      <p className="text-gray-600">
                        Rigorous inspection and quality assurance throughout production
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      5
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Delivery & Support</h4>
                      <p className="text-gray-600">
                        Timely delivery with ongoing support and service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzYxMzUzODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Quality control"
                  className="w-full h-full object-cover rounded border border-gray-200"
                />
              </div>
            </div>
          </Card>
        </section>

      </div>

      {/* Markets We Serve - Full Width Carousel */}
      <MarketsCarousel />
    </div>
  );
}
export function MarketsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const markets = [
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      color: "from-red-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      description: "Leading fashion brands and premium manufacturers",
      stats: { brands: "50+", years: "15+" }
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      color: "from-blue-500 to-yellow-500",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
      description: "Diverse European markets with quality focus",
      stats: { brands: "80+", years: "12+" }
    },
    {
      name: "USA",
      flag: "🇺🇸",
      color: "from-red-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
      description: "Innovation-driven American fashion industry",
      stats: { brands: "60+", years: "10+" }
    },
    {
      name: "Sri Lanka",
      flag: "🇱🇰",
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "Local manufacturing excellence and expertise",
      stats: { brands: "40+", years: "20+" }
    },
    {
      name: "Bangladesh",
      flag: "🇧🇩",
      color: "from-green-500 to-red-500",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
      description: "Growing textile and garment manufacturing hub",
      stats: { brands: "35+", years: "8+" }
    },
    {
      name: "Pakistan",
      flag: "🇵🇰",
      color: "from-green-600 to-white",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "Traditional craftsmanship meets modern production",
      stats: { brands: "25+", years: "6+" }
    },
    {
      name: "India",
      flag: "🇮🇳",
      color: "from-orange-500 to-green-600",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
      description: "Rich heritage in textiles and leather goods",
      stats: { brands: "70+", years: "18+" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % markets.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + markets.length) % markets.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, nextSlide]);

  return (
    <section className="w-full h-[800px] relative overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 "></div>
      </div>

      {/* Header */}
      <div className="absolute top-0 pt-8 left-0 right-0  z-20 ">
        <div className="text-center">
          <h2 className="text-heading-lg font-cormorant text-blush">
            Markets We Serve
          </h2>

          <p className="text-gray-400 font-cookie text-body-xl max-w-3xl mx-auto text-xl leading-relaxed px-4">
            WinTex serves diverse markets across multiple continents, providing quality garment accessories to leading brands worldwide.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {markets.map((market, index) => (
          <div key={market.name} className="w-full flex-shrink-0 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={market.image}
                alt={market.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${market.color} opacity-20`}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-8xl">{market.flag}</div>
                      <div>
                        <h3 className="text-heading-xl font-cormorant font-bold mb-2">{market.name}</h3>
                        <div className={`h-1 w-24 bg-gradient-to-r ${market.color} rounded-full`}></div>
                      </div>
                    </div>

                    <p className="text-2xl text-blue-100 leading-relaxed">
                      {market.description}
                    </p>

                    <div className="flex space-x-8">
                      <div className="text-center">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${market.color} bg-clip-text text-transparent`}>
                          {market.stats.brands}
                        </div>
                        <div className="text-blue-200 text-lg">Brand Partners</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${market.color} bg-clip-text text-transparent`}>
                          {market.stats.years}
                        </div>
                        <div className="text-blue-200 text-lg">Years Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Feature Card */}
                  <div className="lg:ml-auto">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <h4 className="text-body-lg font-cormorant text-white mb-6">Market Highlights</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${market.color}`}></div>
                          <span className="text-blue-100">Premium quality standards</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${market.color}`}></div>
                          <span className="text-blue-100">Reliable delivery network</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${market.color}`}></div>
                          <span className="text-blue-100">Local market expertise</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${market.color}`}></div>
                          <span className="text-blue-100">Custom solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {markets.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </section>
  );
}