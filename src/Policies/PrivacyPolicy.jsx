import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // React icons for Email, Phone, and Address

const PrivacyPolicy = () => {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16 bg-gray-50">
        {/* Section for Privacy Policy Header and Image */}
        <div className="mb-8 sm:mb-12 flex justify-center">
          <img
            src="/src/assets/privacy policy.png"
            alt="Privacy Policy"
            className="w-full sm:w-3/4 lg:w-52 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Privacy Policy Section */}
        <div className="section transform translate-y-12 transition-all duration-500 mb-8">
          <h3 className="text-md sm:text-2xl lg:text-2xl text-blue-800 font-semibold mb-4">Privacy Policy</h3>
          <p className="text-gray-700 text-md sm:text-xl lg:text-md leading-relaxed">
            We value your privacy and are committed to protecting your personal information. By using our services, you agree to our{' '}
           Privacy Policy. We collect personal data to facilitate service delivery and improve our operations.
          </p>
        </div>

        {/* Governing Law Section */}
        <div className="section transform translate-y-12 transition-all duration-500 mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-2xl text-blue-800 font-semibold mb-4">Governing Law</h3>
          <p className="text-gray-700 text-lg sm:text-xl lg:text-md leading-relaxed">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Myeverydeal operates. Any legal disputes will be subject to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="section transform translate-y-12 transition-all duration-500 mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-2xl text-blue-800 font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-700 text-lg sm:text-xl lg:text-md leading-relaxed mb-4">
            If you have any questions or concerns about these Terms and Conditions, please feel free to contact us:
          </p>
          
          {/* Contact Information with Icons */}
          <ul className="list-none space-y-4">
            <li className="flex items-center gap-3 text-lg sm:text-xl lg:text-md text-gray-800">
              <FaEnvelope className="text-blue-600" /> 
              <a href="mailto:support@myeverydeal.com" className="text-blue-600 hover:underline">
                support@myeverydeal.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-lg sm:text-xl lg:text-md text-gray-800">
              <FaPhone className="text-blue-600" />
              <a href="tel:+18001234567" className="text-blue-600 hover:underline">
              +234 701 751 8376
              </a>
            </li>
            <li className="flex items-center gap-3 text-lg sm:text-xl lg:text-md text-gray-800">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>123 Kpegi Abuja, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Additional Images Section */}
        <div className="mb-8 py-20">
          <h3 className="text-2xl sm:text-3xl lg:text-2xl text-blue-800 font-semibold mb-4">Our Commitment to Security</h3>
          <p className="text-gray-700 text-lg sm:text-xl lg:text-md leading-relaxed mb-4">
            We are committed to ensuring your data security. Here are some measures we take to keep your information safe:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://media.istockphoto.com/id/1402450534/photo/padlock-with-keyhole-in-data-security-on-circuit-modern-safety-digital-concept.jpg?s=612x612&w=0&k=20&c=vBzRPNY53FvkckEBjRxZBm-3QTQd3bttgglFRPgYOqc=" alt="Security Image 1" className="w-full h-[40vh] mb-4 rounded-lg" />
              <h4 className="text-xl text-blue-800 font-semibold">Encryption</h4>
              <p className="text-gray-700">We use advanced encryption methods to secure your data during transmission and storage.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://asc.com.ng/wp-content/uploads/2024/11/audit.webp" alt="Security Image 3" className="w-full h-[40vh] mb-4 rounded-lg" />
              <h4 className="text-xl text-blue-800 font-semibold">Regular Audits</h4>
              <p className="text-gray-700">We conduct regular security audits to identify and address potential vulnerabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
