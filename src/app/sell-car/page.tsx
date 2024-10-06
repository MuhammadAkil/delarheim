"use client";
import React, { useState } from "react";
import { validateSellCarForm, SellCarFormData } from "../../utils/validation";


const SellCar = () => {
  const [formData, setFormData] = useState<SellCarFormData>({
		make: "",
		vinNumber: "",
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

		// No need to set touched here
		const validationErrors = validateSellCarForm({ ...formData, [name]: files ? files[0] : value });
		setErrors(validationErrors);
	};

	const handleBlur = (name: keyof SellCarFormData) => {
		setTouched((prev) => ({ ...prev, [name]: true }));
		const validationErrors = validateSellCarForm(formData);
		setErrors(validationErrors);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Mark all required fields as touched
		const requiredFields: (keyof SellCarFormData)[] = ["make", "vinNumber", "model", "body", "year", "transmission", "mileage", "name", "email", "phone", "address", "city", "zip"];

		const newErrors: { [key in keyof SellCarFormData]?: string } = {};

		// Check for missing required fields
		requiredFields.forEach((field) => {
			if (!formData[field]) {
				newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
			}
			setTouched((prev) => ({
				...prev,
				[field]: true,
			}));
		});

		// Set the errors state
		setErrors(newErrors);

		// If there are no validation errors, submit the form
		if (Object.keys(newErrors).length === 0) {
			console.log("Form submitted:", formData);
			// setFormData({...})
		}
	};

	return (
		<section className="pt-12 pb-20 px-4 flex items-center justify-center bg-gray-100">
			<div className="container">
				<div className="max-w-4xl mx-auto mt-10">
					<div className="relative flex flex-col shadow-lg border rounded-lg bg-white overflow-hidden">
						<div className="bg-black bg-cover bg-center text-white p-6">
							<h6 className="text-xl font-bold text-center">Sell Your Car for Free</h6>
						</div>

						<div className="flex-auto px-6 lg:px-10 py-10 pt-4">
							<form onSubmit={handleSubmit}>
								<h6 className="text-gray-700 text-sm mt-3 mb-6 font-bold uppercase">Vehicle Information</h6>
								<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
									{/* All Input Fields */}
									{(["make", "vinNumber", "model", "body", "year", "transmission", "mileage", "carPhotos"] as Array<keyof SellCarFormData>).map((field) => (
										<div key={field}>
											<label className="block text-gray-600 text-xs font-bold mb-2 capitalize">{field === "carPhotos" ? "Car Photos" : field === "vinNumber" ? "VIN Number" : field.charAt(0).toUpperCase() + field.slice(1)}</label>{" "}
											<input
												type={field === "carPhotos" ? "file" : "text"}
												name={field}
												value={field === "carPhotos" ? undefined : formData[field]}
												onChange={handleInputChange}
												onBlur={() => handleBlur(field)}
												className={`form-input text-gray-700 block w-full rounded-md ${field === "carPhotos" ? "py-2" : "py-3"} px-4 mt-2 border transition duration-150 ease-in-out ${touched[field] && errors[field] ? "border-red-500" : "border-gray-300"} focus:ring-blue-500 focus:border-blue-500`}
												placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
												multiple={field === "carPhotos"}
											/>
											{touched[field] && errors[field] && <span className="text-red-500 text-sm">{errors[field]}</span>}
										</div>
									))}
								</div>

								<hr className="my-8 border-gray-600" />

								<h6 className="text-gray-700 text-sm mt-3 mb-6 font-bold uppercase">Contact Information</h6>
								<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
									{(["name", "email", "phone", "address", "city", "zip"] as Array<keyof SellCarFormData>).map((field) => (
										<div key={field}>
											<label className="block text-gray-600 text-xs font-bold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
											<input
												type={field === "email" ? "email" : "text"}
												name={field}
												// value={formData[field]}  // Ensure value is set for non-file inputs
												onChange={handleInputChange}
												onBlur={() => handleBlur(field)}
												className={`form-input text-gray-700 block w-full rounded-md py-3 px-4 mt-2 border transition duration-150 ease-in-out ${touched[field] && errors[field] ? "border-red-500" : "border-gray-300"} focus:ring-blue-500 focus:border-blue-500`}
												placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
											/>
											{touched[field] && errors[field] && <span className="text-red-500 text-sm">{errors[field]}</span>}
										</div>
									))}
								</div>

								<hr className="my-8 border-gray-600" />

								<div className="mt-8">
									<button type="submit" className="!text-white bg-[#6b5fff] hover:bg-[#6b5fff]/90 rounded-[5px] px-20 py-4 text-[20px] font-bold tracking-[0.02857em] leading-6 ">
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
