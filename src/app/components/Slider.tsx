"use client"; // <-- This tells Next.js to treat this as a Client Component

import { useState } from "react";

const CustomerSlider = () => {
  const customers = [
    { id: 1, name: "Customer 1", description: "Description 1" },
    { id: 2, name: "Customer 2", description: "Description 2" },
    { id: 3, name: "Customer 3", description: "Description 3" },
    { id: 4, name: "Customer 4", description: "Description 4" },
    { id: 5, name: "Customer 5", description: "Description 5" },
    { id: 6, name: "Customer 6", description: "Description 6" },
    { id: 7, name: "Customer 7", description: "Description 7" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Calculate the number of pages
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  // Go to the next set of items
  const handleNext = () => {
    if (currentIndex < customers.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // Go to the previous set of items
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="container max-w-[1050px] mx-auto px-4">
      <div className="relative">
        {/* Slider Cards */}
        <div className="flex space-x-4">
          {customers
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((customer) => (
              <div
                key={customer.id}
                className="bg-gray-200 rounded-lg p-6 flex-shrink-0 w-64"
              >
                <h3 className="text-lg font-bold mb-2">{customer.name}</h3>
                <p>{customer.description}</p>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <button
            className={`px-4 py-2 bg-gray-800 text-white rounded-full ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <button
            className={`px-4 py-2 bg-gray-800 text-white rounded-full ${
              currentIndex >= customers.length - itemsPerPage
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex >= customers.length - itemsPerPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSlider;
