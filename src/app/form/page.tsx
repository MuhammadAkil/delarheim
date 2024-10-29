"use client";
import React, { useState } from "react";
import { Button, Input, Select, Dropdown } from "rizzui";
import { FiChevronDown } from "react-icons/fi";

const salutationOptions = [
	{ value: "Mr", label: "Mr." },
	{ value: "Ms", label: "Ms." },
	{ value: "Mrs", label: "Mrs." },
	{ value: "Dr", label: "Dr." },
];

const maritalOptions = [
	{ value: "Married", label: "Married" },
	{ value: "Single", label: "Single" },
	{ value: "Divorced", label: "Divorced" },
	{ value: "Other", label: "Other" },
];

const mortageOptions = [
	{ value: "mortgage", label: "Mortgage" },
	{ value: "Own with Mortgage", label: "Own with Mortgage" },
	{ value: "With Parents", label: "With Parents" },
];

const EmployeOptions = [
	{ value: "Yes", label: "yes" },
	{ value: "No", label: "No" },
];

const FinancingApplication = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [salutation, setSalutation] = useState("");
	const [Marital, setMaritalStatus] = useState("");
	const [mortage, setmortageStatus] = useState("");
	const [Employe, setEmploye] = useState("");
	const [email, setEmail] = useState("");
	const [DOB, setDOB] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [state, setstate] = useState("");
	const [zip, setZip] = useState("");
	const [homeStatus, setHomeStatus] = useState("");
	const [monthlyPayment, setMonthlyPayment] = useState("");
	const [PreviousEmployerName, setPreviousEmployerName] = useState("");
	const [PreviousPosition, setPreviousPosition] = useState("");
	const [PreviousEmployementYear, setPreviousEmployementYear] = useState("");
	const [PreviousEmployementMonth, setPreviousEmployementMonth] = useState("");
	const [ReferenceName, setReferenceName] = useState("");
	const [ReferencePhone, setReferencePhone] = useState("");
	const [AdditionalNotes, setAdditionalNotes] = useState("");
	const [Hearing, setHearing] = useState("");
	const [employerName, setEmployerName] = useState("");
	const [DurationAddress, setDurationAddress] = useState("");
	const [DurationAddressMonth, setDurationAddressMonth] = useState("");
	const [position, setPosition] = useState("");
	const [employmentDurationYears, setEmploymentDurationYears] = useState("");
	const [employmentDurationMonths, setEmploymentDurationMonths] = useState("");
	const [monthlyIncome, setMonthlyIncome] = useState("");
	const [supervisorName, setSupervisorName] = useState("");
	const [supervisorPhone, setSupervisorPhone] = useState("");
	const [workAddress, setWorkAddress] = useState("");
	const [workCity, setWorkCity] = useState("");
	const [workState, setWorkState] = useState("");
	const [workZip, setWorkZip] = useState("");

	const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});

	const genderOptions = [
		{ value: "male", label: "Male" },
		{ value: "female", label: "Female" },
		{ value: "other", label: "Other" },
	];

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const errors: { [key: string]: string } = {};
		if (!firstName) errors.firstName = "First Name is required.";
		if (!lastName) errors.lastName = "Last Name is required.";
		if (!salutation) errors.salutation = "Salutation is required.";
		if (!Marital) errors.marital = "Marital Status is required.";
		if (!gender) errors.gender = "Gender is required.";
		if (!phone) errors.phone = "Phone is required.";
		if (!email) errors.email = "Email is required.";
		if (!Hearing) errors.Hearing = "This is required.";
		if (!DurationAddress) errors.DurationAddress = "Duration Address Year is required.";
		if (!DurationAddressMonth) errors.DurationAddressMonth = "Duration Address Month is required.";
		if (!PreviousEmployementYear) errors.PreviousEmployementYear = "Employment Duration Years is required.";
		if (!PreviousEmployementMonth) errors.PreviousEmployementMonth = "Employment Duration Month is required.";
		if (!PreviousEmployerName) errors.PreviousEmployerName = "Previous Employer Name is required.";
		if (!PreviousPosition) errors.PreviousPosition = "Previous Position Month is required.";
		if (!AdditionalNotes) errors.AdditionalNotes = "Additional Notes is required.";
		if (!city) errors.city = "City is required.";
		if (!workCity) errors.workCity = "Work City is required.";
		if (!workAddress) errors.workAddress = "Work Address is required.";
		if (!mortage) errors.mortage = "Mortage is required.";
		if (!monthlyPayment) errors.monthlyPayment = "Monthly Payment is required.";
		if (!supervisorName) errors.supervisorName = "Supervisor Name is required.";
		if (!supervisorPhone) errors.supervisorPhone = "Supervisor Phone is required.";
		if (!Employe) errors.Employe = "Employee is required.";
		if (!state) errors.state = "State is required.";
		if (!zip) errors.zip = "ZIP/Postal Code is required.";
		if (!workZip) errors.workZip = "Work Zip Code is required.";
		if (!workState) errors.workState = "Work State Code is required.";
		if (!homeStatus) errors.homeStatus = "Home Status is required.";
		if (!employerName) errors.employerName = "Employer Name is required.";
		if (!position) errors.position = "Position is required.";
		if (!monthlyIncome) errors.monthlyIncome = "Monthly Income is required.";
		if (!ReferenceName) errors.ReferenceName = "Reference Name is required.";
		if (!ReferencePhone) errors.ReferencePhone = "Reference Phone is required.";
		if (!DOB) errors.DOB = "DOB is required.";

		if (Object.keys(errors).length > 0) {
			setErrorMessages(errors);
		} else {
			setErrorMessages({});
			alert("Form submitted successfully!");
		}
	};

	return (
		<div className=" min-h-screen flex flex-col md:flex-row items-start justify-center text-white py-14  md:py-8">
			<div className="flex-1 p-6 max-w-5xl bg-gray-800 mt-10 mx-4 lg:mx-6 md:mt-12 md:mr-8 rounded-lg shadow-lg">
				<h1 className="text-4xl font-bold mb-6">FINANCING APPLICATION</h1>
				<p className="text-md mb-4">Get approved from home! Please fill out the secure credit application below.</p>

				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium">Salutation</label>
							<Dropdown className="w-full">
								<Dropdown.Trigger className="w-full">
									<Button as="span" variant="outline" className="w-full bg-white text-black !border-0 rounded-md text-left flex justify-between items-center">
										<span>{salutation || "Select Salutation"}</span>
										<FiChevronDown className="text-gray-600" size={20} />
									</Button>
								</Dropdown.Trigger>
								<Dropdown.Menu className="bg-white p-2">
									{salutationOptions.map((option) => (
										<Dropdown.Item
											className="text-black"
											key={option.value}
											onClick={() => {
												setSalutation(option.value);
												setErrorMessages((prev) => ({ ...prev, salutation: "" }));
											}}
										>
											{option.label}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
							{errorMessages.salutation && <p className="text-red-500 text-sm mt-1">{errorMessages.salutation}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Gender</label>
							<Dropdown className="w-full">
								<Dropdown.Trigger className="w-full">
									<Button as="span" variant="outline" className="w-full bg-white text-black !border-0 rounded-md text-left flex justify-between items-center">
										<span>{gender || "Select Gender"}</span>
										<FiChevronDown className="text-gray-600" size={20} />
									</Button>
								</Dropdown.Trigger>
								<Dropdown.Menu className="bg-white p-2">
									{genderOptions.map((option) => (
										<Dropdown.Item
											className="text-black"
											key={option.value}
											onClick={() => {
												setGender(option.value);
												setErrorMessages((prev) => ({ ...prev, gender: "" })); // Clear error message
											}}
										>
											{option.label}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
							{errorMessages.gender && <p className="text-red-500 text-sm mt-1">{errorMessages.gender}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">First Name (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="First Name"
								value={firstName}
								onChange={(e) => {
									setFirstName(e.target.value);
									setErrorMessages((prev) => ({ ...prev, firstName: "" }));
								}}
							/>
							{errorMessages.firstName && <p className="text-red-500 text-sm mt-1">{errorMessages.firstName}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Last Name (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Last Name"
								value={lastName}
								onChange={(e) => {
									setLastName(e.target.value);
									setErrorMessages((prev) => ({ ...prev, lastName: "" }));
								}}
							/>
							{errorMessages.lastName && <p className="text-red-500 text-sm mt-1">{errorMessages.lastName}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Phone (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Phone"
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
									setErrorMessages((prev) => ({ ...prev, phone: "" }));
								}}
							/>
							{errorMessages.phone && <p className="text-red-500 text-sm mt-1">{errorMessages.phone}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Email (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setErrorMessages((prev) => ({ ...prev, email: "" }));
								}}
							/>
							{errorMessages.email && <p className="text-red-500 text-sm mt-1">{errorMessages.email}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Date of Birth (required)</label>
							<Input
								className="w-full bg-white text-black rounded-md px-2"
								placeholder="Date of Birth"
								value={DOB}
								onChange={(e) => {
									setDOB(e.target.value);
									setErrorMessages((prev) => ({ ...prev, DOB: "" }));
								}}
							/>
							{errorMessages.DOB && <p className="text-red-500 text-sm mt-1">{errorMessages.DOB}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Marital Status (required)</label>
							<div>
								<Dropdown className="w-full">
									<Dropdown.Trigger className="w-full">
										<Button as="span" variant="outline" className="w-full bg-white text-black !border-0 rounded-md text-left flex justify-between items-center">
											<span>{Marital || "Select Marital Status"}</span>
											<FiChevronDown className="text-gray-600" size={20} />
										</Button>
									</Dropdown.Trigger>
									<Dropdown.Menu className="bg-white p-2">
										{maritalOptions.map((option) => (
											<Dropdown.Item
												className="text-black"
												key={option.value}
												onClick={() => {
													setMaritalStatus(option.value);
													setErrorMessages((prev) => ({ ...prev, marital: "" }));
												}}
											>
												{option.label}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>

								{errorMessages.marital && <p className="text-red-500 text-sm mt-1">{errorMessages.marital}</p>}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium">Province/State (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Province/State"
								value={state}
								onChange={(e) => {
									setstate(e.target.value);
									setErrorMessages((prev) => ({ ...prev, state: "" }));
								}}
							/>
							{errorMessages.state && <p className="text-red-500 text-sm mt-1">{errorMessages.state}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Postal/ZIP Code (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="ZIP/Postal Code"
								value={zip}
								onChange={(e) => {
									const value = e.target.value;
									setZip(value);
									setErrorMessages((prev) => ({ ...prev, zip: "" }));
								}}
							/>
							{errorMessages.zip && <p className="text-red-500 text-sm mt-1">{errorMessages.zip}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Duration at Address (Years)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Years at Address"
								value={DurationAddress}
								onChange={(e) => {
									const value = e.target.value;
									setDurationAddress(value);
									setErrorMessages((prev) => ({ ...prev, DurationAddress: "" }));
								}}
							/>
							{errorMessages.DurationAddress && <p className="text-red-500 text-sm mt-1">{errorMessages.DurationAddress}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Duration at Address (Months)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Months at Address"
								value={DurationAddressMonth}
								onChange={(e) => {
									const value = e.target.value;
									setDurationAddressMonth(value);
									setErrorMessages((prev) => ({ ...prev, DurationAddressMonth: "" }));
								}}
							/>
							{errorMessages.DurationAddressMonth && <p className="text-red-500 text-sm mt-1">{errorMessages.DurationAddressMonth}</p>}
						</div>
					</div>

					<h2 className="text-xl font-bold mt-6">Home Rent / Mortgage Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium">Home Status (required)</label>
							<div>
								<Dropdown className="w-full">
									<Dropdown.Trigger className="w-full">
										<Button as="span" variant="outline" className="w-full bg-white text-black !border-0 rounded-md text-left flex justify-between items-center">
											<span>{mortage || "Select Mortage"}</span>
											<FiChevronDown className="text-gray-600" size={20} />
										</Button>
									</Dropdown.Trigger>
									<Dropdown.Menu className="bg-white p-2">
										{mortageOptions.map((option) => (
											<Dropdown.Item
												className="text-black"
												onClick={() => {
													setmortageStatus(option.value);
													setErrorMessages((prev) => ({ ...prev, mortage: "" }));
												}}
											>
												{option.label}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>

								{errorMessages.mortage && <p className="text-red-500 text-sm mt-1">{errorMessages.mortage}</p>}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium">Monthly Payment (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Enter monthly payment"
								value={monthlyPayment}
								onChange={(e) => {
									const value = e.target.value;
									setMonthlyPayment(value);
									setErrorMessages((prev) => ({ ...prev, monthlyPayment: "" }));
								}}
							/>
							{errorMessages.monthlyPayment && <p className="text-red-500 text-sm mt-1">{errorMessages.monthlyPayment}</p>}
						</div>
					</div>

					<h2 className="text-xl font-bold mt-6">Current Employment</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium">Employer Name (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Employer Name"
								value={employerName}
								onChange={(e) => {
									const value = e.target.value;
									setEmployerName(value);
									setErrorMessages((prev) => ({ ...prev, employerName: "" }));
								}}
							/>
							{errorMessages.employerName && <p className="text-red-500 text-sm mt-1">{errorMessages.employerName}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Position (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Position"
								value={position}
								onChange={(e) => {
									const value = e.target.value;
									setPosition(value);
									setErrorMessages((prev) => ({ ...prev, position: "" }));
								}}
							/>
							{errorMessages.position && <p className="text-red-500 text-sm mt-1">{errorMessages.position}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Duration at Employment (Years)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Years"
								value={employmentDurationYears}
								onChange={(e) => {
									const value = e.target.value;
									setEmploymentDurationYears(value);
									setErrorMessages((prev) => ({ ...prev, employmentDurationYears: "" }));
								}}
							/>
							{errorMessages.employmentDurationYears && <p className="text-red-500 text-sm mt-1">{errorMessages.employmentDurationYears}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Duration at Employment (Months)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Months"
								value={employmentDurationMonths}
								onChange={(e) => {
									const value = e.target.value;
									setEmploymentDurationMonths(value);
									setErrorMessages((prev) => ({ ...prev, employmentDurationMonths: "" }));
								}}
							/>
							{errorMessages.employmentDurationMonths && <p className="text-red-500 text-sm mt-1">{errorMessages.employmentDurationMonths}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Monthly Income (required)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Monthly Income"
								value={monthlyIncome}
								onChange={(e) => {
									const value = e.target.value;
									setMonthlyIncome(value);
									setErrorMessages((prev) => ({ ...prev, monthlyIncome: "" }));
								}}
							/>
							{errorMessages.monthlyIncome && <p className="text-red-500 text-sm mt-1">{errorMessages.monthlyIncome}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Supervisor Name</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Supervisor Name"
								value={supervisorName}
								onChange={(e) => {
									const value = e.target.value;
									setSupervisorName(value);
									setErrorMessages((prev) => ({ ...prev, supervisorName: "" }));
								}}
							/>
							{errorMessages.supervisorName && <p className="text-red-500 text-sm mt-1">{errorMessages.supervisorName}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Supervisor Phone</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Supervisor Phone"
								value={supervisorPhone}
								onChange={(e) => {
									const value = e.target.value;
									setSupervisorPhone(value);
									setErrorMessages((prev) => ({ ...prev, supervisorPhone: "" }));
								}}
							/>
							{errorMessages.supervisorPhone && <p className="text-red-500 text-sm mt-1">{errorMessages.supervisorPhone}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Currently Employed?</label>
							<div>
								<Dropdown className="w-full">
									<Dropdown.Trigger className="w-full">
										<Button as="span" variant="outline" className="w-full bg-white text-black !border-0 rounded-md text-left flex justify-between items-center">
											<span>{Employe || "Select Employement"}</span>
											<FiChevronDown className="text-gray-600" size={20} />
										</Button>
									</Dropdown.Trigger>
									<Dropdown.Menu className="bg-white p-2">
										{EmployeOptions.map((option) => (
											<Dropdown.Item
												className="text-black"
												onClick={() => {
													setEmploye(option.value);
													setErrorMessages((prev) => ({ ...prev, Employe: "" }));
												}}
											>
												{option.label}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>

								{errorMessages.Employe && <p className="text-red-500 text-sm mt-1">{errorMessages.Employe}</p>}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium">Work Address</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Work Address"
								value={workAddress}
								onChange={(e) => {
									const value = e.target.value;
									setWorkAddress(value);
									setErrorMessages((prev) => ({ ...prev, workAddress: "" }));
								}}
							/>
							{errorMessages.workAddress && <p className="text-red-500 text-sm mt-1">{errorMessages.workAddress}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Work City</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Work City"
								value={workCity}
								onChange={(e) => {
									const value = e.target.value;
									setWorkCity(value);
									setErrorMessages((prev) => ({ ...prev, workCity: "" }));
								}}
							/>
							{errorMessages.workCity && <p className="text-red-500 text-sm mt-1">{errorMessages.workCity}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Work State</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Work State"
								value={workState}
								onChange={(e) => {
									const value = e.target.value;
									setWorkState(value);
									setErrorMessages((prev) => ({ ...prev, workState: "" }));
								}}
							/>
							{errorMessages.workState && <p className="text-red-500 text-sm mt-1">{errorMessages.workState}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Work ZIP</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Work ZIP"
								value={workZip}
								onChange={(e) => {
									const value = e.target.value;
									setWorkZip(value);
									setErrorMessages((prev) => ({ ...prev, workZip: "" }));
								}}
							/>
							{errorMessages.workZip && <p className="text-red-500 text-sm mt-1">{errorMessages.workZip}</p>}
						</div>
					</div>

					<h2 className="text-xl font-bold mt-6">Previous Employment</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium">Previous Employer Name</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Previous Employer Name"
								value={PreviousEmployerName}
								onChange={(e) => {
									const value = e.target.value;
									setPreviousEmployerName(value);
									setErrorMessages((prev) => ({ ...prev, PreviousEmployerName: "" }));
								}}
							/>
							{errorMessages.PreviousEmployerName && <p className="text-red-500 text-sm mt-1">{errorMessages.PreviousEmployerName}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Previous Position</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Previous Position"
								value={PreviousPosition}
								onChange={(e) => {
									const value = e.target.value;
									setPreviousPosition(value);
									setErrorMessages((prev) => ({ ...prev, PreviousPosition: "" }));
								}}
							/>
							{errorMessages.PreviousPosition && <p className="text-red-500 text-sm mt-1">{errorMessages.PreviousPosition}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Duration at Previous Employment (Years)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Previous Employement Year"
								value={PreviousEmployementYear}
								onChange={(e) => {
									const value = e.target.value;
									setPreviousEmployementYear(value);
									setErrorMessages((prev) => ({ ...prev, PreviousEmployementYear: "" }));
								}}
							/>
							{errorMessages.PreviousEmployementYear && <p className="text-red-500 text-sm mt-1">{errorMessages.PreviousEmployementYear}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Duration at Previous Employment (Months)</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Previous Employement Month"
								value={PreviousEmployementMonth}
								onChange={(e) => {
									const value = e.target.value;
									setPreviousEmployementMonth(value);
									setErrorMessages((prev) => ({ ...prev, PreviousEmployementMonth: "" }));
								}}
							/>
							{errorMessages.PreviousEmployementMonth && <p className="text-red-500 text-sm mt-1">{errorMessages.PreviousEmployementMonth}</p>}
						</div>
					</div>

					<h2 className="text-xl font-bold mt-6">Other Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium">Reference Name</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Reference Name"
								value={ReferenceName}
								onChange={(e) => {
									const value = e.target.value;
									setReferenceName(value);
									setErrorMessages((prev) => ({ ...prev, ReferenceName: "" }));
								}}
							/>
							{errorMessages.ReferenceName && <p className="text-red-500 text-sm mt-1">{errorMessages.ReferenceName}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Reference Phone</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Reference Phone"
								value={ReferencePhone}
								onChange={(e) => {
									const value = e.target.value;
									setReferencePhone(value);
									setErrorMessages((prev) => ({ ...prev, ReferencePhone: "" }));
								}}
							/>
							{errorMessages.ReferencePhone && <p className="text-red-500 text-sm mt-1">{errorMessages.ReferencePhone}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">Additional Notes</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Reference Phone"
								value={AdditionalNotes}
								onChange={(e) => {
									const value = e.target.value;
									setAdditionalNotes(value);
									setErrorMessages((prev) => ({ ...prev, AdditionalNotes: "" }));
								}}
							/>
							{errorMessages.AdditionalNotes && <p className="text-red-500 text-sm mt-1">{errorMessages.AdditionalNotes}</p>}
						</div>

						<div>
							<label className="block text-sm font-medium">How Did You Hear About Us?</label>
							<Input
								className="w-full bg-white text-black !border-0 rounded-md"
								placeholder="Reference Phone"
								value={Hearing}
								onChange={(e) => {
									const value = e.target.value;
									setHearing(value);
									setErrorMessages((prev) => ({ ...prev, Hearing: "" }));
								}}
							/>
							{errorMessages.Hearing && <p className="text-red-500 text-sm mt-1">{errorMessages.Hearing}</p>}
						</div>
					</div>

					<div className="flex-1 lg:p-6 max-w-5xl bg-gray-800 mt-10 mx-0 lg:mx-6 md:mt-12 md:mr-8 rounded-lg">
						<h2 className="text-2xl font-bold mb-4">Choose Your Vehicle</h2>
						<Input className="w-full bg-white text-black !border-0 rounded-md mb-4" placeholder="Enter Vehicle Details" />
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<Button className="bg-[#5950d0] hover:bg-[#5950d0]/90 text-white py-2 rounded-md px-2">Advance Search</Button>
							<Button className="bg-[#5950d0] hover:bg-[#5950d0]/90 text-white py-2 rounded-md">Appraise My Trade</Button>
							<Button className="bg-[#5950d0] hover:bg-[#5950d0]/90 text-white py-2 rounded-md">Car Finder</Button>
						</div>
						<p className="w-full mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illum non vero inventore, dicta quasi eos amet officia explicabo laborum aliquid cum temporibus.</p>

						<p className="w-full mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</div>

					<div className="text-left mt-6">
						<Button type="submit" className="bg-[#5950d0] hover:bg-[#5950d0]/90 text-white py-2 px-4 rounded-md">
							Submit Application
						</Button>
					</div>
				</form>
			</div>

			<div className="flex-none bg-gray-900 p-8 max-w-sm mt-6 md:mt-12 md:ml-8 rounded-lg shadow-lg md:mr-8 mx-4 lg:mx-0">
				<h2 className="text-xl font-bold mb-4">Online Credit Application</h2>
				<p className="mb-6">Need help filling out your application? We would be happy to help you.</p>
				<Button className="bg-[#5950d0] hover:bg-[#5950d0]/90 text-white py-2 px-4 rounded-md">Contact Us</Button>
			</div>
		</div>
	);
};

export default FinancingApplication;
