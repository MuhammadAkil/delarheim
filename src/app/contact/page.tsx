"use client";
import React, { useState } from "react";
import { Button, Input, Select } from "rizzui";

const FinancingApplication = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [homeStatus, setHomeStatus] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const [employerName, setEmployerName] = useState("");
  const [position, setPosition] = useState("");
  const [employmentDurationYears, setEmploymentDurationYears] = useState("");
  const [employmentDurationMonths, setEmploymentDurationMonths] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [isCurrentlyEmployed, setIsCurrentlyEmployed] = useState("");
  const [workAddress, setWorkAddress] = useState("");
  const [workCity, setWorkCity] = useState("");
  const [workState, setWorkState] = useState("");
  const [workZip, setWorkZip] = useState("");

  const [errorMessages, setErrorMessages] = useState<any>({});

  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: any = {}; // Object to hold error messages

    // Validate required fields
    if (!firstName) errors.firstName = "First Name is required.";
    if (!lastName) errors.lastName = "Last Name is required.";
    if (!gender) errors.gender = "Gender is required.";
    if (!phone) errors.phone = "Phone is required.";
    if (!email) errors.email = "Email is required.";
    if (!address) errors.address = "Address is required.";
    if (!city) errors.city = "City is required.";
    if (!state) errors.state = "State is required.";
    if (!zip) errors.zip = "ZIP/Postal Code is required.";
    if (!homeStatus) errors.homeStatus = "Home Status is required.";
    if (!monthlyPayment) errors.monthlyPayment = "Monthly Payment is required.";
    if (!employerName) errors.employerName = "Employer Name is required.";
    if (!position) errors.position = "Position is required.";
    if (!monthlyIncome) errors.monthlyIncome = "Monthly Income is required.";

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
    } else {
      setErrorMessages({}); // Clear previous errors
      alert("Form submitted successfully!"); // Placeholder for actual submission logic
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-start justify-center text-white pt-4 pb-4 md:pt-8 md:pb-8">
      {/* Left form container */}
      <div className="flex-1 p-6 max-w-5xl bg-gray-800 mt-10 mx-6 md:mt-12 md:mr-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">FINANCING APPLICATION</h1>
        <p className="text-md mb-4">Get approved from home! Please fill out the secure credit application below.</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 9 Dummy fields */}
            <div>
              <label className="block text-sm font-medium">Salutation</label>
              <Select
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                value={gender}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setGender(e.target.value)
                }
                options={genderOptions}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <Select
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                value={gender}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setGender(e.target.value)
                }
                options={genderOptions}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">First Name (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date of Birth (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Date of Birth"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Marital Status (required)</label>
              <Select
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                value={gender}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setGender(e.target.value)
                }
                options={genderOptions}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Social Security Number (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="SSN"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Current Address Section */}
          <h2 className="text-xl font-bold mt-6">Current Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Address (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Province/State (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Province/State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Postal/ZIP Code (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="ZIP/Postal Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration at Address (Years)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Years at Address"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration at Address (Months)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Months at Address"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Home Rent / Mortgage Information Section */}
          <h2 className="text-xl font-bold mt-6">Home Rent / Mortgage Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Home Status (required)</label>
              <Select
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                value={homeStatus}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setHomeStatus(e.target.value)
                }
                options={[
                  { value: "", label: "Select Home Status" },
                  { value: "owned", label: "Owned" },
                  { value: "rented", label: "Rented" },
                  { value: "mortgaged", label: "Mortgaged" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Monthly Payment (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Enter monthly payment"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Current Employment Section */}
          <h2 className="text-xl font-bold mt-6">Current Employment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Employer Name (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Employer Name"
                value={employerName}
                onChange={(e) => setEmployerName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Position (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration at Employment (Years)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Years"
                value={employmentDurationYears}
                onChange={(e) => setEmploymentDurationYears(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration at Employment (Months)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Months"
                value={employmentDurationMonths}
                onChange={(e) => setEmploymentDurationMonths(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Monthly Income (required)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Monthly Income"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Supervisor Name</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Supervisor Name"
                value={supervisorName}
                onChange={(e) => setSupervisorName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Supervisor Phone</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Supervisor Phone"
                value={supervisorPhone}
                onChange={(e) => setSupervisorPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Currently Employed?</label>
              <Select
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                value={isCurrentlyEmployed}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setIsCurrentlyEmployed(e.target.value)
                }
                options={[
                  { value: "", label: "Select" },
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Work Address</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Work Address"
                value={workAddress}
                onChange={(e) => setWorkAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Work City</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Work City"
                value={workCity}
                onChange={(e) => setWorkCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Work State</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Work State"
                value={workState}
                onChange={(e) => setWorkState(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Work ZIP</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Work ZIP"
                value={workZip}
                onChange={(e) => setWorkZip(e.target.value)}
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-6">Previous Employment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Previous Employer Name</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Previous Employer Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Previous Position</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Previous Position"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration at Previous Employment (Years)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Years"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Duration at Previous Employment (Months)</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Months"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-6">Other Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Reference Name</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Reference Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Reference Phone</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Reference Phone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Additional Notes</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Any additional information"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">How Did You Hear About Us?</label>
              <Input
                className="w-full bg-white text-black border border-gray-400 rounded-md"
                placeholder="Source"
              />
            </div>
          </div>
        </form>

        <div className="flex-1 p-6 max-w-5xl bg-gray-800 mt-10 mx-6 md:mt-12 md:mr-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Choose Your Vehicle</h2>
        <Input
          className="w-full bg-white text-black border border-gray-400 rounded-md mb-4"
          placeholder="Enter Vehicle Details"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
            Advance Search
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
            Appraise my trade
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
            Car Finder
          </Button>
        </div>
        <p className="w-full mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illum non vero inventore, dicta quasi eos amet officia explicabo laborum aliquid cum temporibus.</p>

        <p className="w-full mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <div className="text-left mt-6">
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
            >
              Submit Application
            </Button>
          </div>
      </div>
      </div>


      

      {/* Right-side contact section */}
      <div className="flex-none bg-gray-900 p-8 max-w-sm mt-10 md:mt-12 md:ml-8 rounded-lg shadow-lg md:mr-8">
        <h2 className="text-xl font-bold mb-4">Online Credit Application</h2>
        <p className="mb-6">Need help filling out your application? We would be happy to help you.</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
          Contact Us
        </Button>
      </div>
    </div>

    
  );
};

export default FinancingApplication;
