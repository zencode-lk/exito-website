"use client";

import { Hero } from "../components/Hero";

import {
  Lightbulb,
  FileCheck,
  Users,
  Award,
  Target,
  Shield,
  Heart,
  Zap,
} from "lucide-react";

export function AboutPage() {
  return (
    <div>
      <Hero title="About Us" subtitle="Discover Our Journey" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <FileCheck className="w-16 h-16 text-blush" />
          <h3 className="text-blush text-heading-lg font-cormorant">
            Quality Assurance
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Users className="w-16 h-16 text-blush" />
          <h3 className="text-blush text-heading-lg font-cormorant">
            Customer Satisfaction
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Award className="w-16 h-16 text-blush" />
          <h3 className="text-blush text-heading-lg font-cormorant">
            Excellence in Design
          </h3>
        </div>
      </div>
    </div>
  );
}
