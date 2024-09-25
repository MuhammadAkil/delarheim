import CarList from "./components/Car-list";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rating from "./components/Rating";
import Slider from "./components/Slider";
import WhyUs from "./components/Why-Us";

export default function Home() {
  return (
   <div >
      <Header />
      <main >
      <Hero/>
      <CarList/>
      <Rating />
      <WhyUs />
      </main>
      <Footer/>
      
      </div>
  );
}
