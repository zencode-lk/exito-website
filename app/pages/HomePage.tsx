"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollStack from "@/app/components/ScrollStack";
import { ScrollStackItem } from "@/app/components/ScrollStackItem";
import FadeContent from "@/app/components/FadeContent";

export function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to radius values
  const radius = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const imageLogos = [
    {
      src: "https://cdn.exitofasteners.com/sedex.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "https://cdn.exitofasteners.com/mac.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "https://cdn.exitofasteners.com/kontoor.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];

  const imageUrls = [
    "https://cdn.exitofasteners.com/exitobeltcloseup.webp",
    "https://cdn.exitofasteners.com/exitobeltcollection.webp",
    "https://cdn.exitofasteners.com/exitoBeltcollection2.webp",
    "https://cdn.exitofasteners.com/exitoBeltCollection3.webp",
    "https://cdn.exitofasteners.com/exitobeltCollection4.webp",
    "https://cdn.exitofasteners.com/exitoBlackbelt.webp",
    "https://cdn.exitofasteners.com/exitoBrownBelt.webp",
    "https://cdn.exitofasteners.com/exitoBrownBeltCloseUp.webp",
    "https://cdn.exitofasteners.com/exitoWebbingBeltcollection.webp",
    "https://cdn.exitofasteners.com/exitoLeatherBrown.webp",
    "https://cdn.exitofasteners.com/exitoCollection.webp",
    "https://cdn.exitofasteners.com/ExitozbrownBeltCloseUp.webp",
    "https://cdn.exitofasteners.com/exitoWhiteBelt.webp",
    "https://cdn.exitofasteners.com/exitoLeatherBlack.webp",
    "https://cdn.exitofasteners.com/exitoLeatherBrown.webp",
  ];

  const stackRef = useRef<HTMLDivElement>(null);
  const isStackComplete = useRef(false);

  const handleStackComplete = () => {
    console.log("Stack animation complete");
    isStackComplete.current = true;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!stackRef.current || !isStackComplete.current) return;

      const stackElement = stackRef.current;
      const rect = stackElement.getBoundingClientRect();
      const isMouseOverStack =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isMouseOverStack) {
        // Check if we're at the bottom of the stack scroll
        const scrollContainer = stackElement.querySelector(
          ".scroll-stack-inner",
        )?.parentElement;
        if (scrollContainer) {
          const isAtBottom =
            scrollContainer.scrollTop + scrollContainer.clientHeight >=
            scrollContainer.scrollHeight - 10;
          const isAtTop = scrollContainer.scrollTop <= 10;

          if ((e.deltaY > 0 && isAtBottom) || (e.deltaY < 0 && isAtTop)) {
            // Allow the scroll to bubble up to the main page
            e.stopPropagation();
            window.scrollBy(0, e.deltaY);
          }
        }
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen flex justify-center bg-gray-700 overflow-hidden"
      >
        <div className="absolute flex w-full h-full items-center top-0 left-[5rem] opacity-100 z-100">
          <div className="relative w-1/2 ">
            <div className="flex flex-col gap-0 m-0">
              <h2 className="text-display-lg font-cormorant text-blush m-0">
                Crafted for
              </h2>
              <h2 className="text-display-md text-blush font-cookie m-0">
                Scale.
              </h2>
              <h2 className="text-display-lg font-cormorant pl-[10rem] text-blush m-0">
                Defined by
              </h2>
              <h2 className="text-display-md pl-[5rem] text-blush font-cookie m-0">
                Quality.
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full h-[75%] overflow-hidden">
          <img
            src="https://cdn.exitofasteners.com/landing-001.png"
            alt="Hero"
            // Added responsive scaling classes here
            className="w-full h-full object-cover object-center
                     scale-125 sm:scale-100 transition-transform duration-300 ease-in-out"
          />
        </div>
      </section>

      {/*certifications*/}
      <section className="flex justify-center items-center w-full min-h-screen overflow-hidden bg-blush md:p-10">
        {/* Container with the fixed width and height. */}
        <div
          className="w-11/12 md:min-h-[500px] rounded-lg -xl p-4 bg-cover sm:bg-size-[150%] drop-shadow-xl bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/leatherbg.png')",
          }}
        >
          {/* Main grid layout. */}
          <div className="flex flex-col h-full">
            <div className="p-4 text-coffee h-4/6">
              <h2 className="text-display-lg  font-bold font-cookie bg-gradient-to-r from-amber-900 via-amber-500 to-amber-900 bg-clip-text text-transparent">
                View Our Audited Excellence.
              </h2>
            </div>
            <div className="h-[700px] md:h-[400px] w-full grid h-2/6 grid-cols-1 md:grid-cols-3 gap-[1rem]">
              {/* --- Card 1: Sedex --- */}
              <div className="rounded-4xl border border-[1px] border-coffee rounded-xl overflow-hidden shadow-sm flex flex-col z-10 p-[2rem] items-center justify-evenly h-full">
                {/* Top space for logo */}
                <div className="h-20 w-full flex items-center justify-center ">
                  <img
                    src="https://cdn.exitofasteners.com/sedex.png"
                    alt="Sedex"
                    className="h-12 w-auto max-w-full object-contain sm:h-14 md:h-16 lg:h-20"
                  />
                </div>
                {/* Description Content */}
                <div className="">
                  <p className="text-caption-sm md:text-caption-lg font-lato z-100 text-emerald mt-2">
                    Certified by Sedex, demonstrating our commitment to
                    responsible and ethical business practices in global supply
                    chains.
                  </p>
                </div>
              </div>
              <div className="rounded-4xl border border-[1px] border-coffee rounded-xl overflow-hidden shadow-sm flex flex-col z-10 p-[2rem] items-center justify-evenly h-full">
                {/* Top space for logo */}
                <div className="h-20 w-full flex items-center justify-center text-sm text-gray-500 italic">
                  <img
                    src="https://cdn.exitofasteners.com/kontoor.png"
                    alt="Sedex"
                    className="h-12 w-auto max-w-full object-contain sm:h-14 md:h-16 lg:h-20"
                  />
                </div>
                {/* Description Content */}
                <div className="">
                  <p className="text-caption-sm md:text-caption-lg font-lato z-100 mix-blend-multiply mt-2">
                    Audited and approved supplier for Kontoor Brands, meeting
                    their stringent quality and manufacturing standards.
                  </p>
                </div>
              </div>
              <div className="rounded-4xl border border-[1px] border-coffee rounded-xl overflow-hidden shadow-sm flex flex-col z-10 p-[2rem] items-center justify-evenly h-full">
                {/* Top space for logo */}
                <div className="h-20 w-full flex items-center justify-center text-sm text-gray-500 italic">
                  <img
                    src="https://cdn.exitofasteners.com/mac.png"
                    alt="Sedex"
                    className="h-12 w-auto max-w-full object-contain sm:h-14 md:h-16 lg:h-20"
                  />
                </div>
                {/* Description Content */}
                <div className="">
                  <p className="text-caption-sm md:text-caption-lg font-lato z-100  sm:text-blush mt-2">
                    Audited and approved supplier for Mac, meeting their
                    stringent quality and manufacturing standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-blush items-center justify-center bg-blush w-full pt-6">
        <div
          className="
          w-[90vw]
          max-w-[1000px]
          aspect-[6/6]
          grid
          grid-cols-3
          grid-rows-6
          gap-[.5rem]
        "
        >
          {/* Trust, Ethics & Manufacturing Scale - Large top left */}

          <div className="trust col-span-2 row-span-2 bg-amber rounded-[1rem] overflow-hidden">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={100}
            >
              <img
                src="https://cdn.exitofasteners.com/bento/trust.png"
                alt="Trust"
                className="w-full h-full object-cover rounded-[1rem]"
              />
            </FadeContent>
          </div>

          {/* Specialized Machinery - Top right */}
          <div className="specialized col-span-1 row-span-2 bg-emerald rounded-[1rem]  overflow-hidden">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={250}
            >
              <img
                src="https://cdn.exitofasteners.com/bento/machine.png"
                alt="Specialized"
                className="w-full h-full object-cover rounded-[1rem]"
              />
            </FadeContent>
          </div>

          {/* BELTS repeated - Bottom left */}
          <div className="belts col-span-1 row-span-2 bg-coffee rounded-[1rem]  overflow-hidden  ">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={500}
            >
              <img
                src="https://cdn.exitofasteners.com/bento/belts.png"
                alt="Belts"
                className="w-full h-full object-contain rounded-[1rem]"
              />
            </FadeContent>
          </div>

          {/* Orange block - Center */}
          <div className="orange col-span-1 row-span-1 bg-amber rounded-[1rem] overflow-hidden ">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={750}
              className="flex w-full h-full overflow-hidden justify-center items-center "
            >
              <Link
                className="text-white text-[8rem] sm:text-[20rem] font-cookie"
                href="/about"
              >
                Exito
              </Link>
            </FadeContent>
          </div>

          {/* Advanced Italian Machinery - Right tall */}
          <div className=" advanced col-span-1 row-span-3 bg-amber rounded-[1rem] overflow-hidden ">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={1000}
            >
              <img
                src="https://cdn.exitofasteners.com/bento/italian.png"
                alt="Advanced"
                className="w-full h-full object-contain rounded-[1rem]"
              />
            </FadeContent>
          </div>

          {/* Your Brand, Our Craft - Bottom center */}
          <div className="your-brand  col-span-1 row-span-2 bg-emerald rounded-[1rem] overflow-hidden ">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={1250}
            >
              <img
                src="https://cdn.exitofasteners.com/bento/brand.png"
                alt="Your Brand"
                className="w-full h-full  object-contain rounded-[1rem]"
              />
            </FadeContent>
          </div>

          {/* Let's Talk - Bottom left */}
          <div className="lets-talk col-span-1 row-span-1 bg-amber rounded-[1rem] overflow-hidden ">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              threshold={0.1}
              delay={1500}
              className="flex w-full h-full justify-center items-center"
            >
              <h3 className="text-blush text-heading-md  font-cormorant">
                Let's Talk
              </h3>
            </FadeContent>
          </div>
        </div>
      </section>
      <section className="bg-blush w-full min-h-screen">
        <div className="relative w-[90vw] max-w-[1000px] mx-auto">
          <div className="absolute w-full flex flex-col leading-none justify-center items-center ">
            <h2 className="text-display-md font-cormorant ">Brand Solutions</h2>
            <p className="text-body-xl text-cognac font-cookie  leading-none">
              Precision Leather Manufacturing for Global Brands.
            </p>
          </div>

          <div className="h-screen w-full" ref={stackRef}>
            <ScrollStack
              onStackComplete={handleStackComplete}
              className="h-screen w-[100px] scrollbar-hide"
              useWindowScroll={false}
              itemDistance={10}
              itemScale={0.05}
              itemStackDistance={20}
              stackPosition="20%"
              scaleEndPosition="10%"
              baseScale={0.9}
              rotationAmount={0}
              blurAmount={0.5}
            >
              <ScrollStackItem itemClassName="bg-coffee h-[350px] sm:h-[400px]">
                <div className="w-full h-full flex flex-row justify-between items-center">
                  <img
                    src="https://cdn.exitofasteners.com/bento/belts.png"
                    alt="Zipper"
                    className="w-5/12 h-full object-cover rounded-[2rem]"
                  />
                  <div className="flex flex-col h-full p-4 w-full justify-between p-[1rem]">
                    <h2 className="text-heading-lg font-cormorant text-blush w-full text-left">
                      Leather Waste Solutions
                    </h2>
                    <p className="text-sm sm:text-body-sm font-lato text-blush text-justify sm:px-[1rem]">
                      We are currently focused on manufacturing 15,000–20,000
                      premium leather belts monthly for existing buyers in the
                      UK, Europe, and the USA, with capacity expansion aligned
                      to new partner demands.
                    </p>
                    <div className="relative flex flex-col">
                      <span className="text-xs sm:text-sm font-cormorent text-blush">
                        Learn More
                      </span>
                      <span className="relative left-[2rem] w-[50px] border border-blush mt-1 "></span>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="bg-amber h-[350px] sm:h-[400px]">
                <div className="w-full h-full flex flex-row justify-between items-center">
                  <img
                    src="https://cdn.exitofasteners.com/bento/belts.png"
                    alt="Zipper"
                    className="w-5/12 h-full object-cover rounded-[2rem]"
                  />
                  <div className="flex flex-col h-full  p-4 w-full gap-[1rem] p-[1rem]">
                    <h2 className="text-heading-lg font-cormorant text-blush w-full text-left">
                      Zipper Solutions
                    </h2>
                    <p className="text-sm sm:text-body-sm font-lato text-blush text-justify sm:px-[1rem]">
                      We are currently focused on manufacturing 15,000–20,000
                      premium leather belts monthly for existing buyers in the
                      UK, Europe, and the USA, with capacity expansion aligned
                      to new partner demands.
                    </p>
                    <div className="relative flex flex-col">
                      <span className="text-xs sm:text-sm font-cormorent text-blush">
                        Learn More
                      </span>
                      <span className="relative left-[2rem] w-[50px] border border-blush mt-1 "></span>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-emerald h-[350px] sm:h-[400px]">
                <div className="w-full h-full flex flex-row justify-between items-center">
                  <img
                    src="https://cdn.exitofasteners.com/bento/belts.png"
                    alt="Zipper"
                    className="w-5/12 h-full object-cover rounded-[2rem]"
                  />
                  <div className="flex flex-col h-full p-4 w-full gap-[1rem] p-[1rem]">
                    <h2 className="text-heading-lg font-cormorant text-blush w-full text-left">
                      Belt Solutions
                    </h2>
                    <p className="text-sm sm:text-body-sm font-lato text-blush text-justify sm:px-[1rem]">
                      We are currently focused on manufacturing 15,000–20,000
                      premium leather belts monthly for existing buyers in the
                      UK, Europe, and the USA, with capacity expansion aligned
                      to new partner demands.
                    </p>
                    <div className="relative flex flex-col">
                      <span className="text-xs sm:text-sm font-cormorent text-blush">
                        Learn More
                      </span>
                      <span className="relative left-[2rem] w-[50px] border border-blush mt-1 "></span>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>
      <section className="bg-white min-h-screen w-full">
        h
        <div className="py-[75px] mx-auto w-full">
          <div className="flex w-full flex-col md:flex-row md:h-[70vh]">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className={`
                     /* --- .item --- */

                     /* Mobile styles (default) */
                     h-40 w-full mb-2 md:mb-0

                     /* Desktop styles (md:) */
                     md:flex-1 md:h-full

                     /* Common styles */
                     bg-center bg-cover bg-no-repeat

                     /* Transition */
                     transition-[flex] ease-in-out duration-[800ms]

                     /* Desktop hover effect */
                     md:hover:flex-[7]
                   `}
                style={{
                  backgroundImage: `url('${url}')`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen"></section>
    </>
  );
}
