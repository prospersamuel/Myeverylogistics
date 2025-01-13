

// import React from 'react'
// import { useState } from 'react';

// const Carousel = ({images}) => {




//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   }



//   return (
// <div className="relative w-full max-w-3xl mx-auto">
//       {/* Image container */}
//       <div className="overflow-hidden rounded-lg">
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-auto transition-transform duration-500 ease-in-out"
//         />
//       </div>

//       {/* Navigation buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition duration-200"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition duration-200"
//       >
//         &#8250;
//       </button>

//       {/* Dots indicators */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Carousel
