import React, { useState } from "react";

// Reusable Input Component
const InputField = ({ label, placeholder, type, id, ...rest }) => (
  <div className="sm:col-span-3">
    <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        {...rest}
        type={type}
        id={id}
        placeholder={placeholder}
        className="block w-full bg-white text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#330065] sm:text-sm/6 w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
      />
    </div>
  </div>
);

// Reusable Select Component
const SelectField = ({ label, options, id, ...rest }) => (
  <div className="sm:col-span-3">
    <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
      {label}
    </label>
    <div className="mt-2 grid grid-cols-1">
      <select
        {...rest}
        id={id}
        className="w-full appearance-none rounded-lg bg-white py-3.5 px-3 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-[#330065] sm:text-sm/6 text-gray-800 font-semibold"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8 11a.75.75 0 0 0 .53-.22l3-3a.75.75 0 0 0-1.06-1.06L8 9.69 5.72 7.22a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 .53.22Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

const Shipping = () => {
  const [progress, setProgress] = useState(0);

  // Handle progress update
  const handleProgress = (sectionIndex) => {
    const sectionProgress = 25; // Each section represents 25%
    setProgress(sectionIndex * sectionProgress);
  };

  return (
    <>
    
<div className="flex">
  <div className="w-[80%] px-32 py-12 rounded-lg m-auto mt-20 border-2 mb-32">
    <div className="space-y-7">
      {/* Package Information Section */}
      <section className="packageInformation space-y-7">
        <h1 className="text-3xl text-[#330065] font-extrabold">Package Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <InputField label="Type of Package" placeholder="Type of Package" type="text" id="package-type" />
          <InputField label="Quantity of Package" placeholder="Eg. 1 Units" type="number" id="quantity" />
        </div>
        <div className="pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-1">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Additional Information (Optional)
              </label>
              <div className="mt-2">
                <textarea
                  placeholder="Enter any Additional Information about your Package"
                  id="about"
                  rows="3"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <input className="size-5" type="checkbox" />
                <h2 className="text-sm/6 font-medium text-gray-900">Is this package breakable?</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 flex justify-end">
          <button
            className="bg-[#EF3E53] hover:bg-[#e44659] text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => handleProgress(1)}
          >
            Save Information
          </button>
        </div>
      </section>

      <hr />
      <br />

      {/* Pickup Information Section */}
      <section className="space-y-7">
        <h1 className="text-3xl text-[#330065] font-extrabold">Pickup Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <InputField label="Pickup Contact / Business Name" placeholder="John Doe" type="text" id="pickup-name" />
          <InputField label="Pickup Contact Address" placeholder="johndoe@gmail.com" type="email" id="pickup-email" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <SelectField label="Pickup Contact State" options={["Abuja", "Lagos", "Imo"]} id="pickup-state" />
          <InputField label="Pickup Contact Number" placeholder="09029817365" type="tel" id="pickup-number" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <input className="size-5" type="checkbox" />
          <h2 className="text-sm/6 font-medium text-gray-900">Multiple Pickup Locations</h2>
        </div>
        <div className="w-full py-4 flex justify-end">
          <button
            className="bg-[#EF3E53] hover:bg-[#e44659] text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => handleProgress(2)}
          >
            Save Information
          </button>
        </div>
      </section>

      <hr />
      <br />

      {/* Receiver Information Section */}
      <section className="space-y-7">
        <h1 className="text-3xl text-[#330065] font-extrabold">Receiver's Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <InputField label="Receiver's Name" placeholder="Jane Smith" type="text" id="receiver-name" />
          <InputField label="Receiver's Address" placeholder="janesmith@gmail.com" type="email" id="receiver-email" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <SelectField label="Receiver's State" options={["Abuja", "Lagos", "Imo"]} id="receiver-state" />
          <InputField label="Receiver's Contact Number" placeholder="08004938726" type="tel" id="receiver-number" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <input className="size-5" type="checkbox" />
          <h2 className="text-sm/6 font-medium text-gray-900">Multiple Pickup Locations</h2>
        </div>
        <div className="w-full py-4 flex justify-end">
          <button
            className="bg-[#EF3E53] hover:bg-[#e44659] text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => handleProgress(3)}
          >
            Save Information
          </button>
        </div>
      </section>

      <hr />
      <br />

      {/* Sender Information Section */}
      <section className="space-y-7">
        <h1 className="text-3xl text-[#330065] font-extrabold">Sender's Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <InputField label="Sender's Name" placeholder="Barry Allen" type="text" id="sender-name" />
          <InputField label="Sender's Address" placeholder="baryallen@gmail.com" type="email" id="sender-email" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
          <SelectField label="Sender's State" options={["Abuja", "Lagos", "Imo"]} id="sender-state" />
          <InputField label="Sender's Contact Number" placeholder="07063374895" type="tel" id="sender-number" />
        </div>
        <div className="w-full py-4 flex justify-end">
          <button
            className="bg-[#EF3E53] hover:bg-[#e44659] text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => handleProgress(4)}
          >
            Save Information
          </button>
        </div>
      </section>
    </div>
  </div>

  {/* Progress Bar - Vertically Aligned */}
  <div className=" w-[10%] px-10 py-5 mx-auto mt-20 rounded-lg border-2 flex items-center justify-center">
    <div className="h-[70%] w-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#EF3E53] transition-all duration-300"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  </div>
</div>

    </>
  );
};

export default Shipping;
