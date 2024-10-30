"use client";

import { useState, useEffect, useRef } from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from 'next/navigation';

import Sidebar from "./Sidebar";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import router from "next/router";
import Logo from "./icons/logo";

type DropdownId = "Inventory" | "financing" | "home" | "SellOrTrade" | "contactUs" | "More";

const Header = () => {
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState<DropdownId | null>(null);

	const dropdownRefs: Record<DropdownId, React.RefObject<HTMLDivElement>> = {
		Inventory: useRef<HTMLDivElement | null>(null),
		home: useRef<HTMLDivElement | null>(null),
		SellOrTrade: useRef<HTMLDivElement | null>(null),
		financing: useRef<HTMLDivElement | null>(null),
		contactUs: useRef<HTMLDivElement | null>(null),
		More: useRef<HTMLDivElement | null>(null),
	};

	const toggleDropdown = (dropdownId: DropdownId) => {
		setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
	};

	const isDropdownOpen = (dropdownId: DropdownId) => {
		return openDropdown === dropdownId;
	};

	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const dropdownIds = Object.keys(dropdownRefs) as DropdownId[];

		if (
			dropdownIds.every((id) => {
				const dropdown = dropdownRefs[id].current;
				return !dropdown || !dropdown.contains(target);
			})
		) {
			setOpenDropdown(null);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	const isHomeActive = pathname === "/";
	const isInventoryActive = pathname === "/inventory";
	const isFinancingActive = pathname === "/financing";
	const isSellActive = pathname === "/sell-car";
	const router = useRouter();
	return (
		<>
			<div className="fixed w-full z-20">
				<div className="bg-black ">
					<div className="hidden  container mx-auto px-4 py-4 lg:flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-4">
						<div className="  !text-white text-base px-4 flex items-center rounded-xl">
							<FaMapMarkerAlt className="mr-2" />
							Carworld, Newyork 10012, USA
						</div>
						<div className=" !text-white text-base px-4 flex items-center rounded-xl">
							<FaPhoneAlt className="mr-2" />
							Phone: +44 567 890123
						</div>
						<div className=" !text-white text-base px-4 flex items-center rounded-xl">
							<FaClock className="mr-2" />
							Mon-Sat: 09.00am to 18.00pm
						</div>
					</div>
				</div>

				<header className="fixed w-full bg-white mx-auto px-20 h-[72px] p-5 items-center justify-between shadow-md lg:flex lg:items-center hidden lg:justify-between">
					<div className="flex items-start max-w-52">
						<a href="/">
							<Logo width={180} className="cursor-pointer" />
						</a>
					</div>

					<nav className="flex flex-grow-1 justify-center space-x-6">
						<div className="relative group" ref={dropdownRefs.home}>
							<a
								onClick={() => {
									router.push("/");
									setOpenDropdown(null);
								}}
								className={`flex items-center font-semibold text-[16px] transition-colors duration-300 cursor-pointer ${isHomeActive ? "text-[#0870d8]" : "text-black hover:text-[#0870d8]"}`}
							>
								Home
							</a>
						</div>

						<div className="relative group" ref={dropdownRefs.financing}>
							<Link href={"/financing"}>
								<button onClick={() => toggleDropdown("financing")} className={`flex items-center font-semibold text-[16px] transition-colors duration-300 ${isFinancingActive ? "text-[#0870d8]" : "text-black hover:text-[#0870d8]"}`}>
									Financing
								</button>
							</Link>
						</div>

						<div className="relative group">
							<Link href="/inventory">
								<button onClick={() => toggleDropdown("Inventory")} className={`flex items-center font-semibold text-[16px] transition-colors duration-300 ${isInventoryActive ? "text-[#0870d8]" : "text-black hover:text-[#0870d8]"}`}>
									Inventory
								</button>
							</Link>

							{isDropdownOpen("Inventory") && (
								<div className="z-10 p-4 absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out">
									<Link href="/security">
										<div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group cursor-pointer">
											<svg className="flex-shrink-0 h-6 w-6 text-indigo-600 group-hover:text-[#0870d8] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
											</svg>
											<div className="ml-4">
												<p className="text-base font-medium text-gray-900 group-hover:text-[#0870d8] transition-colors duration-300">Security</p>
											</div>
										</div>
									</Link>

									<Link href="/integrations">
										<div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group cursor-pointer">
											<svg className="flex-shrink-0 h-6 w-6 text-indigo-600 group-hover:text-[#0870d8] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
											</svg>
											<div className="ml-4">
												<p className="text-base font-medium text-gray-900 group-hover:text-[#0870d8] transition-colors duration-300">Integrations</p>
											</div>
										</div>
									</Link>

									<Link href="/automations">
										<div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group cursor-pointer">
											<svg className="flex-shrink-0 h-6 w-6 text-indigo-600 group-hover:text-[#0870d8] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
											</svg>
											<div className="ml-4">
												<p className="text-base font-medium text-gray-900 group-hover:text-[#0870d8] transition-colors duration-300">Automations</p>
											</div>
										</div>
									</Link>
								</div>
							)}
						</div>

						<div className="relative group" ref={dropdownRefs.SellOrTrade}>
							<Link href="/sell-car">
								<button onClick={() => toggleDropdown("SellOrTrade")} className={`flex items-center font-semibold text-[16px] transition-colors duration-300  ${isSellActive ? "text-[#0870d8]" : "text-black hover:text-[#0870d8]"}`}>
									Sell or Trade
								</button>
							</Link>
						</div>

						{/* Dropdown 3 */}
						<div className="relative group" ref={dropdownRefs.contactUs}>
							<Link href={"/contact-us"}>
								<button onClick={() => toggleDropdown("contactUs")} className={`flex items-center font-semibold text-[16px] transition-colors duration-300 ${isDropdownOpen("contactUs") ? "text-[#0870d8]" : "text-black hover:text-[#0870d8]"}`}>
									Contact Us
								</button>
							</Link>
						</div>

						<div className="relative group" ref={dropdownRefs.More}>
							<button onClick={() => toggleDropdown("More")} className={`flex items-center font-semibold text-[16px] transition-colors duration-300 ${isDropdownOpen("More") ? "text-[#0870d8]" : "text-black hover:text-[#0870d8]"}`}>
								More
								<FaChevronDown className={`ml-[3px] transition-transform duration-300 ${isDropdownOpen("More") ? "rotate-180" : ""}`} />{" "}
							</button>
							{isDropdownOpen("More") && (
								<div className="z-10 p-4 absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out">
									<Link href={"/FAQ"} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group">
										<svg className="flex-shrink-0 h-6 w-6 text-indigo-600 group-hover:text-[#0870d8] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
										<div className="ml-4">
											<p className="text-base font-medium text-gray-900 group-hover:text-[#0870d8] transition-colors duration-300"> FAQ's</p>
										</div>
									</Link>
									<a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group">
										{/* Heroicon name: outline/view-grid */}
										<svg className="flex-shrink-0 h-6 w-6 text-indigo-600 group-hover:text-[#0870d8] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
										</svg>
										<div className="ml-4">
											<p className="text-base font-medium text-gray-900 group-hover:text-[#0870d8] transition-colors duration-300">Integrations</p>
										</div>
									</a>
									<a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 group">
										<svg className="flex-shrink-0 h-6 w-6 text-indigo-600 group-hover:text-[#0870d8] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
										</svg>
										<div className="ml-4">
											<p className="text-base font-medium text-gray-900 group-hover:text-[#0870d8] transition-colors duration-300">Automations</p>
										</div>
									</a>
								</div>
							)}
						</div>
					</nav>

					<div className="flex lg:order-2">
						<div className="relative hidden lg:block">
							<input type="text" id="search-navbar" className="block w-full p-2 pr-10 text-sm !text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue- text-black" placeholder="Search..." />

							<div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
								<span className="sr-only">Search icon</span>
							</div>
						</div>

						<button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
							<span className="sr-only">Search</span>
						</button>

						<button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
					</div>
				</header>
				<div className="block lg:hidden">
					<Sidebar />
				</div>
			</div>
		</>
	);
};

export default Header;
