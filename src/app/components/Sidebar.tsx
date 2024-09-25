import { useState, useRef, useEffect } from 'react';
import logo from '../public/logo.svg'
import Image from 'next/image';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown(prev => (prev === dropdownId ? null : dropdownId));
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white text-white fixed z-20">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed h-16 items-center px-4 py-3 w-full bg-white">
        <div className="flex items-center flex-grow">
          <a href="/home" className="mr-auto">
          <Image src={logo} alt="Dealerheim Logo" className=" w-[70%] cursor-pointer" />
          </a>
        </div>
        <button onClick={toggleSidebar} className="text-black focus:outline-none p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden fixed h-16 items-center px-4 py-3 w-full bg-white">
        <div className="flex items-center flex-grow z-10">
          <a href="/home" className="mr-auto">
          <Image src={logo} alt="Dealerheim Logo" className=" w-[160px] cursor-pointer" />
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
          <div className="text-white bg-white h-[65px] p-6 font-bold text-xl mb-2">
            <a href="/home">
          {/* <Image src={logo} alt="Dealerheim Logo" className=" cursor-pointer" /> */}
            </a>
          </div>
          <button onClick={toggleSidebar} className="absolute top-4 right-5 text-white  focus:outline-none">
            <svg className="bg-[#18746c] p-1.5 rounded-full w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="p-6">
                      <ul className="space-y-4">
                              <button
                      className="flex items-center py-2 justify-between w-full text-white focus:outline-none"
                    >
                      <a href="">Home</a>
                    
                    </button>
              {['Inventory', 'Buy Or Sell', 'Contact Us','More'].map((item, index) => (
                <li key={index}>
                  <div className="dropdown">
                    <button
                      className="flex items-center py-2 justify-between w-full text-white focus:outline-none"
                      onClick={() => toggleDropdown(`dropdown${index + 1}`)}
                    >
                      {item}
                      <svg className={`w-5 h-5 transform transition-transform duration-300 ${openDropdown === `dropdown${index + 1}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <ul className={`px-4 py-2 bg-[#2c2c2c] rounded-md ${openDropdown === `dropdown${index + 1}` ? 'block' : 'hidden'}`}>
                      <li>
                        <a className="text-white hover:text-current no-underline mb-1">Option 1</a>
                        
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
