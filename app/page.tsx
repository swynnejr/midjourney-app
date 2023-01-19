import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatIsPrompt,
  World,
} from "../sections";
import { exploreWorlds } from "../constants";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <div className="z-100">
        <Navbar />
      </div>
      <div className="z-10">
        <Hero />
      </div>

      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore exploreWorlds={exploreWorlds} />
      </div>
      <GetStarted />
      <div className="relative">
        <WhatIsPrompt />
        <div className="gradient-04 z-0" />
        <World />
      </div>
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
