// CarCard.tsx
import React from "react";
import Image from "next/image";

export interface Car {
  name: string;
  price: number;
  kilometers: string;
  image: string;
  year: number;
  make: string;
  bodyStyle: string;
  fuelType: string;
  odometer: number;
  engine: string;
  trim: string;
  features: string[];
}

const CarCard: React.FC<{ car: Car }> = ({ car }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
    <Image
      className="rounded w-full object-cover object-center mb-6 hover:rounded-lg"
      src={car.image}
      alt={car.name}
      width={300}
      height={200}
    />
    <div className="p-4 flex-1">
      <h2 className="text-sm font-semibold text-gray-900">{car.name}</h2>
      <p className="text-gray-700">${car.price.toLocaleString()}</p>
      <p className="text-gray-500">{car.kilometers}</p>
      <p className="text-gray-500">Fuel Type: {car.fuelType}</p>
      <p className="text-gray-500">Odometer: {car.odometer} km</p>
      <p className="text-gray-500">Engine: {car.engine || "N/A"}</p>
      <p className="text-gray-500">Trim: {car.trim}</p>
      <p className="text-gray-500">Features: {car.features.join(", ")}</p>
    </div>
  </div>
);

export default CarCard;
