import CarList from "./components/Car-list";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rating from "./components/Rating";
import WhyUs from "./components/Why-Us";

export default function Home() {
  return (
   <div>
      <Header />
      <main className="">
        <Hero/>
      </main>
      {/* <Slider/> */}
      <CarList/>
      <Rating />
      <WhyUs />
      <Footer/>
      
      </div>
  );
}
