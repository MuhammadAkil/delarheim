"use client"
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faKey } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const images: string[] = ["/images/info-1.jpg", "/images/info-2.jpg", "/images/info-3.jpg", "/images/info-1.jpg", "/images/info-1.jpg", "/images/info-4.png", "/images/info-5.jpg", "/images/info-6.jpg"];
const vehicleDetails = [
	{ label: "Vehicle No", value: "ABC-1234" },
	{ label: "Trim", value: "LS" },
	{ label: "Drivetrain", value: "FWD" },
	{ label: "Transmission", value: "6-Speed Manual" },
	{ label: "Engine", value: "1.8L I4" },
	{ label: "Mileage", value: "120,587 km" },
];

interface DummyData {
	title: string;
	content: string;
}

const dummyData: DummyData[] = Array.from({ length: 10 }, (_, index) => ({
	title: `Lorem Ipsum ${index + 1}`,
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}));

export default function VehicleInfo() {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [openIndex, setOpenIndex] = useState<number | null>(null); // Track the open accordion index
	const [isOpen, setIsOpen] = useState<boolean>(false); // State to control slider visibility
	const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

	const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		setTimeout(() => {
			// Scroll to the previous image in the thumbnail list
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
		<div className="max-w-screen-xl mx-auto p-6">
			{/* Carousel and Vehicle Details Row */}
			<div className="flex flex-col md:flex-row">
				{/* Carousel Section */}
				<div className="relative flex flex-col items-center w-full md:w-1/2 md:pr-4">
					<Image className="w-full rounded-lg transition-opacity duration-500 cursor-pointer" src={images[currentIndex]} alt={`Vehicle Image ${currentIndex + 1}`} width={500} height={300} onClick={openSlider} />

					{/* Thumbnails */}
					<div className="flex mt-4 space-x-2 overflow-x-auto scrollbar-hide w-full">
						{images.map((src, index) => (
							<Image ref={(el: any) => (thumbnailRefs.current[index] = el)} key={index} className={`w-24 h-16 rounded-lg cursor-pointer ${currentIndex === index ? "border-2 border-[#6b5fff]" : ""}`} src={src} alt={`Thumbnail ${index + 1}`} width={100} height={60} onClick={() => setCurrentIndex(index)} />
						))}
					</div>

					{/* Next/Previous Buttons */}
					<div className="flex justify-between w-full -mt-14">
						<button className="absolute left-0 lg:-left-1 top-1/2 transform -translate-y-1/2 rounded-full shadow-md h-6 w-6 bg-[#6b5fff]" onClick={prevImage}>
							&#10094;
						</button>
						<button className="absolute right-0 lg:right-3 top-1/2 transform -translate-y-1/2 rounded-full shadow-md h-6 w-6 bg-[#6b5fff]" onClick={nextImage}>
							&#10095;
						</button>
					</div>
				</div>
				{/* Vehicle Details Section */}
				<div className="w-full md:w-1/2 flex flex-col lg:ps-3">
					<h3 className="text-lg font-semibold mb-4 text-black mt-3">Vehicle Info</h3>

					<div className="grid grid-cols-2 gap-4 rounded-lg  bg-gray-200 p-6 ">
						{vehicleDetails.map((detail, index) => (
							<div key={index} className="flex justify-between border-b border-gray-400 py-2">
								<span className="font-medium text-black">{detail.label}:</span>
								<span className="text-gray-500 font-medium">{detail.value}</span>
							</div>
						))}
					</div>

					{/* Key Features Section */}
					<div className="mt-6 flex flex-col space-y-4 ">
						<h3 className="text-lg font-semibold mb-2 text-black">Key Features</h3>
						<div className="flex space-x-4">
							<div className="flex items-center flex-col max-w-[100px] justify-center text-center border border-gray-300 p-4 rounded-md w-full md:w-auto">
								<FontAwesomeIcon icon={faSun} className="mr-2 text-gray-500" />
								<span className="text-black">Sunroof</span>
							</div>
							<div className="flex items-center flex-col max-w-[100px] justify-center text-center border border-gray-300 p-4 rounded-md w-full md:w-auto">
								<FontAwesomeIcon icon={faKey} className="mr-2 text-gray-500" />
								<span className="text-black">Keyless Entry</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full md:w-1/2 mt-20">
				<h3 className="text-lg text-black font-semibold mb-4">Vehicle Details</h3>
				<div className="space-y-4">
					{Array.from({ length: 8 }, (_, index: number) => (
						<div key={index}>
							<button
								onClick={() => toggleAccordion(index)}
								className={`flex justify-between items-center w-full p-4 text-left rounded-t-md focus:outline-none ${openIndex === index ? "bg-pink-500 text-white" : "bg-gray-300 text-black"}`} // Active pink, inactive grey
							>
								<span>Accordion Item {index + 1}</span>
								<span className="text-black">{openIndex === index ? "-" : "+"}</span>
							</button>
							{openIndex === index && (
								<div className="bg-gray-200 p-4 rounded-b-md">
									{/* Grey background for accordion content */}
									{/* Adding 2 columns in accordion content */}
									<div className="grid grid-cols-2 gap-4">
										{dummyData.map((item, itemIndex: number) => (
											<div key={itemIndex} className="border-b">
												<div className="font-semibold text-black">{item.title}</div>
												<div className="text-black">{item.content}</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Full Width Slider Modal */}
			{/* Full Width Slider Modal */}
			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={handleOverlayClick}>
					<div className="relative w-full max-w-4xl h-[520px]" onClick={(e) => e.stopPropagation()}>
						<button className="absolute -top-4 right-20 text-white text-4xl bg-[#6b5fff] rounded-full h-10 w-10" onClick={closeSlider}>
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
							<button onClick={prevImage} className="text-white h-6 w-6 rounded-full bg-[#6b5fff]">
								&#10094;
							</button>
							<button onClick={nextImage} className="text-white h-6 w-6 rounded-full bg-[#6b5fff]">
								&#10095;
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
