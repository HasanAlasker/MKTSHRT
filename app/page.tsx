import Hero from "./components/home/Hero";
import OutputBox from "./components/home/OutputBox";
import URLinput from "./components/home/URLinput";

export default function Home() {
  return (
    <div className="Screen flex flex-col items-center gap-20 relative pb-20">
      <div className="bg-grid-white fixed inset-0 -z-1"></div>
      <Hero />
      <URLinput />
      <OutputBox shortURL="alasker.dev"/>
    </div>
  );
}
