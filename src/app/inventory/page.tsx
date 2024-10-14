
"use client";
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import CarCard, { Car } from "../components/inventory/CarCard";
import { FaCar, FaCheckCircle, FaGasPump, FaTint, FaCarSide, FaClock, FaCheck, FaMoneyBillWave } from 'react-icons/fa';
import { Dropdown, Button } from 'rizzui';
import { RiCloseFill } from 'react-icons/ri';
import {Slider} from "@nextui-org/react";

const carsData: Car[] = [
  {
    name: "Tesla Model Y Standard",
    price: 33590,
    kilometers: "16,043 km",
    image: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    year: 2021,
    make: "Tesla",
    model: "Model Y",
    bodyStyle: "SUV",
    fuelType: "Electric",
    odometer: 16043,
    engine: "N/A",
    trim: "Standard",
    features: ["Bluetooth", "Navigation"],
    color: "Red",
    transmission: "Automatic",
  },
  {
    name: "Toyota Corolla LE",
    price: 18790,
    kilometers: "86,527 km",
    image: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    year: 2018,
    make: "Toyota",
    model: "Corolla",
    bodyStyle: "Sedan",
    fuelType: "Gasoline",
    odometer: 86527,
    engine: "1.8L 4-cylinder",
    trim: "LE",
    features: ["Backup Camera", "Bluetooth"],
    color: "Blue",
    transmission: "Manual",
  },
  {
    name: "Acura TLX A-SPEC SH-AWD",
    price: 32590,
    kilometers: "96,762 km",
    image: "https://fastly.clutch.ca/80f1d49e-2a2e-4a6d-8fe6-56b1a68e6dcf.jpg?class=extra_small",
    year: 2021,
    make: "Acura",
    model: "TLX A-SPEC",
    bodyStyle: "Sedan",
    fuelType: "Gasoline",
    odometer: 96762,
    engine: "2.0L Turbo",
    trim: "A-SPEC",
    features: ["Sunroof", "Remote Start"],
    color: "Black",
    transmission: "Automatic",
  },
  {
    name: "Toyota RAV4 LE AWD",
    price: 31991,
    kilometers: "10,000 km",
    image: "https://fastly.clutch.ca/8e5ff679-2441-4bd4-9c2e-2431fadaf48a.jpg?class=extra_small",
    year: 2023,
    make: "Toyota",
    model: "RAV4",
    bodyStyle: "SUV",
    fuelType: "Hybrid",
    odometer: 10000,
    engine: "2.5L 4-cylinder",
    trim: "LE",
    features: ["Lane Assist", "Blind Spot Monitoring"],
    color: "White",
    transmission: "CVT",
  },
];

interface Option {
  label: string;
  value: string;
}

const yearOptions = [
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
];

const makeOptions = [
  { label: 'Tesla', value: 'tesla' },
  { label: 'Toyota', value: 'toyota' },
  { label: 'Ford', value: 'ford' },
  { label: 'Honda', value: 'honda' },
  { label: 'BMW', value: 'bmw' },
];

const modelOptions = [
  { label: 'Model S', value: 'model_s' },
  { label: 'Model 3', value: 'model_3' },
  { label: 'Mustang', value: 'mustang' },
  { label: 'Civic', value: 'civic' },
  { label: 'X5', value: 'x5' },
];

const fuelTypeOptions = [
  { label: 'Gasoline', value: 'gasoline' },
  { label: 'Diesel', value: 'diesel' },
  { label: 'Electric', value: 'electric' },
  { label: 'Hybrid', value: 'hybrid' },
];

const bodyStyleOptions = [
  { label: 'Sedan', value: 'sedan' },
  { label: 'SUV', value: 'suv' },
  { label: 'Truck', value: 'truck' },
  { label: 'Coupe', value: 'coupe' },
  { label: 'Convertible', value: 'convertible' },
];

const featuresOptions = [
  { label: 'Bluetooth', value: 'bluetooth' },
  { label: 'Backup Camera', value: 'backup_camera' },
  { label: 'Navigation System', value: 'navigation' },
  { label: 'Heated Seats', value: 'heated_seats' },
  { label: 'Sunroof', value: 'sunroof' },
];

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Black', value: 'black' },
  { label: 'White', value: 'white' },
  { label: 'Silver', value: 'silver' },
];

const trimOptions = [
  { label: 'Base', value: 'base' },
  { label: 'Sport', value: 'sport' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'Performance', value: 'performance' },
];

const transmissionOptions = [
  { label: 'Automatic', value: 'automatic' },
  { label: 'Manual', value: 'manual' },
  { label: 'CVT', value: 'cvt' },
];

