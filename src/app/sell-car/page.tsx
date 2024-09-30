"use client";
import React, { useState } from "react";
import { validateSellCarForm, SellCarFormData } from "../../utils/validation";

const SellCar = () => {
  const [formData, setFormData] = useState<SellCarFormData>({
    make: "",
    vin: "",
    model: "",
    body: "",
    year: "",
    transmission: "",
    mileage: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    carPhotos: null,
  });

  const [errors, setErrors] = useState<{ [key in keyof SellCarFormData]?: string }>({});
  const [touched, setTouched] = useState<{ [key in keyof SellCarFormData]?: boolean }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateSellCarForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="py-9 px-4 flex items-center justify-center">
      <div className="container">
        <div className="max-w-4xl mx-auto mt-10">
          <div className="relative flex flex-col shadow-lg border rounded-lg bg-white">
            <div className="rounded-t border-b border-gray-200 p-6">
              <h6 className="text-gray-700 text-xl font-bold uppercase text-center">
                Sell Your Car for Free
              </h6>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
              <form onSubmit={handleSubmit}>
                <h6 className="text-gray-700 text-sm mt-3 mb-6 font-bold uppercase">
                  Vehicle Information
                </h6>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Make
                    </label>
                    <input
                      type="text"
                      name="make"
                      value={formData.make}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Make"
                    />
                    {touched.make && errors.make && <span className="text-red-500">{errors.make}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      VIN
                    </label>
                    <input
                      type="text"
                      name="vin"
                      value={formData.vin}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="VIN"
                    />
                    {touched.vin && errors.vin && <span className="text-red-500">{errors.vin}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Model
                    </label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Model"
                    />
                    {touched.model && errors.model && <span className="text-red-500">{errors.model}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Body
                    </label>
                    <input
                      type="text"
                      name="body"
                      value={formData.body}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Body"
                    />
                    {touched.body && errors.body && <span className="text-red-500">{errors.body}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Year
                    </label>
                    <input
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Year"
                    />
                    {touched.year && errors.year && <span className="text-red-500">{errors.year}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Transmission
                    </label>
                    <input
                      type="text"
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Transmission"
                    />
                    {touched.transmission && errors.transmission && <span className="text-red-500">{errors.transmission}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Mileage
                    </label>
                    <input
                      type="text"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Mileage"
                    />
                    {touched.mileage && errors.mileage && <span className="text-red-500">{errors.mileage}</span>}
                  </div>
                  <div>
                <label className="block uppercase text-gray-600 text-xs font-bold mb-2">Car Photos</label>
                <input
                    type="file"
                    name="carPhotos"
                      onChange={handleInputChange}
                      multiple
                    className="form-input text-gray-700/80 block w-full rounded-md py-1.5 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                />
                {touched.carPhotos && errors.carPhotos && <span className="text-red-500">{errors.carPhotos}</span>}
            </div>

                </div>

                <h6 className="text-gray-700 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Your Name"
                    />
                    {touched.name && errors.name && <span className="text-red-500">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Your Email"
                    />
                    {touched.email && errors.email && <span className="text-red-500">{errors.email}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Your Phone"
                    />
                    {touched.phone && errors.phone && <span className="text-red-500">{errors.phone}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Your Address"
                    />
                    {touched.address && errors.address && <span className="text-red-500">{errors.address}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Your City"
                    />
                    {touched.city && errors.city && <span className="text-red-500">{errors.city}</span>}
                  </div>
                  <div>
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="form-input text-gray-700/80 block w-full rounded-md py-2 px-4 mt-2 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-700/25"
                      placeholder="Your ZIP Code"
                    />
                    {touched.zip && errors.zip && <span className="text-red-500">{errors.zip}</span>}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCar;
