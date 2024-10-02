"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";


interface Car {
  name: string;
  price: number;
  kilometers: string;
  image: string;
  year: number;
  make: string;
  bodyStyle: string;
  fuelType: string;
  odometer: number;
  engine: string;
  trim: string;
  features: string[];
}

const CarCard: React.FC<{ car: Car }> = ({ car }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
    <Image
                className="rounded w-full object-cover object-center mb-6 hover:rounded-lg"
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
              />
    <div className="p-4 flex-1">
      <h2 className="text-sm font-semibold text-gray-900">{car.name}</h2>
      <p className="text-gray-700">${car.price.toLocaleString()}</p>
      <p className="text-gray-500">{car.kilometers}</p>
      <p className="text-gray-500">Fuel Type: {car.fuelType}</p>
      <p className="text-gray-500">Odometer: {car.odometer} km</p>
      <p className="text-gray-500">Engine: {car.engine || 'N/A'}</p>
      <p className="text-gray-500">Trim: {car.trim}</p>
      <p className="text-gray-500">Features: {car.features.join(", ")}</p>
    </div>
  </div>
);

const carsData: Car[] = [
  {
    name: "2021 Tesla Model Y Standard",
    price: 33590,
    kilometers: "16,043 km",
    image:"https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    year: 2021,
    make: "Tesla",
    bodyStyle: "SUV",
    fuelType: "Electric",
    odometer: 16043,
    engine: "N/A",
    trim: "Standard",
    features: ["Bluetooth", "Navigation"],
  },
  {
    name: "2018 Toyota Corolla LE",
    price: 18790,
    kilometers: "86,527 km",
    image:"https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    year: 2018,
    make: "Toyota",
    bodyStyle: "Sedan",
    fuelType: "Gasoline",
    odometer: 86527,
    engine: "1.8L 4-cylinder",
    trim: "LE",
    features: ["Backup Camera", "Bluetooth"],
  },
  {
    name: "2021 Acura TLX A-SPEC SH-AWD",
    price: 32590,
    kilometers: "96,762 km",
    image:"https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
    year: 2021,
    make: "Acura",
    bodyStyle: "Sedan",
    fuelType: "Gasoline",
    odometer: 96762,
    engine: "2.0L Turbo",
    trim: "A-SPEC",
    features: ["Sunroof", "Remote Start"],
  },
  {
    name: "2023 Toyota RAV4 LE AWD",
    price: 31991,
    kilometers: "10,000 km",
    image:"https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small",
    year: 2023,
    make: "Toyota",
    bodyStyle: "SUV",
    fuelType: "Hybrid",
    odometer: 10000,
    engine: "2.5L 4-cylinder",
    trim: "LE",
    features: ["Lane Assist", "Blind Spot Monitoring"],
  },
];

