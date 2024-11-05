"use client";
import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import CarCard, { Car } from "../components/inventory/CarCard";
import { FaCar, FaCheckCircle, FaGasPump, FaTint, FaCarSide, FaClock, FaCheck, FaMoneyBillWave } from "react-icons/fa";
import { Dropdown, Button } from "rizzui";
import { RiCloseFill } from "react-icons/ri";
import RangeSlider from "../components/inventory/range-slider";
const carsData: Car[] = [
	{
		name: "Tesla Model Y Standard",
		price: 200000,
		kilometers: "16,043 km",
		image: "https://fastly.clutch.ca/8a929f37-b465-4687-886f-453bbb941266.jpg?class=extra_small",
		year: 2021,
		make: "Tesla",
		model: "Model Y",
		bodyStyle: "SUV",
		fuel: "Electric",
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
		fuel: "Gasoline",
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
		fuel: "Gasoline",
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
		fuel: "Hybrid",
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

interface Filters {
	make: string[];
	year: string[];
	model: string[];
	fuel: string[];
	bodystyle: string[];
	feature: string[];
	color: string[];
	trim: string[];
	under30K: string[];
	minValue: number;
	maxValue: number;
}

const Under30KOptions = [{ label: "Under30K", value: "Under30K" }];

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
	{ label: "Tesla", value: "tesla" },
	{ label: "Toyota", value: "toyota" },
	{ label: "Ford", value: "ford" },
	{ label: "Honda", value: "honda" },
	{ label: "BMW", value: "bmw" },
];

const modelOptions = [
	{ label: "Model Y", value: "Model Y" },
	{ label: "Corolla", value: "Corolla" },
	{ label: "TLX A-SPEC", value: "TLX A-SPEC" },
	{ label: "RAV4", value: "RAV4" },
];

const fuelOptions = [
	{ label: "Gasoline", value: "gasoline" },
	{ label: "Diesel", value: "diesel" },
	{ label: "Electric", value: "electric" },
	{ label: "Hybrid", value: "hybrid" },
];

const bodyStyleOptions = [
	{ label: "Sedan", value: "Sedan" },
	{ label: "SUV", value: "SUV" },
	// { label: 'Truck', value: 'truck' },
	// { label: 'Coupe', value: 'coupe' },
	// { label: 'Convertible', value: 'convertible' },
];

const featuresOptions = [
	{ label: "Bluetooth", value: "bluetooth" },
	{ label: "Backup Camera", value: "backup_camera" },
	{ label: "Navigation System", value: "navigation" },
	{ label: "Heated Seats", value: "heated_seats" },
	{ label: "Sunroof", value: "sunroof" },
];

const colorOptions = [
	{ label: "Red", value: "red" },
	{ label: "Blue", value: "blue" },
	{ label: "Black", value: "black" },
	{ label: "White", value: "white" },
	{ label: "Silver", value: "silver" },
];

const trimOptions = [
	{ label: "Base", value: "base" },
	{ label: "Sport", value: "sport" },
	{ label: "Luxury", value: "luxury" },
	{ label: "Performance", value: "performance" },
];

const transmissionOptions = [
	{ label: "Automatic", value: "automatic" },
	{ label: "Manual", value: "manual" },
	{ label: "CVT", value: "cvt" },
];

const CarListing = () => {
	const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [selectedFilter, setSelectedFilter] = useState<string>("");
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const [sortOrder, setSortOrder] = useState<string>("");
	const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
	const modalRef = useRef<HTMLDivElement | null>(null);

	const [selectedYearFilters, setSelectedYearFilters] = useState<string[]>([]);
	const [Under30K, setUnder30K] = useState<string[]>([]);
	const [selectedMakeFilters, setSelectedMakeFilters] = useState<string[]>([]);
	const [selectedModelFilters, setselectedModelFilters] = useState<string[]>([]);
	const [selectedFuelFilters, setselectedFuelFilters] = useState<string[]>([]);
	const [selectedBodyFilters, setselectedBodyFilters] = useState<string[]>([]);
	const [selectedFeatureFilters, setselectedFeatureFilters] = useState<string[]>([]);
	const [selectedColorFilters, setselectedColorFilters] = useState<string[]>([]);
	const [selectedTrimFilters, setselectedTrimFilters] = useState<string[]>([]);
	const [selectedTransmissionFilters, setselectedTransmissionFilters] = useState<string[]>([]);
	const [isClearDisabled, setIsClearDisabled] = useState(true);
	const [filteredResults, setFilteredResults] = useState<Car[]>(carsData);
	const [filtersApplied, setFiltersApplied] = useState(false);
	const [isUnder30KActive, setIsUnder30KActive] = useState<string[]>([]);
	const [selectedFilterCount, setSelectedFilterCount] = useState(0);

	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(1000000);

	const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(e.target.value), isUnder30KActive.length > 0 ? 30000 : maxValue);
		if (value < maxValue) {
			setMinValue(value);
			handleSearch();
		} else {
			setMinValue(maxValue - 1);
			handleSearch();
		}
	};
	const handleSliderChange = (values: number | number[]) => {
		if (Array.isArray(values)) {
			setMinValue(values[0]);
			setMaxValue(values[1]);
			handleSearch();
		}
	};

	const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(e.target.value), isUnder30KActive.length > 0 ? 30000 : 1000000);
		if (value > minValue) {
			setMaxValue(value);
			handleSearch();
		} else {
			setMaxValue(minValue + 1);
			handleSearch();
		}
	};

	const toggleFilterModal = () => {
		setOpenFilterModal(!openFilterModal);
	};
	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			setOpenFilterModal(false);
		}
	};

	const clearFilter = (filter: string) => {
		const [filterType, value] = filter.split(": ") as ["make" | "year" | "model" | "fuel" | "bodystyle" | "feature" | "color" | "transmission" | "trim" | "Under30K", string];

		setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter));

		const filterMapping: Record<"make" | "year" | "model" | "fuel" | "bodystyle" | "feature" | "color" | "transmission" | "trim" | "Under30K", [string[], React.Dispatch<React.SetStateAction<string[]>>]> = {
			make: [selectedMakeFilters, setSelectedMakeFilters],
			year: [selectedYearFilters, setSelectedYearFilters],
			model: [selectedModelFilters, setselectedModelFilters],
			fuel: [selectedFuelFilters, setselectedFuelFilters],
			bodystyle: [selectedBodyFilters, setselectedBodyFilters],
			feature: [selectedFeatureFilters, setselectedFeatureFilters],
			color: [selectedColorFilters, setselectedColorFilters],
			trim: [selectedTrimFilters, setselectedTrimFilters],
			transmission: [selectedTransmissionFilters, setselectedTransmissionFilters],
			Under30K: [Under30K, setUnder30K],
		};

		const [currentFilters, setFilters] = filterMapping[filterType];
		setFilters(currentFilters.filter((item) => item !== value));
	};

	const handleCardClick = (filterType: string, value: string | null = null) => {
		const formattedFilter = value ? `${filterType}: ${value}` : filterType;

		if (value && !selectedFilters.includes(formattedFilter)) {
			setSelectedFilters([...selectedFilters, formattedFilter]);
		}

		setSelectedFilter(formattedFilter);
		setOpenFilterModal(false);
		setOpenModal(true);
	};

	const handleSortChange = (order: "highest" | "lowest" | "newest" | "oldest") => {
		const sortedCars = [...filteredCars];

		if (order === "highest") {
			sortedCars.sort((a, b) => b.price - a.price);
		} else if (order === "lowest") {
			sortedCars.sort((a, b) => a.price - b.price);
		} else if (order === "newest") {
			sortedCars.sort((a, b) => b.year - a.year);
		} else if (order === "oldest") {
			sortedCars.sort((a, b) => a.year - b.year);
		}

		setFilteredCars(sortedCars);
		setSortOrder(order);
	};

	const capitalizeFirstLetter = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const handleMultiSelectChange = (value: string, filterType: "make" | "year" | "model" | "fuel" | "bodystyle" | "feature" | "color" | "transmission" | "trim" | "Under30K") => {
		const filterMapping: { [key: string]: string[] } = {
			make: selectedMakeFilters,
			year: selectedYearFilters,
			model: selectedModelFilters,
			fuel: selectedFuelFilters,
			bodystyle: selectedBodyFilters,
			feature: selectedFeatureFilters,
			color: selectedColorFilters,
			trim: selectedTrimFilters,
			transmission: selectedTransmissionFilters,
			Under30K: Under30K,
		};

		const filterSetterMapping: { [key: string]: React.Dispatch<React.SetStateAction<string[]>> } = {
			make: setSelectedMakeFilters,
			year: setSelectedYearFilters,
			model: setselectedModelFilters,
			fuel: setselectedFuelFilters,
			bodystyle: setselectedBodyFilters,
			feature: setselectedFeatureFilters,
			color: setselectedColorFilters,
			trim: setselectedTrimFilters,
			transmission: setselectedTransmissionFilters,
			Under30K: setUnder30K,
		};

		const currentFilters = filterMapping[filterType] || [];
		const setFilters = filterSetterMapping[filterType] || (() => {});

		const updatedFilters = currentFilters.includes(value) ? currentFilters.filter((item) => item !== value) : [...currentFilters, value];

		setFilters(updatedFilters);
		setIsClearDisabled(updatedFilters.length === 0);

		const formattedFilter = filterType === "Under30K" ? value : `${capitalizeFirstLetter(filterType)}: ${value}`;

		setSelectedFilters((prevFilters) => {
			const newFilters = updatedFilters.includes(value) ? [...prevFilters.filter((filter) => filter !== capitalizeFirstLetter(filterType) && filter !== formattedFilter), formattedFilter] : prevFilters.filter((filter) => filter !== formattedFilter);

			setSelectedFilterCount(newFilters.length);
			return newFilters;
		});

		if (filterType === "Under30K") {
			const isCurrentlyUnder30KActive = updatedFilters.length > 0;
			if (isCurrentlyUnder30KActive) {
				setMinValue(0);
				setMaxValue(30000);
				setIsUnder30KActive([...updatedFilters]);
			} else {
				setMinValue(0);
				setMaxValue(1000000);
				setIsUnder30KActive([]);
			}
		}
	};

	const handleClearSelection = () => {
		setSelectedFilters([]);

		setSelectedMakeFilters([]);
		setSelectedYearFilters([]);
		setselectedModelFilters([]);
		setselectedFuelFilters([]);
		setselectedBodyFilters([]);
		setselectedFeatureFilters([]);
		setselectedColorFilters([]);
		setselectedTrimFilters([]);
		setselectedTransmissionFilters([]);
		setUnder30K([]);

		setMinValue(0);
		setMaxValue(1000000);
		setIsUnder30KActive([]);
		setIsClearDisabled(true);

		setFilteredResults(carsData);
		setIsClearDisabled(true);

		setSelectedFilterCount(0);
	};

	const handleSearch = () => {
		const filters: Filters = {
			make: selectedMakeFilters,
			year: selectedYearFilters,
			model: selectedModelFilters,
			fuel: selectedFuelFilters,
			bodystyle: selectedBodyFilters,
			feature: selectedFeatureFilters,
			color: selectedColorFilters,
			trim: selectedTrimFilters,
			under30K: Under30K,
			minValue: minValue,
			maxValue: maxValue,
		};

		const results = performFiltering(filters);
		setFilteredResults(results);
		setFiltersApplied(true);
		setOpenModal(false);

		const currentCount = selectedMakeFilters.length + selectedYearFilters.length + selectedModelFilters.length + selectedFuelFilters.length + selectedBodyFilters.length + selectedFeatureFilters.length + selectedColorFilters.length + selectedTrimFilters.length + selectedTransmissionFilters.length + (Under30K.length > 0 ? 1 : 0);

		setSelectedFilterCount(currentCount);
	};

	const performFiltering = (filters: Filters): Car[] => {
		return carsData.filter((car: Car) => {
			const makeMatch = filters.make.length === 0 || filters.make.includes(car.make.toLowerCase());
			const yearMatch = filters.year.length === 0 || filters.year.includes(car.year.toString());
			const modelMatch = filters.model.length === 0 || filters.model.includes(car.model);
			const fuelMatch = filters.fuel.length === 0 || filters.fuel.includes(car.fuel);
			const bodystyleMatch = filters.bodystyle.length === 0 || filters.bodystyle.includes(car.bodyStyle);

			const featureMatch = filters.feature.length === 0 || filters.feature.every((feature) => car.features.includes(feature));
			const colorMatch = filters.color.length === 0 || filters.color.includes(car.color);
			const trimMatch = filters.trim.length === 0 || filters.trim.includes(car.trim);
			const priceMatch = car.price >= (filters.minValue || 0) && car.price <= (filters.maxValue || 1000000);

			const isUnder30K = car.price < 30000;
			const under30KMatch = filters.under30K.length === 0 || (filters.under30K.includes("Under30K") && isUnder30K);

			return makeMatch && yearMatch && modelMatch && fuelMatch && bodystyleMatch && featureMatch && colorMatch && trimMatch && priceMatch && under30KMatch;
		});
	};
	useEffect(() => {
		if (openFilterModal) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [openFilterModal]);

	return (
		<div className="flex flex-col md:flex-row lg:p-20 my-16 lg:mt-1 ">
			<div className="md:w-3/4 mx-6 lg:mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-y-5 lg:gap-y-1">
					<div className="relative inline-block text-center">
						<h2 className="block w-full bg-gradient-to-b from-white to-white text-[#3d3838] bg-clip-text font-bold text-3xl sm:text-4xl">
							{filteredResults.length} Vehicle{filteredResults.length !== 1 ? "s" : ""} for Sale
						</h2>
						<span className="absolute left-1/2 bottom-[-10px] transform -translate-x-[50%] w-[140px] h-[2px] bg-[#6F68EC]"></span>
					</div>
					<div className="flex items-center mt-2 md:mt-0">
						<label htmlFor="sortOptions" className="font-semibold text-sm text-right" style={{ width: "5em" }}>
							Sort by:
						</label>
						<Dropdown>
							<Dropdown.Trigger>
								<Button as="span" className="text-sm text-[#6b5fff] cursor-pointer bg-white flex justify-between items-center" style={{ width: "113px", whiteSpace: "nowrap" }}>
									{sortOrder === "highest" && <FaCheck className="text-[#6b5fff] inline" />}
									<span className="text-[#6b5fff]">{sortOrder === "highest" ? "Highest Price" : sortOrder === "lowest" ? "Lowest Price" : sortOrder === "oldest" ? "Oldest Year" : "Newest Year"}</span>
								</Button>
							</Dropdown.Trigger>
							<Dropdown.Menu className="bg-white py-3 text-sm" style={{ width: "113px" }}>
								<Dropdown.Item onClick={() => handleSortChange("highest")} className={`my-2 text-black flex items-center ${sortOrder === "highest" ? "text-[#6b5fff]" : ""}`} style={{ fontSize: "10px" }}>
									{sortOrder === "highest" && <FaCheck className="text-[#6b5fff] inline mr-1" style={{ fontSize: "10px" }} />}
									Highest Price
								</Dropdown.Item>

								<Dropdown.Item onClick={() => handleSortChange("lowest")} className={`my-2 text-black flex items-center ${sortOrder === "lowest" ? "text-[#6b5fff]" : ""}`} style={{ fontSize: "10px" }}>
									{sortOrder === "lowest" && <FaCheck className="text-[#6b5fff] inline mr-1" style={{ fontSize: "10px" }} />}
									Lowest Price
								</Dropdown.Item>

								<Dropdown.Item onClick={() => handleSortChange("oldest")} className={`my-2 text-black flex items-center ${sortOrder === "oldest" ? "text-[#6b5fff]" : ""}`} style={{ fontSize: "10px" }}>
									{sortOrder === "oldest" && <FaCheck className="text-[#6b5fff] inline mr-1" style={{ fontSize: "10px" }} />}
									Oldest Year
								</Dropdown.Item>

								<Dropdown.Item onClick={() => handleSortChange("newest")} className={`text-black flex items-center ${sortOrder === "newest" ? "text-[#6b5fff]" : ""}`} style={{ fontSize: "10px" }}>
									{sortOrder === "newest" && <FaCheck className="text-[#6b5fff] inline mr-1" style={{ fontSize: "10px" }} />}
									Newest Year
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="md:hidden mb-4 text-center">
						<button className="bg-[#6b5fff] text-white px-4 py-2 rounded hover:bg-[#6b5fff]/90" onClick={toggleFilterModal}>
							Filters
						</button>
					</div>
				</div>
				<div className="flex flex-wrap items-center gap-y-1.5 mt-[2.75rem] mb-6">
					{selectedFilters.map((filter) => (
						<div key={filter} className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 flex items-center capitalize">
							{filter}
							<button onClick={() => clearFilter(filter)} className="ml-2 text-blue-600 hover:text-blue-800" aria-label={`Remove filter: ${filter}`}>
								&times;
							</button>
						</div>
					))}
					{selectedFilters.length > 0 && (
						<button onClick={handleClearSelection} className="text-white px-2 py-1 rounded bg-[#6b5fff] hover:bg-[#6b5fff]/90" aria-label="Clear all filters">
							Clear All
						</button>
					)}
				</div>

				<div className={`grid ${filteredResults.length === 0 ? "justify-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>{filteredResults.length > 0 ? filteredResults.map((car, index) => <CarCard key={index} car={car} />) : <p className="text-center text-gray-700">No cars found with the selected filters.</p>}</div>
			</div>

			{openFilterModal && (
				<div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
					<div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-md mx-6 lg:mx-auto" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)" }}>
						<h2 className="text-2xl font-bold mb-2 text-center text-black">Filters</h2>
						<hr className="my-3" />

						<label htmlFor="priceRange" className="mb-2 font-semibold text-lg">
							Price
						</label>
						<RangeSlider minValue={minValue} maxValue={maxValue} onChange={handleSliderChange} min={0} max={100000} range />

						<div className="grid grid-cols-2 gap-3">
							<div className={`flex flex-col items-center justify-center p-4 rounded-md cursor-pointer  bg-gray-200`} onClick={() => handleCardClick("Under30K")}>
								<div className="text-blue-500 text-3xl mb-1">💰</div>
								<span className="text-sm text-center">Under 30K</span>
							</div>

							{["Year", "Model", "Fuel Type", "Body Style", "Features", "Color", "Trim", "Transmission"].map((filter) => (
								<div key={filter} className={`flex flex-col items-center text-center justify-center p-4 rounded-md cursor-pointer  bg-gray-200`} onClick={() => handleCardClick(filter)}>
									<div className="text-gray-700 text-3xl mb-1 ">
										{filter === "Year" && <FaClock />}
										{filter === "Model" && <FaCarSide />}
										{filter === "Fuel Type" && <FaGasPump />}
										{filter === "Body Style" && <FaCarSide />}
										{filter === "Features" && <FaCar />}
										{filter === "Color" && <FaTint />}
										{filter === "Trim" && <FaTint />}
										{filter === "Transmission" && <FaTint />}
									</div>
									<span className="text-sm text-center">{filter}</span>
								</div>
							))}
						</div>

						<div className="flex justify-end mt-4">
							<button onClick={toggleFilterModal} className="mt-4 p-2 text-white rounded-md hover:bg-[#6b5fff]/90 bg-[#6b5fff] hover:text-light">
								Close
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="md:w-1/4 md:flex flex-col gap-3 px-5 mt-4">
				<div className="hidden md:flex flex-col mb-4">
					<label htmlFor="priceRange" className="mb-2 font-semibold text-lg">
						Price
					</label>
					<RangeSlider minValue={minValue} maxValue={maxValue} onChange={handleSliderChange} min={0} max={100000} range />
				</div>

				<div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3">
					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Under30K")}>
						<div className="text-blue-500 text-3xl mb-1">💰</div>
						<span className="text-sm">Under 30K</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer  bg-gray-200`} onClick={() => handleCardClick("Year")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaClock />
						</div>
						<span className="text-sm">Year</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer  bg-gray-200`} onClick={() => handleCardClick("Make")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaCar />
						</div>
						<span className="text-sm">Make</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Model")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaCarSide />
						</div>
						<span className="text-sm">Model</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Fuel Type")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaGasPump />
						</div>
						<span className="text-sm">Fuel Type</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Body Style")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaCarSide />
						</div>
						<span className="text-sm">Body Style</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Features")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaCar />
						</div>
						<span className="text-sm">Features</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Color")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaTint />
						</div>
						<span className="text-sm">Color</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer  bg-gray-200`} onClick={() => handleCardClick("Trim")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaTint />
						</div>
						<span className="text-sm">Trim</span>
					</div>

					<div className={`flex flex-col items-center h-30 justify-center p-4 rounded-md cursor-pointer bg-gray-200`} onClick={() => handleCardClick("Transmission")}>
						<div className="text-gray-700 text-3xl mb-1">
							<FaTint />
						</div>
						<span className="text-sm">Transmission</span>
					</div>
				</div>

				{openModal && (
					<div className="fixed inset-0 flex items-center justify-center z-60 backdrop-blur-sm ">
						<div
							className="bg-white rounded-lg p-6 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 overflow-auto mt-20 mx-4 sm:mt-24 md:mt-16 lg:mt-14 mb-8"
							style={{
								boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
								maxHeight: "90vh",
							}}
						>
							<div className="flex justify-between items-center">
								<h2 className="text-2xl font-bold mb-4 text-center text-black">Filter: {selectedFilter}</h2>
								<button onClick={() => setOpenModal(false)} className="text-gray-500 hover:text-gray-800">
									<RiCloseFill size={24} />
								</button>
							</div>
							<hr className="my-3" />

							{selectedFilter === "Under30K" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Under 30K</h3>
									{Under30KOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${Under30K.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={Under30K.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "Under30K");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Year" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Year</h3>
									{yearOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedYearFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedYearFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "year");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Make" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Make</h3>
									{makeOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor cursor-pointer
                        ${selectedMakeFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedMakeFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "make");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Model" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Model</h3>
									{modelOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedModelFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedModelFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "model");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">13 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Fuel" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Fuel Type</h3>
									{fuelOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                      p-4 rounded-lg shadow-md cursor-pointer
                      ${selectedFuelFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                      hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedFuelFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "fuel");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Body Style" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Year</h3>
									{bodyStyleOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedBodyFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedBodyFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "bodystyle");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Features" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Features</h3>
									{featuresOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedFeatureFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedFeatureFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "feature");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Color" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Colors</h3>
									{colorOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedColorFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedColorFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "color");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Trim" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Trim</h3>
									{trimOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedTrimFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedTrimFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "trim");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
												/>
											</label>
											<p className="text-sm mt-2">123 Cars Available.</p>
										</div>
									))}
								</div>
							)}

							{selectedFilter === "Transmission" && (
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
									<h3 className="font-semibold text-lg col-span-full">Transmission</h3>
									{transmissionOptions.map((option) => (
										<div
											key={option.value}
											className={`flex flex-col items-start justify-between cursor-pointer transition-all duration-300 
                        p-4 rounded-lg shadow-md cursor-pointer
                        ${selectedTransmissionFilters.includes(option.value) ? "bg-pink-50 shadow-lg" : "bg-white"}
                        hover:shadow-xl`}
										>
											<label className="flex justify-between items-center w-full cursor-pointer">
												<span className="text-gray-800">{option.label}</span>
												<input
													type="checkbox"
													value={option.value}
													checked={selectedTransmissionFilters.includes(option.value)}
													onChange={() => {
														handleMultiSelectChange(option.value, "transmission");
													}}
													className="h-6 w-6 appearance-none checked:bg-blue-500 checked:border-transparent border-2 border-gray-400 rounded-full transition duration-200 ease-in-out cursor-pointer"
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
									className={`p-2 rounded-md text-black border border-solid border-black hover:border-0 hover:bg-[#6b5fff]/90 hover:text-white
                   ${isClearDisabled ? " cursor-not-allowed text-black" : " hover:border-white"}`}
									disabled={isClearDisabled}
								>
									Clear Selection
								</button>

								<button className="p-2 text-white rounded-md hover:bg-[#6b5fff]/90 bg-[#6b5fff] hover:text-light" onClick={handleSearch}>
									View ({selectedFilterCount}) {selectedFilterCount > 1 ? "Matches" : "Match"}
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
