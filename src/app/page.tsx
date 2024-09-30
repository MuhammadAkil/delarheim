"use-client";
import { EmblaOptionsType } from "embla-carousel";
import CarList from "./components/Car-list";
import EmblaCarousel from "./components/Embla/EmblaCarousel";
import EmblaCarousel1 from "./components/EmblaCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rating from "./components/Rating";
import Slider from "./components/Slider";
import WhyUs from "./components/Why-Us";
import CarListCarousel from "./components/Embla/CarListCarousel";

export default function Home() {
const reviews = [
    {
      id: 1,
      date: "12 Sep 2023",
      name: "Carrie Brewer",
      photo:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
      rating: 5,
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    },
    {
      id: 2,
      date: "12 Sep 2023",
      name: "Carrie Brewer",
      photo:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
      rating: 4,
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    },
    {
      id: 3,
      date: "12 Sep 2023",
      name: "Carrie Brewer",
      photo:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
      rating: 3,
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    },
    {
      id: 4,
      date: "12 Sep 2023",
      name: "Carrie Brewer",
      photo:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
      rating: 5,
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    },
    {
      id: 5,
      date: "12 Sep 2023",
      name: "Carrie Brewer",
      photo:
        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80",
      rating: 4,
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. I filled mine with ice and water at 8:30am last week and drove to work sipping it.`,
    },
    // Additional reviews here...
  ];
 const cars = [
  {
    id:1,
    carName: "2018 Audi Q7",
    model: "3.0T Progressiv AWD",
    running: "61,394 km",
    discountPrice: "",
    actualPrice: "$33,790",
    biweekly: "$293 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:2,
    carName: "2020 Volkswagen Jetta",
    model: "Highline",
    running: "87,676 km",
    discountPrice: "$18,790",
    actualPrice: "$21,490",
    biweekly: "$150 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:3,
    carName: "2017 Lexus NX 200t",
    model: "Base AWD",
    running: "98,796 km",
    discountPrice: "",
    actualPrice: "$26,490",
    biweekly: "$253 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:4,
    carName: "2017 GMC Sierra 1500",
    model: "SLE Double Cab 4x4",
    running: "55,520 km",
    discountPrice: "$30,790",
    actualPrice: "$31,990",
    biweekly: "$309 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:5,
    carName: "2019 Honda Odyssey",
    model: "EX-L Navi",
    running: "104,626 km",
    discountPrice: "$30,990",
    actualPrice: "$34,590",
    biweekly: "$270 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:6,
    carName: "2022 Toyota Corolla",
    model: "LE w/ Upgrade Pkg",
    running: "83,585 km",
    discountPrice: "$22,990",
    actualPrice: "$23,990",
    biweekly: "$165 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:7,
    carName: "2020 Chevrolet Spark",
    model: "1LT",
    running: "17,642 km",
    discountPrice: "",
    actualPrice: "$18,490",
    biweekly: "$136 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:8,
    carName: "2023 Volkswagen Tiguan",
    model: "Black Edition AWD",
    running: "55,525 km",
    discountPrice: "$31,990",
    actualPrice: "$32,990",
    biweekly: "$226 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:9,
    carName: "2018 Mercedes-Benz C-Class",
    model: "C 300 4Matic AWD",
    running: "60,737 km",
    discountPrice: "$24,990",
    actualPrice: "$26,990",
    biweekly: "$220 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small",
    status: "SALE"
  },
  {
    id:10,
    carName: "2019 Volvo S60",
    model: "T6 AWD R-Design",
    running: "99,004 km",
    discountPrice: "",
    actualPrice: "$27,990",
    biweekly: "$233 /biweekly",
    hst: "HST & Licensing",
    imgSrc: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
    status: "SALE"
  },
];

  const OPTIONS: EmblaOptionsType = { align: 'start', }
  
  return (
   <div >
      <Hero/>
      <main className="bg-[#fafafa]"> 
        <CarListCarousel reviews={cars} options={OPTIONS}/>
        <div className="my-20">
    <div className="flex flex-wrap items-center justify-center w-full mb-10">
      <div className="relative lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col mx-auto justify-center">
  <h2 className="block w-full bg-gradient-to-b from-white to-white bg-clip-text text-[#3d3838] text-center font-bold text-3xl sm:text-4xl">
    4.8 stars, 2000+ reviews
  </h2>
  
  <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[140px] h-[2px] bg-[#6F68EC]">
  </span>
</div>

       
        </div>
        <EmblaCarousel reviews={reviews} options={OPTIONS} />
        </div>
        <WhyUs />
      </main>
      
      </div>
  );
}
