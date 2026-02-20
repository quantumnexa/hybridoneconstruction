import About from "~/sections/Home-1/About";
import FooterFour from "~/sections/Common/Footer/FooterFour";
import Scroll from "~/sections/Common/Scroll";
import HeaderSix from "~/sections/Common/Header/HeaderSix";
import ClientTwo from "~/sections/Common/ClientTwo";
import Hero from "~/sections/Home-2/Hero-2";
import Testimonial from "~/sections/Home-1/Testimonial";
export default function AboutPage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderSix />
      <Hero/>
      <About />
      <Testimonial/>
      <ClientTwo />
      <FooterFour />
      <Scroll />
    </div>
  );
}
