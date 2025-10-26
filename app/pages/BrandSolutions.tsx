import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/Card';

export function BrandSolutions() {
  const beltFeatures = [
    'Premium leather sourcing from Indian and European tanneries',
    'Custom buckle design and manufacturing',
    'Multiple leather grades: Full-grain, Top-grain, Genuine',
    'Advanced cutting and stitching for consistency',
    'Hand-finishing for premium lines',
    'Custom embossing and branding capabilities',
    'Serving buyers in UK, Europe, and USA',
    'Initial capacity: 30,000 - 50,000 belts per month',
  ];

  const zipperFeatures = [
    'Metal, plastic, and invisible zipper production',
    'Production capacity: 500,000 zippers per month (Phase 1)',
    'Capacity doubling planned in Phase 2',
    'Custom pull designs and leather zipper trims',
    'Elasticated tapes for protective equipment',
    'Serving Sri Lanka, Bangladesh, Pakistan, and India markets',
    'For garment exporters and protective kit manufacturers',
    'Raw materials sourced from China',
  ];

  const machinery = [
    {
      category: 'Zipper Production', items: [
        'Tape Ironing and Gapping machines',
        'Bottom Stopper Welding machine',
        'Slider Inserting machines',
        'Top Stopper Attaching machine',
        'High Beam Ultrasonic Cutting machine',
      ]
    },
    {
      category: 'Belt Production', items: [
        'Leather Cutting and Pasting machines',
        'Gally Spa Italy Belt Edge machines',
        'Logo Stamping and Pattern Saw machines',
        'Button and Snap Attaching machines',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-amber text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-cormorant text-display-md">Our Solutions</h1>
          <p className="text-body-lg font-cookie text-gray-300 max-w-3xl">
            Comprehensive manufacturing solutions for garment accessories, delivering quality and precision in every product.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leather Belts Section */}
        <section className="mb-20">
          <h2 className="font-cormorant text-heading-lg">Leather Belts Manufacturing</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664286022007-9d2eb1003165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmVsdCUyMGJ1Y2tsZXxlbnwxfHx8fDE3NjEzODI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Leather belt manufacturing"
                className="w-full h-80 object-cover rounded border border-gray-200"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                We manufacture high-quality leather belts for our existing buyers in the UK, Europe, and the USA. Our facility combines skilled craftsmanship with advanced machinery to ensure durability, comfort, and timeless style.
              </p>

              <h4 className="text-gray-900 mb-4">Manufacturing Capabilities:</h4>
              <div className="space-y-2">
                {beltFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 bg-white border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-900 mb-4">Current Production</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-900 mb-1">Monthly Capacity</div>
                    <div className="text-gray-600">30,000 - 50,000 belts</div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Primary Markets</div>
                    <div className="text-gray-600">UK, Europe, USA</div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Leather Sources</div>
                    <div className="text-gray-600">Indian & European tanneries</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-gray-900 mb-4">Future Expansion</h4>
                <p className="text-gray-700">
                  Capacity expansion for leather belts will be strategically aligned with buyer demand in the subsequent phase, ensuring we maintain our high quality standards while scaling production.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Zippers & Tapes Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-cormorant text-heading-lg">Zippers & Elasticated Tapes Manufacturing</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                Our manufacturing unit focuses on producing zippers and elasticated tapes for personnel protective kit manufacturers and garment exporters across South Asia.
              </p>

              <h4 className="text-gray-900 mb-4">Production Excellence:</h4>
              <div className="space-y-2">
                {zipperFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl h-80" style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.5);'}}>
              <ImageWithFallback
                src="https://cdn.exitofasteners.com/zippers/zipperCollection3.webp"
                alt="Zipper production"
                className="w-full h-80 object-cover rounded-2xl border border-gray-200"
              />
            </div>
          </div>

          <Card className="p-8 bg-white border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gray-900 mb-4">Phase 1 Production</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-900 mb-1">Monthly Capacity</div>
                    <div className="text-gray-600">500,000 zippers</div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Target Markets</div>
                    <div className="text-gray-600">Sri Lanka, Bangladesh, Pakistan, India</div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Raw Materials</div>
                    <div className="text-gray-600">Sourced from China</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-gray-900 mb-4">Phase 2 Expansion</h4>
                <p className="text-gray-700 mb-4">
                  Our expansion plan includes doubling production capacity to meet growing demand from protective equipment manufacturers and garment exporters.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="text-gray-900 mb-1">Planned Capacity</div>
                  <div className="text-gray-600">1,000,000 zippers per month</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Manufacturing Facility & Equipment */}
        <section className="mb-20">
          <h2 className="mb-8 font-cormorant text-heading-lg">Our Udammita, Jaela Facility</h2>

          <Card className="p-8 border border-gray-200 mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <h4 className="text-gray-900 mb-2">Facility Size</h4>
                <p className="text-gray-600">2,500 sq. ft. specialized manufacturing space</p>
              </div>
              <div>
                <h4 className="text-gray-900 mb-2">Equipment Origin</h4>
                <p className="text-gray-600">Advanced machinery from China and Italy</p>
              </div>
              <div>
                <h4 className="text-gray-900 mb-2">Quality Focus</h4>
                <p className="text-gray-600">Precision and consistency in every product</p>
              </div>
            </div>

            <ImageWithFallback
              src="https://cdn.exitofasteners.com/exitoButtonMachine.webp"
              alt="Manufacturing facility"
              className="w-full h-64 object-cover rounded border border-gray-200"
            />
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {machinery.map((section, index) => (
              <Card key={index} className="p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-4">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Raw Materials Sourcing */}
        <section>
          <h2 className="mb-8">Raw Materials & Quality</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border border-gray-200">
              <h4 className="text-gray-900 mb-3">Premium Leather</h4>
              <p className="text-gray-600 mb-4">
                Sourced from certified tanneries in India and Europe, ensuring the highest quality standards for our belt production.
              </p>
              <div className="text-sm text-gray-500">India & Europe</div>
            </Card>

            <Card className="p-6 border border-gray-200">
              <h4 className="text-gray-900 mb-3">Zipper Materials</h4>
              <p className="text-gray-600 mb-4">
                High-quality zipper raw materials and components imported from reliable Chinese suppliers with proven track records.
              </p>
              <div className="text-sm text-gray-500">China</div>
            </Card>

            <Card className="p-6 border border-gray-200">
              <h4 className="text-gray-900 mb-3">Braided Tapes</h4>
              <p className="text-gray-600 mb-4">
                Durable braided tapes and elasticated materials for protective equipment and garment applications.
              </p>
              <div className="text-sm text-gray-500">China</div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
