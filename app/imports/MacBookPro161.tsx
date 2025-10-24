// import imgBuilding96822253 from "figma:asset/5c6654d1350ea2747e94efb0be15cfbe9c2231f7.png";
// import imgScreenshotFrom20251023145627RemovebgPreview1 from "figma:asset/3fdda514fea8fd9b8a58c0d8f1a5403e1f9467c5.png";

function BackgroundImage() {
  return (
    <div className="absolute contents left-[-33px] top-[-349px]" data-name="background-image">
      <div className="absolute h-[515px] left-[-33px] top-[-349px] w-[1842px]" data-name="building-9682225 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-[325.56%] left-[-45.58%] max-w-none top-[35.8%] w-[145.62%] bg-gradient-to-br from-[#1B2E4C] via-[#2c4a6b] to-[#0f1a2e] opacity-90"></div>
        </div>
      </div>
      <div className="absolute h-[1080px] left-0 top-[162px] w-[1728px]" data-name="building-9682225 1">
        <div className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full bg-gradient-to-br from-[#1B2E4C] via-[#2c4a6b] to-[#0f1a2e] opacity-95"></div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="absolute contents font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] left-[896px] text-[20px] text-black text-center top-[60px]" data-name="links">
      <p className="absolute h-[38px] left-[968px] top-[60px] translate-x-[-50%] w-[144px]">About</p>
      <p className="absolute h-[38px] left-[1157px] top-[60px] translate-x-[-50%] w-[144px]">Projects</p>
      <p className="absolute h-[38px] left-[1346px] top-[60px] translate-x-[-50%] w-[144px]">Services</p>
      <p className="absolute h-[38px] left-[1535px] top-[60px] translate-x-[-50%] w-[144px]">Contact</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute contents left-[79px] top-[35px]" data-name="Navbar">
      <Links />
      <div className="absolute h-[88px] left-[79px] top-[35px] w-[169px]" data-name="Screenshot_from_2025-10-23_14-56-27-removebg-preview 1">
        <div className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full bg-gradient-to-r from-[#1B2E4C] to-[#D05F2A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
          K2AE
        </div>
      </div>
    </div>
  );
}

function HeroBtns() {
  return (
    <div className="absolute contents left-[675px] top-[429px]" data-name="hero-btns">
      <div className="absolute h-[70px] left-[675px] rounded-[25px] top-[429px] w-[196px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[25px]" />
      </div>
      <div className="absolute bg-[rgba(128,128,128,0.49)] h-[70px] left-[889px] rounded-[25px] top-[429px] w-[196px]" />
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[38px] leading-[normal] left-[987px] text-[20px] text-black text-center top-[452px] translate-x-[-50%] w-[144px]">Get A Quote</p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[38px] leading-[normal] left-[773px] text-[20px] text-black text-center top-[452px] translate-x-[-50%] w-[144px]">Contact</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[1271px] left-0 overflow-clip top-0 w-[1728px]">
      <BackgroundImage />
      <p className="absolute font-['Poiret_One:Regular',_sans-serif] h-[135px] leading-[normal] left-[864px] not-italic text-[100px] text-black text-center top-[244px] translate-x-[-50%] w-[1728px]">{`Engineering Tomorrow's Skyline.`}</p>
      <Navbar />
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[43px] leading-[normal] left-[864px] text-[25px] text-black text-center top-[379px] translate-x-[-50%] w-[1728px]">Innovative Design, Rigorous Compliance, and Collaborative Expertise in British Columbia</p>
      <HeroBtns />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 16' - 1">
      <Frame />
    </div>
  );
}