"use client";
import { useEffect, useState } from "react";
import Hero from "./components/home/Hero";
import OutputBox from "./components/home/OutputBox";
import URLinput from "./components/home/URLinput";

export default function Home() {
  const [shortCode, setShortCode] = useState<string>();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [shortCode]);

  return (
    <div className="Screen flex flex-col items-center gap-20 relative pb-20">
      <div className="bg-grid-white fixed inset-0 -z-1"></div>
      <Hero />
      <div className="flex w-full justify-center items-center flex-col gap-14">
        <URLinput setShortLink={setShortCode} />
        {shortCode && <OutputBox shortCode={shortCode} />}
      </div>
    </div>
  );
}
