'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from './icons/logo';
import router from 'next/router';


const Sidebar = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement | null>(null);
	const router = useRouter();
	const pathname = usePathname();

	const toggleDropdown = (dropdownId: string) => {
		setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
	};

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
			setSidebarOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const isHomeActive = pathname === "/";
	const isFinancingActive = pathname === "/financing";

	return (
		<div className="w-full bg-white text-white fixed z-20">
			{/* Desktop Navbar */}
			{/* <nav className="hidden lg:flex fixed h-16 items-center px-4 py-3 w-full bg-white">
				<div className="flex items-center flex-grow">
					<a href="/" className="mr-auto">
						<Logo width={180} className="cursor-pointer" />
					</a>
				</div>
				<button onClick={toggleSidebar} className="text-black focus:outline-none p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</nav> */}

			{/* Mobile Navbar */}
			<nav className="flex lg:hidden fixed h-16 items-center px-4 py-3 w-full bg-white border-b shadow-lg">
				<div className="flex items-center flex-grow z-10">
					<a href="/" className="mr-auto">
						<Logo width={180} className="cursor-pointer" />
					</a>
				</div>
				<button onClick={toggleSidebar} className="text-black focus:outline-none p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</nav>

			{/* Sidebar */}
			{sidebarOpen && (
				<div ref={sidebarRef} className="fixed top-0 right-0 w-[250px] h-full bg-[#1a1a1a] shadow-lg transition-transform duration-300 overflow-auto">
					{/* <div className="text-white bg-white h-[65px] p-6 font-bold text-xl mb-2">
						<a href="/"></a>
					</div> */}
					<button onClick={toggleSidebar} className="absolute top-4 right-5 text-white  focus:outline-none">
						<svg className="bg-[#5950d0] p-1.5 rounded-full w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>

					<div className="p-6">
						<ul className="space-y-4">
							<Link
								href="/"
								passHref
								onClick={() => {
									toggleDropdown("Home");
									toggleSidebar();
								}}
								className={`flex items-center transition-colors duration-300 ${isHomeActive ? "font-black  text-[#0870d8]" : "font-normal text-white hover:text-[#0870d8]"}`}
							>
								Home
							</Link>

							<Link
								href={"/financing"}
								passHref
								onClick={() => {
									toggleDropdown("financing");
									toggleSidebar();
								}}
								className={`flex items-center transition-colors duration-300 ${isFinancingActive ? "font-black  text-[#0870d8]" : "font-normal text-white hover:text-[#0870d8]"}`}
							>
								Financing
							</Link>

							{["Inventory", "Buy Or Sell", "Contact Us", "More"].map((item, index) => {
								const itemRoute = item === "Inventory" ? "/inventory" : item === "Buy Or Sell" ? "/sell-car" : item === "Contact Us" ? "/contact-us" : null;
								const isActive = pathname === itemRoute;

								return (
									<li key={index}>
										<div className="dropdown">
											{item !== "More" ? (
												<Link href={itemRoute || "/"} onClick={() => toggleSidebar()} className={`flex items-center py-2 justify-between w-full focus:outline-none transition-colors duration-300 ${isActive ? "font-black  text-[#0870d8]" : "!font-normal text-white hover:text-[#0870d8]"}`}>
													{item}
												</Link>
											) : (
												<>
													<button className={`flex items-center py-2 justify-between w-full focus:outline-none transition-colors duration-300 ${openDropdown === "More" ? "text-[#0870d8]" : "text-white hover:text-[#0870d8]"}`} onClick={() => toggleDropdown("More")}>
														{item}
														<svg className={`w-5 h-5 transform transition-transform duration-300 ${openDropdown === "More" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
														</svg>
													</button>
													{openDropdown === "More" && (
														<ul className="px-4 py-2 bg-[#2c2c2c] rounded-md">
															<li>
																<Link href="/FAQ" onClick={() => toggleSidebar()} className="flex items-center py-2 w-full focus:outline-none transition-colors duration-300 text-white hover:text-[#0870d8]">
																	FAQ
																</Link>
															</li>
														</ul>
													)}
												</>
											)}
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
