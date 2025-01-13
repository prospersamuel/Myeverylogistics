import React  from 'react'
import './Home.css'
import { Link } from 'react-router';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';




const Home = () => {

let bg = null




  const articles = [
   


    {
      date: "Jan 12, 2025",
      category: [<FaStar key="1" />, <FaStar key="2" />, <FaStar key="3" />, <FaStar key="4" />, <FaRegStar key="5" />], // 5 full stars
      title: "Optimizing Your Supply Chain with MyEverydeal",
      description: "MyEverydeal is a revolutionary logistics platform that helps businesses streamline their supply chain operations, reduce costs, and improve delivery efficiency. Learn how MyEverydeal can transform your logistics strategy and drive business growth.",
      author: "Ngozi Okafor",
      imageUrl: "N",
    },
    {
      date: "Jan 10, 2025",
      category: [<FaStar key="1" />, <FaStar key="2" />, <FaStar key="3" />, <FaStar key="4" />, <FaStarHalfAlt key="5" />], // 4 full stars and 1 half star
      title: "MyEverydeal Makes Warehouse Operations Effortless!",
      description: "As freight management becomes increasingly complex, MyEverydeal is taking the lead with its cutting-edge technology that offers real-time tracking, smart route optimization, and end-to-end supply chain visibility. Discover how this platform is reshaping the logistics landscape.",
      author: "Chijioke Nwosu",
      imageUrl: "C",
    },
    {
      date: "Jan 5, 2025",
      category: [<FaStar key="1" />, <FaStar key="2" />, <FaStar key="3" />, <FaStar key="4" />, <FaStarHalfAlt key="5" />], // 5 full stars
      title: "MyEverydeal Transformed How We Manage Our Supply Chain!",
      description: "Warehouse operations are at the heart of logistics. With MyEverydeal, businesses can optimize inventory management, reduce bottlenecks, and ensure faster order fulfillment. Learn how to make your warehouse smarter and more efficient with MyEverydeal.",
      author: "Adebayo Adeyemi",
      imageUrl: "A",
    }



  ];
  

















  return (
    <>
    <div className=" flex justify-between items-center flex-wrap relative isolate px-6 pt-14 lg:px-8 border-8">
        <div>
        <img 
        className='Home-image'
        src="/src/assets/home page.png" alt="home" width={400}/>
        </div>
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    ></div>
  </div>
  <div className="mx-auto max-w-2xl py-4 sm:py-28">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm/6 text-[#330065] ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding.{" "}

        <Link 
        className="font-semibold text-[#EF3E53]"
        to='/About'>
        <span className="absolute inset-0" aria-hidden="true"></span>Read more{" "}
        <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
    <div className="text-center">
        <h1 className=" text-5xl font-bold tracking-tight text-balance text-[#330065] sm:text-5xl">
        Welcome To MyEvery Logistics
        </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
      Welcome to MyEveryLogistics, your trusted partner in efficient and reliable logistics solutions. We are committed to delivering exceptional service, ensuring your goods reach their destination on time and in perfect condition. Whether you're shipping locally or globally, our expert team is here to support your business every step of the way. Let us handle the logistics, so you can focus on what matters most.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        
      <div>
            <Link to='/Signup'>
            <button
                className="text-white bg-[#EF3E53] hover:bg-[#e44659] focus:ring-4 focus:ring-[#330065] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none shadow-md"
              >
                Get Started
              </button>
            </Link>             
            
            </div>
           


            <Link to="/About" className="text-sm/6 font-semibold text-[#330065] cursor-pointer">
            Learn more <span aria-hidden="true">→</span>
          </Link>

      </div>
    </div>
  </div>
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    ></div>
  </div>
</div>
<div>
</div>










{/* shipment management */}




<div className="bg-gray-50 py-24 sm:py-10">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-4xl mt-3 font-bold tracking-tight text-center text-balance text-[#330065] sm:text-5xl">WHAT WE OFFER</h2>
    <br /><br />
    <div className="mx-auto mt-10 flex flex-wrap justify-around items-center gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div className='flex flex-col justify-center items-center'>
      <img 
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" 
        src="/src/assets/pickup.png" 
        alt="SHEDULE PICKUP" 
      />
      <h2 className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>SHEDULE PICKUP</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img 
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" 
        src="/src/assets/location.png"
        alt="FIND LOCATION" 
        width="158" 
        height="48" 
      />
      <h2 className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>FIND LOCATION</h2>
    </div>

      <div className='flex flex-col justify-center items-center'>
      <img 
        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" 
        src="/src/assets/discount.png" 
        alt="DISCOUNTED PRICE" 
        width="158" 
        height="48" 
      />
      <h2 className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>DISCOUNTED PRICE</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <img 
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" 
        src="/src/assets/fast.png" 
        alt="FAST DELIVERY" 
        width="158" 
        height="48" 
      />
      <h2 className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>FAST DELIVERY</h2>
      </div>
    </div>
  </div>
</div>









<hr />


{/* why ship with my every logistics  */}





<div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="e813992c-7d03-4cc4-a2bd-151760b470a0"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg
        x="50%"
        y="-1"
        className="overflow-visible fill-gray-50"
      >
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          strokeWidth="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
      />
    </svg>
  </div>
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          <p className="text-base/7 font-semibold text-[#EF3E53]">Ship Smarter</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance text-[#330065] sm:text-5xl">
            Why Ship with MyEveryLogistics?
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            We offer reliable, fast, and cost-effective solutions to help your business grow. With MyEveryLogistics, shipping is made easier, more efficient, and seamless.
          </p>
        </div>
      </div>
    </div>
    <div className="-ml-8 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img
        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
        src="/src/assets/homa page worker.png"
        alt="Logistics Operations"
      />
    </div>
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
          <p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
            At MyEveryLogistics, we understand the importance of timely deliveries and safe handling of your goods. Whether you're shipping locally or internationally, our platform is designed to ensure your shipments are handled with care and precision.
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <svg
                className="mt-1 size-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className='font-semibold'>
                <strong className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Real-time tracking.</strong> Keep track of your shipments from start to finish, ensuring transparency and reliability at every step.
              </span>
            </li>
            <li className="flex gap-x-3">
              <svg
                className="mt-1 size-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className='font-semibold'>
                <strong className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Secure and insured shipments.</strong> Ship with peace of mind knowing that your goods are covered with comprehensive insurance.
              </span>
            </li>
            <li className="flex gap-x-3">
              <svg
                className="mt-1 size-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                <path
                  fillRule="evenodd"
                  d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className='font-semibold'>
                <strong className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">24/7 Customer support.</strong> Our team is here to assist you with any issues, questions, or concerns you may have about your shipments.
              </span>
            </li>
          </ul>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            MyEveryLogistics is built with the latest technology to ensure the quickest, safest, and most reliable delivery service. From small packages to large freight, we handle all your logistics needs with efficiency.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No More Delays.</h2>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Experience seamless logistics with MyEveryLogistics, where we ensure your shipments are delivered on time, every time. Whether you're shipping locally or globally, you can trust us for efficient, cost-effective solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

















{/* Giving buisnesses a firm start */}



<div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className=" flex items-center justify-around">
        <div className='mx-auto max-w-2xl lg:mx-0'>
  <h2 className="text-5xl font-bold tracking-tight text-balance text-[#330065] sm:text-5xl">From the MyEverydealers</h2>
  <p className="mt-2 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Discover expert insights on optimizing logistics, improving supply chain efficiency, and transforming your business with MyEverydeal.</p>
  </div>
  <img src="https://thumbs.dreamstime.com/b/african-delivery-man-people-motorcycle-urban-scene-183047672.jpg" alt="image" width={400}className='rounded-full'/>
</div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">{article.date}</time>
                <span className="relative flex text-yellow-300 z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium hover:bg-gray-100">{article.category}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
                  <p>
                    <span className="absolute inset-0"></span>
                    {article.title}
                  </p>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{article.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <span className={`size-10 rounded-full text-white ${bg ='bg-[#EF3E53]'} flex justify-center items-center font-extrabold `}>{article.imageUrl} </span>
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0"></span>
                      {article.author}
                    </a>
                  </p>
                  <p className="text-gray-600">{article.authorRole}</p>
                </div>
              </div>
            </article>
          ))}
        </div>




        <div className='mt-10 rounded-lg py-36 flex justify-evenly bg-gray-100 items-center  gap-10'>
        <h1 className="text-5xl font-bold tracking-tight text-balance text-[#330065] sm:text-5xl">
        What are you wating for
        </h1>
            <Link to='/Signup'>
            <button
                className="text-white bg-[#EF3E53] hover:bg-[#e44659] focus:ring-4 focus:ring-[#330065] font-medium rounded-lg text-lg px-5 lg:px-20 py-2 lg:py-5 mr-2 focus:outline-none shadow-lg"
              >
                Click to Get Started
              </button>
            </Link>             
            
            </div>



  </div>
</div>












</>

  )
}

export default Home