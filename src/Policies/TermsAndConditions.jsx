import React, { useEffect } from 'react';

const TermsAndConditions = () => {

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Terms and Conditions Section */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto bg-white pt-10 px-20 pb-24  rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Terms and Conditions</h2>
          
          <div className="space-y-8">
            <div className="section transform translate-y-12 transition-all duration-500">
              <h3 className="text-2xl text-blue-800 font-semibold mb-3">Introduction</h3>
              <p className="text-gray-700 text-lg">
                Welcome to Myeverydeal! These Terms and Conditions govern your access to and use of our logistics services, websites, and mobile applications. By accessing or using our services, you agree to comply with and be bound by these terms. Please read them carefully.
              </p>
            </div>
            <div className="section transform translate-y-12 transition-all duration-500">
              <h3 className="text-2xl text-blue-800 font-semibold mb-3">Services</h3>
              <p className="text-gray-700 text-lg">
                Myeverydeal offers a variety of logistics solutions, including but not limited to:
                <ul className="list-disc pl-8 mt-2">
                  <li>Package and goods transportation</li>
                  <li>Shipment tracking and management</li>
                  <li>Real-time delivery updates and notifications</li>
                  <li>Custom logistics solutions for businesses</li>
                </ul>
                Our services are available to both individual customers and businesses. We ensure timely deliveries and the safety of goods throughout the shipping process.
              </p>
            </div>
            <div className="section transform translate-y-12 transition-all duration-500">
              <h3 className="text-2xl text-blue-800 font-semibold mb-3">Your Responsibilities</h3>
              <p className="text-gray-700 text-lg">
                By using our services, you agree to the following responsibilities:
                <ul className="list-disc pl-8 mt-2">
                  <li>Provide accurate and complete information regarding your shipments, including package contents, addresses, and contact details.</li>
                  <li>Ensure that all packages comply with local laws, regulations, and customs requirements.</li>
                  <li>Accept liability for any incorrect or incomplete information provided that may delay or affect the delivery process.</li>
                  <li>Promptly notify us of any issues with shipments or deliveries.</li>
                </ul>
              </p>
            </div>
            <div className="section transform translate-y-12 transition-all duration-500">
              <h3 className="text-2xl text-blue-800 font-semibold mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 text-lg">
                Myeverydeal shall not be held liable for any loss, damage, or delay caused by:
                <ul className="list-disc pl-8 mt-2">
                  <li>Events outside of our control, including natural disasters, pandemics, strikes, or other unforeseen circumstances.</li>
                  <li>Actions of third parties involved in the shipping process.</li>
                  <li>Incorrect, incomplete, or inaccurate information provided by the customer.</li>
                </ul>
                We will, however, make reasonable efforts to resolve any issues promptly and provide you with updates on the status of your shipments.
              </p>
            </div>
            <div className="section transform translate-y-12 transition-all duration-500">
              <h3 className="text-2xl text-blue-800 font-semibold mb-3">Changes to the Terms</h3>
              <p className="text-gray-700 text-lg">
                Myeverydeal reserves the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page, and the updated version will become effective as of the date of posting. We encourage you to review this page periodically to stay informed about any updates or changes.
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default TermsAndConditions;
