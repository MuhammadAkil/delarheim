
import React from "react";
import Image from "next/image";
import { FaQuestionCircle } from 'react-icons/fa';
import '../../globals.css'


export interface Car {
  name: string;
  price: number;
  kilometers: string;
  image: string;
  year: number;
  make: string;
  bodyStyle: string;
  fuel: string;
  odometer: number;
  engine: string;
  trim: string;
  features: string[];
  color: string;
  transmission: string;
  model: string,
}

const CarCard: React.FC<{ car: Car }> = ({ car }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col hover:shadow-[0px_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-200">
    <Image
      className="rounded w-full object-cover object-center mb-6 hover:rounded-lg"
      src={car.image}
      alt={car.name}
      width={200}
      height={200}
    />
    <div className="p-4 flex-1">
      <h2 className="text-sm text-gray-900">{car.year}</h2>
      <h2 className="text-sm font-semibold text-gray-900">{car.name}</h2>

      <a href={'/vehicel-info'}>
        <h3 className="text-sm font-semibold mt-4 flex items-center" style={{ color: '#6b5fff' }}>
          Details
          <FaQuestionCircle className="ml-2" />
        </h3>
      </a>
      <p style={{ color: '#6b5fff' }} className="text-md font-bold mt-3 text-right">
        ${car.price.toLocaleString()}
      </p>

      <hr className="my-4" />

      <p className="text-md mt-3 text-right">
        {car.kilometers}
      </p>

      <div className="flex justify-center mt-4">
        <a href={'/vehicel-info'} rel="noopener noreferrer" className="w-full" >
          <button className="w-full px-4 py-2 text-white text-sm rounded-md transition duration-200" style={{ background: '#6b5fff' }}>

            View Details
          </button>
        </a>
      </div>
    </div>
  </div >
);

export default CarCard;