const CarListing = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [priceRange, setPriceRange] = useState<number>(100000);
  const [year, setYear] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [bodyStyle, setBodyStyle] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [odometer, setOdometer] = useState<number>(1000000);
  const [engine, setEngine] = useState<string>("");
  const [trim, setTrim] = useState<string>("");

  const applyFilters = () => {
    let cars = carsData;

    if (priceRange) {
      cars = cars.filter((car) => car.price <= priceRange);
    }

    if (year) {
      if (year === "2020 and newer") {
        cars = cars.filter((car) => car.year >= 2020);
      } else if (year === "2015 - 2019") {
        cars = cars.filter((car) => car.year >= 2015 && car.year <= 2019);
      } else if (year === "2010 - 2014") {
        cars = cars.filter((car) => car.year >= 2010 && car.year <= 2014);
      } else if (year === "Older") {
        cars = cars.filter((car) => car.year < 2010);
      }
    }

    if (make) {
      cars = cars.filter((car) => car.make === make);
    }

    if (bodyStyle) {
      cars = cars.filter((car) => car.bodyStyle === bodyStyle);
    }

    if (fuelType) {
      cars = cars.filter((car) => car.fuelType === fuelType);
    }

    if (odometer < 1000000) {
      cars = cars.filter((car) => car.odometer <= odometer);
    }

    if (engine) {
      cars = cars.filter((car) => car.engine === engine);
    }

    if (trim) {
      cars = cars.filter((car) => car.trim === trim);
    }

    setFilteredCars(cars);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between px-10 py-8">
   <div className="md:w-3/4">
  <div className={`grid ${filteredCars.length === 0 ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"} gap-4`}>
    {filteredCars.length > 0 ? (
      filteredCars.map((car, index) => (
        <div className="min-w-[300px] items-center justify-center" key={index}>
          <CarCard car={car} />
        </div>
      ))
    ) : (
      <div className="flex items-center justify-center w-full h-[400px]">
        <div className="bg-gray-200 p-20 text-center">
          <p className="text-black">No cars found</p>
        </div>
      </div>
    )}
  </div>
</div>



      <div className="md:w-1/4 bg-gray-100 p-4 rounded-lg mt-4 md:mt-0">
        <h2 className="text-base text-black  font-bold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Price Range</label>
          <input
            type="range"
            min="0"
            max="100000"
            value={priceRange}
            onChange={(e) => {
              setPriceRange(parseInt(e.target.value));
              applyFilters();
            }}
            className="w-full"
          />
          <p className="text-sm text-gray-500">Up to ${priceRange.toLocaleString()}</p>
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Year</label>
          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              applyFilters();
            }}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option className="text-gray-900" value="">Any</option>
            <option className="text-gray-800" value="2020 and newer">2020 and newer</option>
            <option className="text-gray-800" value="2015 - 2019">2015 - 2019</option>
            <option className="text-gray-800" value="2010 - 2014">2010 - 2014</option>
            <option className="text-gray-800" value="Older">Older</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Make</label>
          <select
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              applyFilters(); 
            }}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option className="text-gray-900" value="">Any</option>
            <option className="text-gray-800" value="Tesla">Tesla</option>
            <option className="text-gray-800" value="Toyota">Toyota</option>
            <option className="text-gray-800" value="Nissan">Nissan</option>
            <option className="text-gray-800" value="Honda">Honda</option>
            <option className="text-gray-800" value="Acura">Acura</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Body Style</label>
          <select
            value={bodyStyle}
            onChange={(e) => {
              setBodyStyle(e.target.value);
              applyFilters();
            }}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option className="text-gray-900" value="">Any</option>
            <option className="text-gray-800" value="SUV">SUV</option>
            <option className="text-gray-800" value="Sedan">Sedan</option>
            <option className="text-gray-800" value="Truck">Truck</option>
            <option className="text-gray-800" value="Coupe">Coupe</option>
            <option className="text-gray-800" value="Hatchback">Hatchback</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Fuel Type</label>
          <select
            value={fuelType}
            onChange={(e) => {
              setFuelType(e.target.value);
              applyFilters();
            }}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option className="text-gray-900" value="">Any</option>
            <option className="text-gray-800" value="Gasoline">Gasoline</option>
            <option className="text-gray-800" value="Electric">Electric</option>
            <option className="text-gray-800" value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Odometer</label>
          <input
            type="number"
            value={odometer < 1000000 ? odometer : ""}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setOdometer(value > 0 ? value : 1000000); // Prevent negative values
              applyFilters();
            }}
            placeholder="Enter maximum kilometers"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Engine Type</label>
          <input
            type="text"
            value={engine}
            onChange={(e) => {
              setEngine(e.target.value);
              applyFilters();
            }}
            placeholder="e.g. 1.8L 4-cylinder"
            className="text-black w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black  text-sm font-semibold">Trim</label>
          <input
            type="text"
            value={trim}
            onChange={(e) => {
              setTrim(e.target.value);
              applyFilters();
            }}
            placeholder="e.g. LE"
            className="text-black w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CarListing;
