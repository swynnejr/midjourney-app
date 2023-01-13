import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
      <About />
        <div className="gradient-03 z-0" />
      <Explore />
      </div>
      <GetStarted />
      <div className="relative">
      <WhatsNew />
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
