import About from "~/sections/Home-1/About";
import FooterFour from "~/sections/Common/Footer/FooterFour";
import HeaderSix from "~/sections/Common/Header/HeaderSix";
import Hero from "~/sections/Home-2/Hero-2";
import Testimonial from "~/sections/Home-1/Testimonial";
import ContactArea from "~/sections/Contact/ContactArea";
import ContactAreaTwo from "~/sections/Contact/ContactAreaTwo";
import ContactMap from "~/sections/Contact/ContactMap";
import Scroll from "~/sections/Common/Scroll";
export default function ContactPage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderSix />
      <Hero/>
     
      <ContactArea />
      <ContactAreaTwo />
     
      <FooterFour />
      <Scroll />
    </div>
  );
}
