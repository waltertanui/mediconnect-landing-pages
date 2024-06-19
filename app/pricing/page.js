import React from 'react';

function Pricing() {
  return (
    <div className="relative bg-zinc-600">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Pricing section */}
        <div className="flex flex-col items-center justify-start gap-8 sm:gap-12">
          <div className="text-3xl sm:text-4xl font-bold text-black font-inter leading-8 sm:leading-10">Pricing</div>
          <p className="text-white text-base sm:text-lg font-normal font-inter leading-6 sm:leading-8 max-w-3xl text-center">
            We offer low and affordable pricing plans designed to suit everyone's needs. Our goal is to provide top-notch healthcare services without breaking the bank. Choose a plan that fits your budget and get access to secure medical data storage, AI-driven health insights, and seamless doctor-patient communication. With PatientConnect, quality healthcare is accessible to all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-zinc-700 rounded-lg shadow text-black font-medium font-inter leading-normal">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold">$10</div>
                <div className="text-base sm:text-lg">per month</div>
              </div>
              <div className="mt-4 sm:mt-6">
                <div className="text-lg sm:text-xl font-medium mb-2">Features:</div>
                <ul className="text-base sm:text-lg">
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
              <button className="bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl font-medium mt-4 sm:mt-6">Select</button>
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-24 bg-zinc-700 rounded-lg shadow text-black font-medium font-inter leading-normal">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold">$15</div>
                <div className="text-base sm:text-lg">per month</div>
              </div>
              <div className="mt-4 sm:mt-6">
                <div className="text-lg sm:text-xl font-medium mb-2">Features:</div>
                <ul className="text-base sm:text-lg">
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
              <button className="bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl font-medium mt-4 sm:mt-6">Select</button>
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-8 bg-zinc-700 rounded-lg shadow text-black font-medium font-inter leading-normal">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold">$20</div>
                <div className="text-base sm:text-lg">per month</div>
              </div>
              <div className="mt-4 sm:mt-6">
                <div className="text-lg sm:text-xl font-medium mb-2">Features:</div>
                <ul className="text-base sm:text-lg">
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
              <button className="bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-lg sm:text-xl font-medium mt-4 sm:mt-6">Select</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 mt-8 sm:mt-12">
            <div className="p-4 bg-neutral-100 rounded-xl shadow">
              <div className="bg-zinc-600 text-black text-base sm:text-lg font-medium font-inter leading-normal py-2 px-4 rounded-lg">Monthly plans</div>
            </div>
            <div className="p-4 bg-neutral-100 rounded-xl shadow">
              <div className="text-black text-base sm:text-lg font-medium font-inter leading-normal py-2 px-4 rounded-lg">Annual plans</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