const CarListing = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [value, setValue] = useState<number>(50000);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [isUnder30KSelected, setIsUnder30KSelected] = useState(false);


  const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);
  const [selectedMakeFilters, setSelectedMakeFilters] = useState<string[]>([]);
  const [selectedModelFilters, setselectedModelFilters] = useState<string[]>([]);
  const [selectedFuelFilters, setselectedFuelFilters] = useState<string[]>([]);
  const [selectedBodyFilters, setselectedBodyFilters] = useState<string[]>([]);
  const [selectedFeatureFilters, setselectedFeatureFilters] = useState<string[]>([]);
  const [selectedColorFilters, setselectedColorFilters] = useState<string[]>([]);
  const [selectedTrimFilters, setselectedTrimFilters] = useState<string[]>([]);
  const [selectedTransmissionFilters, setselectedTransmissionFilters] = useState<string[]>([]);
  const [isClearDisabled, setIsClearDisabled] = useState(true);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(8500);

  const midPoint = 5000; 

  // useEffect(() => {
  //   const filteredData = carsData.filter(car => {
  //     return car.price >= minValue && car.price <= maxValue;
  //   });
  //   setFilteredCars(filteredData);
  // }, [minValue, maxValue]); 

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), midPoint); // Prevent minValue from going above the midpoint
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), midPoint); // Prevent maxValue from going below the midpoint
    setMaxValue(value);
  };

  const toggleFilterModal = () => {
    setOpenFilterModal(!openFilterModal);
  };

  const clearFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    if (filter === 'Under 30K') {
      setIsUnder30KSelected(false);
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilteredCars(carsData);
    setIsUnder30KSelected(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);

    const filtered = carsData.filter(car => car.price <= newValue);
    setFilteredCars(filtered);
  };

  const handleCardClick = (filter: string) => {
    if (filter === 'Under 30K') {
      setIsUnder30KSelected(true);
      setSelectedFilters([filter]);
      setSelectedOption("");
    } else {
      if (!isUnder30KSelected && !selectedFilters.includes(filter)) {
        setSelectedFilters([...selectedFilters, filter]);
      }
    }
    setSelectedFilter(filter);
    setOpenFilterModal(false);
    setOpenModal(true);
  };

  const handleSortChange = (order: "highest" | "lowest" | "newest" | "oldest") => {
    const sortedCars = [...filteredCars];

    if (order === "highest") {
      sortedCars.sort((a, b) => b.price - a.price);
    }
    else if (order === "lowest") {
      sortedCars.sort((a, b) => a.price - b.price);
    }
    else if (order === "newest") {
      sortedCars.sort((a, b) => b.year - a.year);
    }
    else if (order === "oldest") {
      sortedCars.sort((a, b) => a.year - b.year);
    }

    setFilteredCars(sortedCars);
    setSortOrder(order);
  };

  const handleMultiSelectChange = (
    value: string,
    filterType: 'make' | 'year' | 'model' | 'fueltype' | 'bodystyle' | 'feature' | 'color' | 'transmission' | 'trim'
  ) => {
    const filterMapping: { [key: string]: [string[], React.Dispatch<React.SetStateAction<string[]>>] } = {
      make: [selectedMakeFilters, setSelectedMakeFilters],
      year: [selectedYearFilters, setSelectedYearFilters],
      model: [selectedModelFilters, setselectedModelFilters],
      fuel: [selectedFuelFilters, setselectedFuelFilters],
      bodystyle: [selectedBodyFilters, setselectedBodyFilters],
      feature: [selectedFeatureFilters, setselectedFeatureFilters],
      color: [selectedColorFilters, setselectedColorFilters],
      trim: [selectedTrimFilters, setselectedTrimFilters],
      transmission: [selectedTransmissionFilters, setselectedTransmissionFilters],
    };

    const [currentFilters, setFilters] = filterMapping[filterType] || [[], () => { }];

    let updatedFilters: string[];
    if (currentFilters.includes(value)) {
      updatedFilters = currentFilters.filter(item => item !== value);
    }

    else {
      updatedFilters = [...currentFilters, value];
    }

    setFilters(updatedFilters);
    setIsClearDisabled(updatedFilters.length === 0);
  };

  const handleClearSelection = () => {
    setSelectedYearFilters([]);
    setSelectedFilters([]);
    setselectedModelFilters([]);
    setselectedBodyFilters([]);
    setselectedFeatureFilters([]);
    setselectedColorFilters([]);
    setselectedFuelFilters([]);
    setselectedTrimFilters([]);
    setselectedTransmissionFilters([]);
    setIsClearDisabled(true);
  };

  return (
    <div className="flex flex-col md:flex-row p-20">

      <div className="md:w-3/4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <p className="text-black font-bold w-full text-2xl md:text-4xl">
            {filteredCars.length} Vehicle{filteredCars.length !== 1 ? 's' : ''} for Sale
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <label
              htmlFor="sortOptions"
              className="font-semibold text-sm text-right"
              style={{ width: '5em' }}
            >
              Sort by:
            </label>
            <Dropdown>
              <Dropdown.Trigger>
                <Button
                  as="span"
                  className="text-sm text-pink-600 cursor-pointer bg-white flex justify-between items-center"
                  style={{ width: '113px', whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'highest' && <FaCheck className="text-pink-600 inline" />}
                  <span className="text-pink-600">
                    {sortOrder === 'highest'
                      ? 'Highest Price'
                      : sortOrder === 'lowest'
                        ? 'Lowest Price'
                        : sortOrder === 'oldest'
                          ? 'Oldest Year'
                          : 'Newest Year'}
                  </span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu className="bg-white py-3 text-sm" style={{ width: '113px' }}>
                <Dropdown.Item
                  onClick={() => handleSortChange('highest')}
                  className={`text-black flex items-center ${sortOrder === 'highest' ? 'text-pink-600' : ''
                    }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'highest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Highest Price
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => handleSortChange('lowest')}
                  className={`text-black flex items-center ${sortOrder === 'lowest' ? 'text-pink-600' : ''
                    }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'lowest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Lowest Price
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => handleSortChange('oldest')}
                  className={`text-black flex items-center ${sortOrder === 'oldest' ? 'text-pink-600' : ''
                    }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'oldest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Oldest Year
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => handleSortChange('newest')}
                  className={`text-black flex items-center ${sortOrder === 'newest' ? 'text-pink-600' : ''
                    }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'newest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Newest Year
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="md:hidden mb-4 text-center">
            <button
              className="bg-[#6b5fff] text-white px-4 py-2 rounded hover:bg-[#6b5fff]/90"
              onClick={toggleFilterModal}
            >
              Filters
            </button>
          </div>
        </div>


        <div className="flex flex-wrap items-center mb-4">
          {selectedFilters.map((filter) => (
            <div
              key={filter}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 flex items-center"
            >
              {filter}
              <button
                onClick={() => clearFilter(filter)}
                className="ml-2 text-blue-600 hover:text-blue-800"
                aria-label={`Remove filter: ${filter}`}
              >
                &times;
              </button>
            </div>
          ))}
          {selectedFilters.length > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-white px-2 py-1 rounded bg-[#6b5fff] hover:bg-[#6b5fff]/90"
              aria-label="Clear all filters"
            >
              Clear All
            </button>
          )}
        </div>


        <div
          className={`grid ${filteredCars.length === 0
            ? 'justify-center'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            }`}
        >
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => <CarCard key={index} car={car} />)
          ) : (
            <p className="text-center text-gray-700">
              No cars found with the selected filters.
            </p>
          )}
        </div>

      </div>

      {openFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md mx-auto"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-black">Filters</h2>
            <hr className="my-3" />
            <div className="grid grid-cols-3 gap-3">
              <div
                className={`flex flex-col items-center justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300' : 'bg-gray-200'}`}
                onClick={() => handleCardClick('Under 30K')}
              >
                <div className="text-blue-500 text-3xl mb-1">💰</div>
                <span className="text-sm">Under 30K</span>
              </div>

              {['Year', 'Model', 'Fuel Type', 'Body Style', 'Features', 'Color', 'Trim', 'Transmission'].map((filter) => (
                <div
                  key={filter}
                  className={`flex flex-col items-center justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
                  onClick={() => !isUnder30KSelected && handleCardClick(filter)}
                >
                  <div className="text-gray-700 text-3xl mb-1">
                    {filter === 'Year' && <FaClock />}
                    {filter === 'Model' && <FaCarSide />}
                    {filter === 'Fuel Type' && <FaGasPump />}
                    {filter === 'Body Style' && <FaCarSide />}
                    {filter === 'Features' && <FaCar />}
                    {filter === 'Color' && <FaTint />}
                    {filter === 'Trim' && <FaTint />}
                    {filter === 'Transmission' && <FaTint />}
                  </div>
                  <span className="text-sm">{filter}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={toggleFilterModal}
                className="mt-4 p-2 text-white rounded-md hover:bg-[#6b5fff]/90 bg-[#6b5fff] hover:text-light"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="md:w-1/4 md:flex flex-col gap-3 px-5 mt-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="priceRange" className="mb-2 font-semibold text-lg">
            Price
          </label>
          <div className="relative w-full max-w-xl mx-auto mt-8">
            <div
              className="absolute bg-pink-500 h-1 rounded-lg"
              style={{
                left: `${(minValue / 10000) * 100}%`,
                right: `${100 - (maxValue / 10000) * 100}%`,
              }}
            />

            <input
              type="range"
              min="0"
              max="10000"
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto"
              style={{
                zIndex: minValue > 0 ? 3 : 0,
              }}
            />

            <input
              type="range"
              min="0"
              max="10000"
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto"
              style={{
                zIndex: maxValue < 10000 ? 3 : 0,
              }}
            />

            <div className="relative z-5 flex justify-between mt-4">
              <span className="text-sm">Min: {minValue}</span>
              <span className="text-sm">Max: {maxValue}</span>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3">
          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300' : 'bg-gray-200'}`}
            onClick={() => handleCardClick('Under 30K')}
          >
            <div className="text-blue-500 text-3xl mb-1">💰</div>
            <span className="text-sm">Under 30K</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Year')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaClock /></div>
            <span className="text-sm">Year</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Make')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCar /></div>
            <span className="text-sm">Make</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Model')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCarSide /></div>
            <span className="text-sm">Model</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Fuel Type')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaGasPump /></div>
            <span className="text-sm">Fuel Type</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Body Style')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCarSide /></div>
            <span className="text-sm">Body Style</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Features')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCar /></div>
            <span className="text-sm">Features</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Color')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaTint /></div>
            <span className="text-sm">Color</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Trim')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaTint /></div>
            <span className="text-sm">Trim</span>
          </div>

          <div
            className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer ${isUnder30KSelected ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            onClick={() => !isUnder30KSelected && handleCardClick('Transmission')}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaTint /></div>
            <span className="text-sm">Transmission</span>
          </div>
        </div>

        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center z-60 backdrop-blur-sm">
            <div
              className="bg-white rounded-lg p-6 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 overflow-auto"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                maxHeight: '90vh',
              }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4 text-center text-black">
                  Filter: {selectedFilter}
                </h2>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <RiCloseFill size={24} />
                </button>
              </div>
              <hr className="my-3" />

              {selectedFilter === 'Year' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Year</h3>
                  {yearOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedYearFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedYearFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'year');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Make' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Make</h3>
                  {makeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                            p-4 rounded-lg shadow-md 
                            ${selectedMakeFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                            hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          name="make"
                          value={option.value}
                          checked={selectedMakeFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'make');
                          }}
                          className="form-radio text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Model' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Model</h3>
                  {modelOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedModelFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedModelFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'model');
                          }}
                          className="form-radio text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">13 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Fuel' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Fuet Type</h3>
                  {fuelTypeOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedFuelFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedFuelFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'fueltype');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Body Style' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Year</h3>
                  {bodyStyleOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedBodyFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedBodyFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'bodystyle');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Features' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Features</h3>
                  {featuresOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedFeatureFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedFeatureFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'feature');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Color' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Colors</h3>
                  {colorOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedColorFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedColorFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'color');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Trim' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Trim</h3>
                  {trimOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedTrimFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedTrimFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'trim');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedFilter === 'Transmission' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <h3 className="font-semibold text-lg col-span-full">Transmission</h3>
                  {transmissionOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md 
                        ${selectedTransmissionFilters.includes(option.value) ? 'bg-pink-50 shadow-lg' : 'bg-white'}
                        hover:shadow-xl`}
                    >
                      <label className="flex justify-between items-center w-full">
                        <span className="text-gray-800">{option.label}</span>
                        <input
                          type="radio"
                          value={option.value}
                          checked={selectedTransmissionFilters.includes(option.value)}
                          onChange={() => {
                            handleMultiSelectChange(option.value, 'transmission');
                          }}
                          className="form-checkbox text-pink-500 h-6 w-6"
                        />
                      </label>
                      <p className="text-sm mt-2">123 Cars Available.</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handleClearSelection}
                  className={`p-2 rounded-md 
                   ${isClearDisabled ? ' cursor-not-allowed text-gray-500 font-bold' : 'text-black font-bold border-b-2 border-purple-500'}`}
                  disabled={isClearDisabled}
                >
                  Clear Selection
                </button>

                <button
                  className="p-2 text-white rounded-md hover:bg-[#6b5fff]/90 bg-[#6b5fff] hover:text-light"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CarListing;
