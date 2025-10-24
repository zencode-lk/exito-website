// import imgBuilding from "figma:asset/5c6654d1350ea2747e94efb0be15cfbe9c2231f7.png";

interface HeroProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
  onNavigate?: (page: string) => void;
}

export function Hero({ title, subtitle, showButtons = false, onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/landing.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 md:py-28 lg:py-36">
        <h1 className="font-title mb-6 text-center text-black max-w-5xl text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="font-subtitle mb-8 text-center text-black max-w-4xl text-lg md:text-xl">
          {subtitle}
        </p>

        {showButtons && onNavigate && (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-[25px] border border-black bg-transparent px-8 py-4 transition-all hover:bg-black hover:text-white font-subtitle"
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-[25px] bg-[rgba(128,128,128,0.49)] px-8 py-4 transition-all hover:bg-[#D05F2A] hover:text-white font-subtitle"
            >
              Get A Quote
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
