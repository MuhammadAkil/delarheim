// CarListing.tsx
"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
// import CarCard, { Car } from "./CarCard"; 
import FilterButton from "../components/inventory/FilterButton"; 

import FilterDialog from "../components/inventory/FilterDialog";
import { Button } from "@mui/material";
import CarCard,{ Car } from "../components/inventory/CarCard";

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
  },];

const CarListing = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [priceRange, setPriceRange] = useState<number>(100000);
  const [year, setYear] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [bodyStyle, setBodyStyle] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [engine, setEngine] = useState<string>("");
  const [trim, setTrim] = useState<string>("");

  const [openDialog, setOpenDialog] = useState<string | null>(null);

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

    if (engine) {
      cars = cars.filter((car) => car.engine.includes(engine));
    }

    if (trim) {
      cars = cars.filter((car) => car.trim.includes(trim));
    }

    setFilteredCars(cars);
  };

  const handleDialogOpen = (dialog: string) => setOpenDialog(dialog);
  const handleDialogClose = () => setOpenDialog(null);

  const handleSelectChange = (filterType: string, value: string) => {
    switch (filterType) {
      case "Year":
        setYear(value);
        break;
      case "Make":
        setMake(value);
        break;
      case "Body Style":
        setBodyStyle(value);
        break;
      case "Fuel Type":
        setFuelType(value);
        break;
      case "Engine":
        setEngine(value);
        break;
      case "Trim":
        setTrim(value);
        break;
      default:
        break;
    }
    applyFilters();
  };

  const clearAllFilters = () => {
    setYear("");
    setMake("");
    setBodyStyle("");
    setFuelType("");
    setEngine("");
    setTrim("");
    setPriceRange(100000);
    applyFilters();
  };

  const renderSelectedFilters = () => (
    <div className="flex flex-wrap gap-2 mb-4 p">
      {year && (
        <FilterButton
          label="Year"
          value={year}
          onRemove={() => {
            setYear("");
            applyFilters();
          }}
        />
      )}
      {make && (
        <FilterButton
          label="Make"
          value={make}
          onRemove={() => {
            setMake("");
            applyFilters();
          }}
        />
      )}
      {bodyStyle && (
        <FilterButton
          label="Body Style"
          value={bodyStyle}
          onRemove={() => {
            setBodyStyle("");
            applyFilters();
          }}
        />
      )}
      {fuelType && (
        <FilterButton
          label="Fuel Type"
          value={fuelType}
          onRemove={() => {
            setFuelType("");
            applyFilters();
          }}
        />
      )}
      {engine && (
        <FilterButton
          label="Engine"
          value={engine}
          onRemove={() => {
            setEngine("");
            applyFilters();
          }}
        />
      )}
      {trim && (
        <FilterButton
          label="Trim"
          value={trim}
          onRemove={() => {
            setTrim("");
            applyFilters();
          }}
        />
      )}
      {(year || make || bodyStyle || fuelType || engine || trim) && (
        <Button
          variant="contained"
          color="secondary"
          onClick={clearAllFilters}
        >
          Clear All
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row p-20">
      <div className="md:w-3/4">
        {renderSelectedFilters()}
        <div className={`grid ${filteredCars.length === 0 ? "justify-center" : "md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => <CarCard key={index} car={car} />)
          ) : (
            <p className="text-center text-gray-700">No cars found with the selected filters.</p>
          )}
        </div>
      </div>
      <div className="md:w-1/4 flex flex-col gap-4">
        <Button variant="outlined" onClick={() => handleDialogOpen("Year")}>
          Year: {year || "Select Year"}
        </Button>
        <FilterDialog
          open={openDialog === "Year"}
          onClose={handleDialogClose}
          value={year}
          options={["2020 and newer", "2015 - 2019", "2010 - 2014", "Older"]}
          onSelect={(value) => handleSelectChange("Year", value)}
          label="Year"
        />

        <Button variant="outlined" onClick={() => handleDialogOpen("Make")}>
          Make: {make || "Select Make"}
        </Button>
        <FilterDialog
          open={openDialog === "Make"}
          onClose={handleDialogClose}
          value={make}
          options={["Toyota", "Honda", "Ford", "Chevrolet"]}
          onSelect={(value) => handleSelectChange("Make", value)}
          label="Make"
        />

        <Button variant="outlined" onClick={() => handleDialogOpen("Body Style")}>
          Body Style: {bodyStyle || "Select Body Style"}
        </Button>
        <FilterDialog
          open={openDialog === "Body Style"}
          onClose={handleDialogClose}
          value={bodyStyle}
          options={["Sedan", "SUV", "Truck", "Coupe"]}
          onSelect={(value) => handleSelectChange("Body Style", value)}
          label="Body Style"
        />

        <Button variant="outlined" onClick={() => handleDialogOpen("Fuel Type")}>
          Fuel Type: {fuelType || "Select Fuel Type"}
        </Button>
        <FilterDialog
          open={openDialog === "Fuel Type"}
          onClose={handleDialogClose}
          value={fuelType}
          options={["Gasoline", "Diesel", "Electric", "Hybrid"]}
          onSelect={(value) => handleSelectChange("Fuel Type", value)}
          label="Fuel Type"
        />

        <Button variant="outlined" onClick={() => handleDialogOpen("Engine")}>
          Engine: {engine || "Select Engine"}
        </Button>
        <FilterDialog
          open={openDialog === "Engine"}
          onClose={handleDialogClose}
          value={engine}
          options={["V6", "V8", "Electric", "Hybrid"]}
          onSelect={(value) => handleSelectChange("Engine", value)}
          label="Engine"
        />

        <Button variant="outlined" onClick={() => handleDialogOpen("Trim")}>
          Trim: {trim || "Select Trim"}
        </Button>
        <FilterDialog
          open={openDialog === "Trim"}
          onClose={handleDialogClose}
          value={trim}
          options={["Base", "Premium"]}
          onSelect={(value) => handleSelectChange("Trim", value)}
          label="Trim"
        />
      </div>
    </div>
  );
};

export default CarListing;
