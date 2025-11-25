"use client";

import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <HomePage />;
}
