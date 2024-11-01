"use client";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faExpand } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AWD from "../components/icons/awd";
import Android from "../components/icons/Andriod";
import Bluetooth from "../components/icons/bluetooth";
import AirBag from "../components/icons/side-impact-airbag";
import Logo from "../components/icons";

const images: string[] = ["/images/info-1.jpg", "/images/info-2.jpg", "/images/info-3.jpg", "/images/info-1.jpg", "/images/info-1.jpg", "/images/info-4.png", "/images/info-5.jpg", "/images/info-6.jpg"];
const vehicleDetails = [
	{ label: "Vehicle No", value: "ABC-1234" },
	{ label: "Trim", value: "LS" },
	{ label: "Drivetrain", value: "FWD" },
	{ label: "Transmission", value: "Manual" },
	{ label: "Engine", value: "1.8L I4" },
	{ label: "Mileage", value: "120,587 km" },
];
interface Accordion {
	title: string;
	content: string[];
}

const AccordionData: Accordion[] = [
	{
		title: "Exterior",
		content: ['Wheels: 17" x 7.0J Alloy', "Tires: P225/60R17 All-Season", "Steel Spare Wheel", "Clearcoat Paint", "Express Open/Close Sliding And Tilting Glass 1st And 2nd Row Sunroof w/Power Sunshade", "Body-Coloured Front Bumper", "Fixed Rear Window w/Fixed Interval Wiper, Heated Wiper Park and Defroster", "Deep Tinted Glass", "Auto On/Off Projector Beam Halogen Daytime Running Headlamps w/Delay-Off"],
	},
	{
		title: "Interior",
		content: [
			"3-Stage Heated Front Bucket Seats -inc: 8-way power adjustable driver's seat w/power lumbar support",
			"Driver Seat",
			"4-Way Passenger Seat -inc: Manual Recline and Fore/Aft Movement",
			"Manual Tilt/Telescoping Steering Column",
			"Heated Leather/Metal-Look Steering Wheel",
			"Dual Zone Front Automatic Air Conditioning",
			"Full Floor Console w/Covered Storage",
			"Day-Night Rearview Mirror",
			"Leather/Piano Black Gear Shifter Material",
			"Driver And Passenger Visor Vanity Mirrors w/Illumination",
		],
	},
	{
		title: "Entertainment",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
];

const features = [
	{ label: "AWD", icon: <AWD name="awd" /> },
	{ label: "Android Auto", icon: <Android name="android" /> },
	{ label: "Bluetooth", icon: <Bluetooth name="bluetooth" /> },
	{ label: "Side-Impact Air Bags", icon: <AirBag name="airbag" /> },
	{ label: "AWD", icon: <AWD name="awd" /> },
	{ label: "Android Auto", icon: <Android name="android" /> },
	{ label: "Bluetooth", icon: <Bluetooth name="bluetooth" /> },
	{ label: "Side-Impact Air Bags", icon: <AirBag name="airbag" /> },
];
export default function VehicleInfo() {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

	const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		setTimeout(() => {
			thumbnailRefs.current[currentIndex]?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}, 100);
	};

	const prevImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
		setTimeout(() => {
			// Scroll to the next image in the thumbnail list
			thumbnailRefs.current[currentIndex]?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}, 100); // Delay to allow state update
	};

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const openSlider = () => {
		setIsOpen(true);
	};

	const closeSlider = () => {
		setIsOpen(false);
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		// Close the slider when clicking outside the modal content
		if (e.currentTarget === e.target) {
			closeSlider();
		}
	};
	return (
		<div className="max-w-screen-xl mx-auto pt-10 pb-10 px-6">
			{/* Carousel and Vehicle Details Row */}
			<div className="flex flex-col gap-9 md:flex-row">
				{/* Carousel Section */}
				<div className="relative flex flex-col items-center w-full md:w-1/2 ">
					<Image className=" w-full rounded-lg transition-opacity duration-500 cursor-pointer" src={images[currentIndex]} alt={`Vehicle Image ${currentIndex + 1}`} width={500} height={300} onClick={openSlider} />

					{/* <span className="absolute  right-10 mt-[400px]">
						<FontAwesomeIcon icon={faExpand} className="text-4xl text-white" />
					</span> */}
					{/* Thumbnails */}
					<div className="flex mt-4 space-x-2 overflow-x-auto scrollbar-hide w-full">
						{images.map((src, index) => (
							<Image ref={(el: any) => (thumbnailRefs.current[index] = el)} key={index} className={`w-24 h-16 rounded-lg cursor-pointer ${currentIndex === index ? "border-2 border-[#6b5fff]" : ""}`} src={src} alt={`Thumbnail ${index + 1}`} width={100} height={60} onClick={() => setCurrentIndex(index)} />
						))}
					</div>

					{/* Next/Previous Buttons */}
					<div className="flex justify-between w-full -mt-14">
						<button className="absolute left-0 lg:-left-1 top-1/2 transform text-white -translate-y-1/2 rounded-full shadow-md h-10 w-10 bg-[#6b5fff]" onClick={prevImage}>
							&#10094;
						</button>
						<button className="absolute right-0 lg:-right-1 top-1/2 transform text-white -translate-y-1/2 rounded-full shadow-md h-10 w-10 bg-[#6b5fff]" onClick={nextImage}>
							&#10095;
						</button>
					</div>
				</div>

				{/* Vehicle Details Section */}
				<div className="w-full md:w-1/2 flex flex-col lg:ps-3 mt-11 lg:mt-0">
					<div className="relative inline-block mb-2">
						<h2 className="block w-ful text-[#3d3838] bg-clip-text font-semibold text-lg sm:text-2xl">Vehicle Info</h2>
					</div>

					<div className="grid grid-cols-2 gap-4 rounded-lg  bg-gray-200 p-6 ">
						{vehicleDetails.map((detail, index) => (
							<div key={index} className="flex justify-between border-b border-gray-400 py-2">
								<span className="font-medium text-black">{detail.label}:</span>
								<span className="text-gray-500 font-medium">{detail.value}</span>
							</div>
						))}
					</div>

					{/* Key Features Section */}
					<div className="mt-6 flex flex-col space-y-4 md:1/2 flex-wrap">
						<div className="relative inline-block ">
							<h2 className="block w-ful text-[#3d3838] bg-clip-text font-semibold text-lg sm:text-2xl">Key Features</h2>
						</div>

						<div className="grid grid-cols-2 lg:grid-cols-4 space-4 gap-3 size-full lg:size-auto">
							{features.map((feature, index) => (
								<div key={index} className="flex items-center space-y-1 flex-col  lg:max-w-[140px] justify-center text-center border border-gray-300 p-4 rounded-md w-full">
									{feature.icon}
									<span className="text-black w-[12ch]">{feature.label}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className=" mt-5 lg:-mt-5 grid grid-cols-[auto_auto_auto] gap-4 md:w-1/2 rounded-lg py-8 px-4 bg-[#6b5fff] hover:bg-[#6b5fff]/95 cursor-pointer">
				<div className="h-9 bg-white rounded-lg flex justify-center items-center p-2">
					<Logo />
				</div>
				<div className=" flex flex-col justify-center items-center text-center">
					<h2 className="text-sm font-semibold">Qualify for financing in minutes.</h2>
					<small>Start with our trusted Equifax Loan Application.</small>
				</div>
				<div className="h-9 bg-white rounded-lg flex justify-center items-center p-2">
					<Logo />
				</div>
			</div>

			<div className="w-full md:w-1/2 mt-10">
				<div className="relative inline-block text-center mb-2">
					<h2 className="block w-ful text-[#3d3838] bg-clip-text font-semibold text-lg sm:text-2xl">Vehicle Details</h2>
				</div>
				<div className="space-y-1">
					{AccordionData.map((item, index) => (
						<div key={index}>
							<button onClick={() => toggleAccordion(index)} className={`flex justify-between items-center w-full p-4 text-left rounded-md focus:outline-none ${openIndex === index ? "bg-[#6b5fff] rounded-b-none text-white" : "border !bg-[#f2f2f2] text-black"}`}>
								<span>{item.title}</span>
								<span className="text-black font-medium text-xl">{openIndex === index ? <FontAwesomeIcon icon={faMinus} className="text-white" /> : <FontAwesomeIcon icon={faPlus} />}</span>
							</button>
							{openIndex === index && (
								<div className="bg-[#f2f2f2] p-4 rounded-b-md">
									<div className="grid grid-cols-2 gap-x-3 rounded-lg">
										{item.content.map((detail, detailIndex) => (
											<div key={detailIndex} className="border-b  bg-white p-2">
												<div className="text-black">{detail}</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={handleOverlayClick}>
					<div className="relative w-full max-w-4xl h-[520px]" onClick={(e) => e.stopPropagation()}>
						<button className="absolute -top-5 right-16 text-white text-4xl bg-[#6b5fff] rounded-full h-10 w-10" onClick={closeSlider}>
							&times;
						</button>

						{/* Main Image */}
						<Image className="w-full h-[530px] object-contain rounded-lg" src={images[currentIndex]} alt={`Full Image ${currentIndex + 1}`} width={1000} height={600} />

						{/* Image Thumbnails Below the Main Image */}
						<div className="flex justify-center mt-4 space-x-2 rounded-lg overflow-x-auto">
							{images.map((src, index) => (
								<Image key={index} className={`w-24 h-16 rounded-lg cursor-pointer ${currentIndex === index ? "border-2 border-blue-500" : ""}`} src={src} alt={`Thumbnail ${index + 1}`} width={100} height={60} onClick={() => setCurrentIndex(index)} />
							))}
						</div>

						{/* Next and Previous Buttons */}
						<div className="flex justify-between -mt-80">
							<button onClick={prevImage} className="text-white h-10 w-10 rounded-full bg-[#6b5fff]">
								&#10094;
							</button>
							<button onClick={nextImage} className="text-white h-10 w-10 rounded-full bg-[#6b5fff]">
								&#10095;
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
