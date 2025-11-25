"use client";
import {Metadata} from 'next'

export const metadata: Metadata={
  title:"Contact Exito Fasteners | Request a Manufacturing Quote",
  description:"Connect with Exito Fasteners' manufacturing experts today. Request a commercial quote, discuss custom development, or schedule a factory consultation."
}

export function ContactPage() {
  return (
    <div className="bg-stone-50 relative min-h-screen" style={{ fontFamily: 'Cormorant, serif' }}>
      {/* Fixed Left Sidebar - Global Presence */}
      <div id="global" className="sm:w-1/2 sm:fixed left-0 top-26 -z-50 bottom-0 bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center p-12 z-0">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl font-light text-amber-900 mb-6 tracking-wide">
            Global Presence
          </h1>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-2xl text-stone-600 font-light leading-relaxed">
            Exito operates across continents with precision manufacturing and dedicated service centers
          </p>
        </div>
      </div>

      {/* Right Side Scrollable Content */}
      <div className="sm:w-1/2 ml-auto relative z-10 bg-stone-50 min-h-screen">
        <div className="px-8 py-16">
          {/* Corporate Headquarters */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-stone-800 mb-4">Headquarters</h2>
              <div className="w-16 h-px bg-stone-400 mx-auto"></div>
            </div>

            <div className="bg-white border border-stone-200 p-12 text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 text-sm font-medium tracking-wider uppercase">
                  Corporate
                </span>
              </div>
              <h3 className="text-5xl font-light text-stone-800 mb-2">Exito Fasteners Head Office</h3>
              <div className="text-stone-600 text-2xl font-lato leading-relaxed space-y-1">
                <p>No.36, Pangiriwatta Mawatha,</p>
                <p>Mirihana, Colombo</p>
                <p>Sri Lanka.</p>
              </div>
            </div>
          </div>

          {/* Manufacturing Centers */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light text-stone-800 mb-6">Manufacturing Excellence</h2>
              <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
              <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
                State-of-the-art facilities delivering precision fasteners with uncompromising quality standards
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Factory 01 */}
              <div className="group bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
                <div className="p-12">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-block px-6 py-2 bg-amber-100 text-amber-800 text-sm font-medium tracking-wider uppercase">
                        Factory 01
                      </span>
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-5xl font-light text-amber-900 mb-3 group-hover:text-amber-800 transition-colors">
                      Exito Fasteners
                    </h3>
                    <p className="text-stone-500 text-lg tracking-wide uppercase mb-8 font-medium">Sri Lanka Manufacturing Hub</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-stone-50 p-6 rounded-sm">
                      <h4 className="text-stone-700 font-medium mb-3 uppercase tracking-wide text-sm">Location</h4>
                      <div className="text-stone-600 text-lg leading-relaxed">
                        <p>No.7/D/1, Akkara 10, Udammita Road</p>
                        <p>Ja Ela, Sri Lanka</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-stone-200">
                      <h4 className="text-stone-700 font-medium mb-4 uppercase tracking-wide text-sm">Contact</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <p className="text-2xl font-medium text-stone-800">+94 777 004 631</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <p className="text-lg text-stone-700">chaminda@exitofasteners.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-stone-200 py-8">
          <p className="text-heading-xl text-stone-500">
            Connecting craftsmanship across continents
          </p>
        </div>
      </div>
    </div>
  );
}
