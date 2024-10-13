
"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import CarCard, { Car } from "../components/inventory/CarCard";
import { FaCar, FaCheckCircle, FaGasPump, FaTint, FaCarSide, FaClock, FaCheck } from 'react-icons/fa';
import { Dropdown, Button } from 'rizzui';

const carsData: Car[] = [
  {
    name: "Tesla Model Y Standard",
    price: 33590,
    kilometers: "16,043 km",
    image: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
    year: 2021,
    make: "Tesla",
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


const CarListing = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [value, setValue] = useState<number>(50000);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("");

  const clearFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilteredCars(carsData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);

    const filtered = carsData.filter(car => car.price <= newValue);
    setFilteredCars(filtered);
  };

  const handleCardClick = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
    setSelectedFilter(filter);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedFilter("");
    setSelectedOption("");
    setFilteredCars(carsData)
  };

  const renderDropdown = () => {
    if (selectedFilter === "Under 30K") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const priceRange = e.target.value;
            const filtered = carsData.filter((car) => {
              if (priceRange === "0-10k") return car.price < 10000;
              if (priceRange === "10k-20k") return car.price >= 10000 && car.price < 20000;
              if (priceRange === "20k-30k") return car.price >= 20000 && car.price < 30000;
              return true;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-pink" value="">Select a price range</option>
          <option className="text-pink" value="0-10k">0 - $10,000</option>
          <option className="text-pink" value="10k-20k">$10,000 - $20,000</option>
          <option className="text-pink" value="20k-30k">$20,000 - $30,000</option>
        </select>
      );
    }

    else if (selectedFilter === "Year") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedYear = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedYear === "" || car.year.toString() === selectedYear;
            });
            setFilteredCars(filtered);
            setOpenModal(false); // Close the modal after selection
          }}
        >
          <option className="text-black" value="">Select a year</option>
          <option className="text-black" value="2023">2023</option>
          <option className="text-black" value="2022">2022</option>
          <option className="text-black" value="2021">2021</option>
          <option className="text-black" value="2020">2020</option>
          <option className="text-black" value="2019">2019</option>
          <option className="text-black" value="2018">2018</option>
          <option className="text-black" value="2017">2017</option>
        </select>
      );
    }

    else if (selectedFilter === "Make") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedMake = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedMake === "" || car.make === selectedMake;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a make</option>
          <option className="text-black" value="Tesla">Tesla</option>
          <option className="text-black" value="Toyota">Toyota</option>
          <option className="text-black" value="Acura">Acura</option>
        </select>
      );


    }

    else if (selectedFilter === "Model") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-black text-black w-full"
          value={selectedOption}
          onChange={(e) => {
            const selectedModel = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedModel === "" || car.name.includes(selectedModel);
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a model</option>
          <option className="text-black" value="Model Y">Model Y</option>
          <option className="text-black" value="Corolla">Corolla</option>
          <option className="text-black" value="TLX">TLX</option>
          <option className="text-black" value="RAV4">RAV4</option>
        </select>
      );
    }

    else if (selectedFilter === "Body Style") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedBodyStyle = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedBodyStyle === "" || car.bodyStyle === selectedBodyStyle;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a body style</option>
          <option className="text-black" value="SUV">SUV</option>
          <option className="text-black" value="Sedan">Sedan</option>
          <option className="text-black" value="Hatchback">Hatchback</option>
        </select>
      );
    }

    else if (selectedFilter === "Features") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedFeature = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedFeature === "" || car.features.includes(selectedFeature);
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a feature</option>
          <option className="text-black" value="Bluetooth">Bluetooth</option>
          <option className="text-black" value="Navigation">Navigation</option>
          <option className="text-black" value="Backup Camera">Backup Camera</option>
          <option className="text-black" value="Sunroof">Sunroof</option>
          <option className="text-black" value="Remote Start">Remote Start</option>
        </select>
      );
    }

    else if (selectedFilter === "Fuel Type") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedFuelType = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedFuelType === "" || car.fuelType === selectedFuelType;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a fuel type</option>
          <option className="text-black" value="Gasoline">Gasoline</option>
          <option className="text-black" value="Electric">Electric</option>
          <option className="text-black" value="Hybrid">Hybrid</option>
        </select>
      );
    }

    else if (selectedFilter === "Trim") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedTrim = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedTrim === "" || car.trim === selectedTrim;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a trim</option>
          <option className="text-black" value="Standard">Standard</option>
          <option className="text-black" value="LE">LE</option>
          <option className="text-black" value="A-SPEC">A-SPEC</option>
        </select>
      );
    }

    else if (selectedFilter === "Color") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedColor = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedColor === "" || car.color === selectedColor;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select a color</option>
          <option className="text-black" value="Red">Red</option>
          <option className="text-black" value="Blue">Blue</option>
          <option className="text-black" value="Black">Black</option>
          <option className="text-black" value="White">White</option>
          <option className="text-black" value="Silver">Silver</option>
          <option className="text-black" value="Green">Green</option>
        </select>
      );
    }

    else if (selectedFilter === "Transmission") {
      return (
        <select
          className="mt-4 p-2 border rounded-md text-pink w-full hover:text-pink-500"
          value={selectedOption}
          onChange={(e) => {
            const selectedTransmission = e.target.value;
            const filtered = carsData.filter((car) => {
              return selectedTransmission === "" || car.transmission === selectedTransmission;
            });
            setFilteredCars(filtered);
            setOpenModal(false);
          }}
        >
          <option className="text-black" value="">Select transmission</option>
          <option className="text-black" value="Automatic">Automatic</option>
          <option className="text-black" value="Manual">Manual</option>
          <option className="text-black" value="CVT">CVT</option>
        </select>
      );
    }

    return null;
  };

  const handleSortChange = (sortOrder: "highest" | "lowest" | "newest" | "oldest") => {
    const sortedCars = [...filteredCars];

    if (sortOrder === "highest") {
      sortedCars.sort((a, b) => b.price - a.price);
    }
    else if (sortOrder === "lowest") {
      sortedCars.sort((a, b) => a.price - b.price);
    }
    else if (sortOrder === "newest") {
      sortedCars.sort((a, b) => b.year - a.year);
    }
    else if (sortOrder === "oldest") {
      sortedCars.sort((a, b) => a.year - b.year);
    }

    setFilteredCars(sortedCars);
    setSortOrder(sortOrder);
  };

  return (
    <div className="flex flex-col md:flex-row p-20">
      <div className="md:w-3/4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <p className="text-black font-bold w-full text-2xl md:text-4xl">
            {filteredCars.length} Vehicle{filteredCars.length !== 1 ? 's' : ''} for Sale
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <label htmlFor="sortOptions" className="font-semibold text-sm text-right" style={{ width: '5em' }}>
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
                    {sortOrder === 'highest' ? 'Highest Price' :
                      sortOrder === 'lowest' ? 'Lowest Price' :
                        sortOrder === 'oldest' ? 'Oldest Year' :
                          'Newest Year'}
                  </span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu className="bg-white py-3 text-sm" style={{ width: '113px' }}>
                <Dropdown.Item
                  onClick={() => handleSortChange('highest')}
                  className={`text-black flex items-center ${sortOrder === 'highest' ? 'text-pink-600' : ''}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'highest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Highest Price
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => handleSortChange('lowest')}
                  className={`text-black flex items-center ${sortOrder === 'lowest' ? 'text-pink-600' : ''}`}
                  style={{ whiteSpace: 'nowrap' }}
                >

                  {sortOrder === 'lowest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Lowest Price
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => handleSortChange('oldest')}
                  className={`text-black flex items-center ${sortOrder === 'oldest' ? 'text-pink-600' : ''}`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {sortOrder === 'oldest' && (
                    <FaCheck className="text-pink-600 inline mr-1 w-5 h-5" />
                  )}
                  Oldest Year
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => handleSortChange('newest')}
                  className={`text-black flex items-center ${sortOrder === 'newest' ? 'text-pink-600' : ''}`}
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
        </div>

        <div className="flex flex-wrap items-center mb-4">
          {selectedFilters.map((filter) => (
            <div key={filter} className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 flex items-center">
              {filter}
              <button onClick={() => clearFilter(filter)} className="ml-2 text-blue-600 hover:text-blue-800">
                x
              </button>
            </div>
          ))}
          {selectedFilters.length > 0 && (
            <button onClick={clearAllFilters} className="text-white px-2 py-1 rounded bg-[#6b5fff] hover:bg-[#6b5fff]/90">
              Clear All
            </button>
          )}
        </div>

        <div className={`grid ${filteredCars.length === 0 ? "justify-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => <CarCard key={index} car={car} />)
          ) : (
            <p className="text-center text-gray-700">No cars found with the selected filters.</p>
          )}
        </div>
      </div>


      <div className="md:w-1/4 flex flex-col gap-3 px-5 mt-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="priceRange" className="mb-2 font-semibold text-lg">Price</label>
          <input
            id="priceRange"
            type="range"
            min="0"
            max="100000"
            value={value}
            onChange={handleChange}
            className="w-64 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #ec4899 ${((value - 8000) / (100000 - 8000)) * 100}%, #e5e7eb ${((value - 8000) / (100000 - 0)) * 100}%)`,
            }}
          />
          <div className="flex justify-between w-64 mt-4 text-sm">
            <span>$8,000</span>
            <span>${value.toLocaleString()}</span>
            <span>$100,000</span>
          </div>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Under 30K")}
          >
            <div className="text-blue-500 text-3xl mb-1">💰</div>
            <span className="text-sm">Under 30K</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Year")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaClock /></div>
            <span className="text-sm">Year</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Make")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCar /></div>
            <span className="text-sm">Make</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Model")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCarSide /></div>
            <span className="text-sm">Model</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Fuel Type")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaGasPump /></div>
            <span className="text-sm">Fuel Type</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Body Style")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCarSide /></div>
            <span className="text-sm">Body Style</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Features")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaCar /></div>
            <span className="text-sm">Features</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Color")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaTint /></div>
            <span className="text-sm">Color</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Trim")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaTint /></div>
            <span className="text-sm">Trim</span>
          </div>

          <div
            className="flex flex-col items-center bg-gray-200 h-30 justify-center p-4 rounded-md cursor-pointer"
            onClick={() => handleCardClick("Transmission")}
          >
            <div className="text-gray-700 text-3xl mb-1"><FaTint /></div>
            <span className="text-sm">Transmission</span>
          </div>
        </div>


        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-lg p-8 min-w-[400px]" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)" }}>
              <h2 className="text-2xl font-bold mb-4 text-center text-black">Filter: {selectedFilter}</h2>
              <hr className="my-3" />
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique quia autem quidems.</p> */}
              {renderDropdown()}
              <div className="flex justify-end mt-4">
                <button onClick={closeModal} className="mt-4 p-2 text-white rounded-md hover:bg-[#6b5fff]/90 bg-[#6b5fff] hover:text-light ">
                  Cancel
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
