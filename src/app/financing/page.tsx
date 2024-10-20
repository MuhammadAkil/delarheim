"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Accordion {
	title: string;
	content: string[];
}

interface form {
	title: string;
	content: string[];
}

const AccordionData: Accordion[] = [
	{
		title: "Choose your Starting Point",
		content: ['Wheels: 17" x 7.0J Alloy', "Tires: P225/60R17 All-Season", "Steel Spare Wheel", "Clearcoat Paint", "Express Open/Close Sliding And Tilting Glass 1st And 2nd Row Sunroof w/Power Sunshade", "Body-Coloured Front Bumper", "Fixed Rear Window w/Fixed Interval Wiper, Heated Wiper Park and Defroster", "Deep Tinted Glass", "Auto On/Off Projector Beam Halogen Daytime Running Headlamps w/Delay-Off"],
	},
	{
		title: "Get Pre-Qualified",
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
		title: "Shop with your terms",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
];

const faqAccordianData: form[] = [
	{
		title: "Does CarMax offer Financing?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "What does pre-qualification mean?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "How does pre-qualification work?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "Will pre-qualifying impact my credit score?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "What's the benefit of getting pre-qualified?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "This is my first time buying a car. Can I finance with CarMax?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "I don't have the best credit rating. Can I finance with CarMax?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "Can I use a co-buyer?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "What can I do to ensure I get the best terms I can?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
	{
		title: "Why do I have to specify a down payment?",
		content: ['Radio: AM/FM/HD/SiriusXM Audio System -inc: 8" touchscreen, 6 speakers, and voice recognition', "Apple CarPlay & Android Auto", "Bluetooth Wireless Connectivity", "Integrated Roof Antenna", "Speed Compensated Volume Control"],
	},
];

interface CustomCardProps {
	imageSrc: string;
	description: string;
	style?: React.CSSProperties;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageSrc, description, style }) => {
	return (
		<div className="w-full max-w-md h-full bg-white rounded-lg shadow-lg overflow-hidden">
			<img src={imageSrc} className="w-full h-55 mt-10" alt="Card image" />

			<div className="p-5 bg-gray-100 h-full">
				<Link className="text-2xl font-bold hover:underline" style={{ color: "#053361" }} href={"#"}>
					{description}
				</Link>
			</div>
		</div>
	);
};

const form = () => {
	const [activeButton, setActiveButton] = useState<number | null>(0);
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [currentHeading, setCurrentHeading] = useState<string>("How it Works");
	const [showCalculator, setShowCalculator] = useState<boolean>(false);
	const [openformIndex, setOpenformIndex] = useState<number | null>(null);

	const [vehiclePrice, setVehiclePrice] = useState<number>(0);
	const [downPayment, setDownPayment] = useState<number>(0);
	const [state, setState] = useState<string>("Kansas");
	const [creditScore, setCreditScore] = useState<string>("Good (670-739 FICO® Score)");
	const [apr, setApr] = useState<number>(12.95);
	const [termLength, setTermLength] = useState<number>(72);
	const [estimatedMonthlyPayment, setEstimatedMonthlyPayment] = useState<number | null>(null);
	const [activeSection, setActiveSection] = useState<string>("calculator");

	const handleButtonClick = (buttonIndex: number) => {
		setActiveButton(buttonIndex);
		if (buttonIndex === 1) {
			setCurrentHeading("Calculator");
			setShowCalculator(true);
		} else {
			setCurrentHeading(["How it Works", "Car Payment Calculator", "Car Max Auto Finance"][buttonIndex]);
			setShowCalculator(false);
		}
	};

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const toggleformAccordion = (index: number) => {
		setOpenformIndex(openformIndex === index ? null : index);
	};

	const calculateMonthlyPayment = (e: React.FormEvent) => {
		e.preventDefault();
		const totalLoanAmount = vehiclePrice - downPayment + 2900;
		const monthlyPayment = (totalLoanAmount * (apr / 100)) / 12 / (1 - Math.pow(1 + apr / 100 / 12, -termLength));
		setEstimatedMonthlyPayment(monthlyPayment);
		setActiveSection("payment");
	};

	return (
		<>
			<div className=" relative w-full flex flex-col items-center" style={{ minHeight: "10rem", overflow: "hidden" }}>
				{/* Background Image */}
				<Image src="/images/bg-image-faq.jpg" alt="Image Error" width={600} height={600} className="w-full opacity-25 h-[100svh] lg:h-auto object-cover opacity-75" style={{ maxHeight: "30rem" }} />

				{/* Heading */}
				<div className="absolute top-3 lg:top-[12rem] left-1/2 transform -translate-x-1/2">
					<h2 className="w-full text-white text-xl font-semibold lg:text-4xl text-center lg:-mt-32 text-shadow">
						Get Financing result without <br className="hidden md:block" /> impacting your credit
					</h2>
				</div>

				{/* Tabs Section */}
				<div className="absolute backdrop-xl top-[11rem] left-1/2 transform -translate-x-1/2 bg-white/50 py-5 px-2 md:p-3 rounded-lg lg:rounded-[5px] shadow-md w-[90%] sm:w-[80%] md:w-[70%] lg:w-[auto] mt-4">
					<div className="flex flex-wrap justify-center gap-3 md:space-x-4">
						{["How it Works", "Car Payment Calculator", "Car Max Auto Finance"].map((label, index) => (
							<button key={index} onClick={() => handleButtonClick(index)} className={`text-black w-[270px] lg:w-auto px-4 py-2 md:px-6 md:py-3 text-sm md:text-base transition duration-300 ${activeButton === index ? "bg-[#6b5fff] text-white rounded-[5px]" : "shadow-lg border bg-gray-100 hover:bg-gray-200 rounded-[5px]"}`}>
								{label}
							</button>
						))}
					</div>
				</div>

				{/* Button Section */}
				<div className="absolute top-[40rem] md:top-[19rem] left-1/2 min-w-[300px] transform -translate-x-1/2">
					<div className="flex justify-center items-center flex-col gap-3">
						<Link href={"/form"}>
							<button className="text-white rounded-md px-8 py-2 mt-2 transition duration-300 md:text-2xl text-xl hover:bg-[#6b5fff]/90 bg-[#6b5fff]">Get Pre-Qualified</button>
						</Link>
					</div>
				</div>

				<div className="absolute top-[10rem] md:top-[12rem] left-1/2 transform -translate-x-1/2 p-4 md:w-auto text-white md:block hidden sm:hidden" style={{ display: "block", visibility: "hidden" }}>
					<p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">{currentHeading}</p>
					<p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">Impacting Your Credit.</p>

					<div className="mt-6 text-center">
						<Link href={"/form"}>
							<button className="text-white rounded-md px-8 py-2 transition duration-300 md:text-2xl text-xl hover:bg-[#6b5fff]/90 bg-[#6b5fff]">Get Pre-Qualified</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="container mx-auto p-6">
				{showCalculator ? (
					<div className="py-10 px-6">
						<form className="mt-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg" onSubmit={calculateMonthlyPayment}>
							<h2 className="text-2xl font-bold text-black text-center cursor-pointer" onClick={() => setActiveSection("calculator")}>
								Car Payment Calculator
							</h2>

							<div className="flex justify-between mt-4 mb-4">
								<h2 className={`text-sm font-bold text-black cursor-pointer border-b-2 transition-colors duration-300 ${activeSection === "calculator" ? "border-blue-600" : "border-transparent"}`} onClick={() => setActiveSection("calculator")}>
									Monthly Payment
								</h2>

								<h2 className={`text-sm font-bold text-black cursor-pointer border-b-2 transition-colors duration-300 ${activeSection === "payment" ? "border-blue-600" : "border-transparent"}`} onClick={() => setActiveSection("payment")}>
									Vehicle Price
								</h2>
							</div>

							{activeSection === "calculator" && (
								<>
									<div className="mb-4">
										<label className="block text-black">Vehicle price</label>
										<input type="number" value={vehiclePrice} onChange={(e) => setVehiclePrice(Number(e.target.value))} placeholder="$25,000" className="text-black border-b-2 border-blue-600 p-2 rounded-none w-full focus:outline-none focus:ring-0" required step="0.01" />
									</div>

									<div className="mb-4">
										<label className="block text-black">Down payment</label>
										<input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} placeholder="$2,500" className="text-black  border-b-2 border-blue-600 p-2 rounded-none w-full focus:outline-none focus:ring-0" required step="0.01" />
									</div>

									<div className="mb-4">
										<label className="block text-black">State</label>
										<select value={state} onChange={(e) => setState(e.target.value)} className="text-black  border-b-2 border-blue-600 p-2 rounded-none w-full focus:outline-none focus:ring-0">
											<option value="Kansas">Kansas</option>
											<option value="Missouri">Missouri</option>
											<option value="Texas">Texas</option>
										</select>
									</div>

									<div className="mb-4">
										<label className="block text-black">Credit score</label>
										<select value={creditScore} onChange={(e) => setCreditScore(e.target.value)} className="text-black  border-b-2 border-blue-600 p-2 rounded-none w-full focus:outline-none focus:ring-0">
											<option value="Good (670-739 FICO® Score)">Good (670-739 FICO® Score)</option>
											<option value="Fair (580-669 FICO® Score)">Fair (580-669 FICO® Score)</option>
											<option value="Poor (579 or lower FICO® Score)">Poor (579 or lower FICO® Score)</option>
										</select>
									</div>

									<div className="mb-4">
										<label className="block text-black">APR</label>
										<input type="number" value={apr} onChange={(e) => setApr(Number(e.target.value))} placeholder="12.95%" className="text-black  border-b-2 border-blue-600 p-2 rounded-none w-full focus:outline-none focus:ring-0" required />
									</div>

									<div className="mb-4">
										<label className="block text-black">Term length (months)</label>
										<input type="number" value={termLength} onChange={(e) => setTermLength(Number(e.target.value))} placeholder="72" className="text-black  border-b-2 border-blue-600 p-2 rounded-none w-full focus:outline-none focus:ring-0" required />
									</div>

									<button type="submit" className="text-white px-4 py-2 rounded-md w-full transition duration-200" style={{ background: "#6b5fff" }}>
										Calculate
									</button>
								</>
							)}

							{activeSection === "payment" && estimatedMonthlyPayment !== null && (
								<div className="mt-6 bg-blue-500 p-4 rounded-md md:p-6 lg:p-8">
									<h3 className="text-md font-bold text-white text-left">Summary</h3>

									<div className="flex justify-between text-white text-sm md:text-base">
										<p>Estimated monthly payment:</p>
										<span>${estimatedMonthlyPayment.toFixed(2)}</span>
									</div>
									<div className="flex justify-between text-white text-sm md:text-base">
										<p>Vehicle price:</p>
										<span>${vehiclePrice}</span>
									</div>
									<div className="flex justify-between text-white text-sm md:text-base">
										<p>Down payment:</p>
										<span>-${downPayment}</span>
									</div>
									<div className="flex justify-between text-white text-sm md:text-base">
										<p>Est. tax, title & fees (KTS):</p>
										<span>+$2,900</span>
									</div>
									<div className="flex justify-between text-white text-sm md:text-base">
										<p>Total:</p>
										<span>${vehiclePrice - downPayment + 2900}</span>
									</div>

									<hr className="my-4 border-white" />

									<h3 className="text-lg font-bold text-white text-center mt-4 md:mt-6">Estimated Monthly Payment</h3>

									<p className="text-xl font-bold text-white text-center">${estimatedMonthlyPayment.toFixed(2)}</p>

									<button className="w-full px-4 py-2 text-white text-sm md:text-base rounded-md transition duration-200 mt-4" style={{ background: "#6b5fff" }}>
										View Details
									</button>
								</div>
							)}
						</form>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 py-10 items-start">
						<div className="flex justify-center items-center relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10">
							<Image src="/images/faq-vector.svg" alt="Image Error" width={600} height={400} className="w-full h-auto max-h-[30rem] object-contain" />
						</div>

						<div className="space-y-2 lg:px-10 px-2">
							<h2 className=" uppercase mb-4 block w-full bg-gradient-to-b from-white to-white text-[#3d3838] bg-clip-text font-bold text-2xl sm:text-3xl">Personalized results in minutes</h2>
							<p className="mb-6 text-1xl" style={{ color: "#053361" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
							</p>

							{AccordionData.map((item, index) => (
								<div key={index} className="border rounded-md shadow-sm mt-4">
									<button onClick={() => toggleAccordion(index)} className={`flex justify-between w-full p-4 text-left focus:outline-none`}>
										<span className="text-black">{item.title}</span>
										<span className="text-black">{openIndex === index ? "-" : "+"}</span>
									</button>
									{openIndex === index && (
										<div className="bg-gray-200 p-4">
											<ul>
												{item.content.map((contentItem, contentIndex) => (
													<li key={contentIndex} className="text-black py-1">
														{contentItem}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							))}

							<div className="mt-6 text-center">
								<div className="mt-12">
									{" "}
									{/* Add margin to the parent div */}
									<button className="text-white rounded-md px-8 py-2 transition duration-300 md:text-2xl text-xl" style={{ background: "#6b5fff" }}>
										Get Pre-Qualified
									</button>
									<p className="mt-4">It won't impact your credit score.</p>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="w-full px-4 sm:px-6 md:px-8 my-20">
					<h2 className=" uppercase mb-4 block w-full bg-gradient-to-b from-white to-white text-[#3d3838] bg-clip-text font-bold text-2xl sm:text-3xl">Car Financing Tips & Tools</h2>

					<div className="flex flex-wrap -mx-4">
						<div className="w-full md:w-1/3 px-4 mb-6">
							<CustomCard imageSrc="images/Image-1.png" description="Getting Pre-Qualified: Shop with Personalized Financing Terms" />
						</div>
						<div className="w-full md:w-1/3 px-4 mb-6">
							<CustomCard imageSrc="images/Image-2.jpg" description="How to Finance a Car: Everything You Need to Know" />
						</div>
						<div className="w-full md:w-1/3 px-4 mb-6">
							<CustomCard imageSrc="images/Image-3.jpg" description="How Much Car Can I Afford?" />
						</div>
					</div>
				</div>

				<div className="flex justify-center mp-5 ">
					<h2 className="text-center uppercase mb-4 block w-full bg-gradient-to-b from-white to-white text-[#3d3838] bg-clip-text font-bold text-2xl sm:text-3xl">Financing form's</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 py-10 items-start">
					<div className="flex justify-center items-center relative w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10">
						<Image src="/images/faq-vector.svg" alt="Image Error" width={600} height={400} className="w-full h-auto max-h-[30rem] object-contain" />
					</div>

					<div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">
						{faqAccordianData.map((item, index) => (
							<div key={index} className="border rounded-md shadow-sm mt-4">
								<button onClick={() => toggleformAccordion(index)} className="flex justify-between w-full p-4 text-left focus:outline-none">
									<span className="text-black">{item.title}</span>
									<span className="text-black">{openformIndex === index ? "-" : "+"}</span>
								</button>
								{openformIndex === index && (
									<div className="bg-gray-200 p-4 text-black">
										<ul>
											{item.content.map((contentItem, contentIndex) => (
												<li key={contentIndex} className="py-1 text-black">
													{contentItem}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default form;