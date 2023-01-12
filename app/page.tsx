import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Explore from "../components/Explore";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import WhatsNew from "../components/WhatsNew";
import World from "../components/World";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </main>
  );
}
