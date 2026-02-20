import About from "~/sections/Home-2/About";
import Blog from "~/sections/Home-2/Blog";
import Client from "~/sections/Home-3/Client";
import Contact from "~/sections/Home-2/Contact";
import Counter from "~/sections/Home-2/Counter";
import FAQ from "~/sections/Home-2/FAQ";
import Hero from "~/sections/Home-2/Hero";
import Portfolio from "~/sections/Home-2/Portfolio";
import Pricing from "~/sections/Home-2/Pricing";
import Process from "~/sections/Home-2/Process";
import Service from "~/sections/Home-2/Service";
import Testimonial from "~/sections/Home-1/Testimonial";
import Video from "~/sections/Home-2/Video";
import FooterFour from "~/sections/Common/Footer/FooterFour";
import Scroll from "~/sections/Common/Scroll";
import HeaderSix from "~/sections/Common/Header/HeaderSix";
import ClientTwo from "~/sections/Common/ClientTwo";

 

export default function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderSix />
      <Hero />
      <About />
      <Service />
      <Client />
      <FAQ />
      <Counter />
      <Process />
      <Video />
      <Portfolio />
      <Testimonial />
      {/* <Pricing />
      <Blog /> */}
      <ClientTwo />
      <FooterFour />
      <Scroll />
    </div>
  );
}
