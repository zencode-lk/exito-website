"use client";

import { Hero } from "../components/Hero";
import { Building2, Home, Factory, Ruler } from "lucide-react";

export function BrandSolutions() {
  return (
    <div>
      <Hero title="Brand Solutions" subtitle="Crafting Your Brand's Identity" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <Home className="w-16 h-16 text-blush" />
          <h3 className="text-blush text-heading-lg font-cormorant">
            Lets Talk
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Factory className="w-16 h-16 text-blush" />
          <h3 className="text-blush text-heading-lg font-cormorant">
            Lets Talk
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Ruler className="w-16 h-16 text-blush" />
          <h3 className="text-blush text-heading-lg font-cormorant">
            Lets Talk
          </h3>
        </div>
      </div>
    </div>
  );
}
