import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

// Hero Section
const Hero = () => (
  <header className="relative bg-[#330065] text-white py-20 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1255470283/photo/biker-in-motion-motogirl-motoboy.jpg?s=612x612&w=0&k=20&c=pkvnXqrmkwAMP2w8CZnCLYyZpMkca11WoT5JiON5FIQ=')",
      }}
    ></div>
    <div className="relative z-10 text-center px-6 animate-fade-in">
      <h1 className="text-5xl font-bold tracking-tight text-balance text-[#EF3E53] sm:text-5xl">
        Revolutionizing Logistics
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
        <Typewriter
          words={[
            "Efficient. Reliable. Global.",
            "Logistics Simplified.",
            "We Move Your World Forward.",
          ]}
          loop
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
      <Link 
      to='/Signup'
      className="mt-8 inline-block bg-[#EF3E53] px-6 py-3 rounded-lg font-semibold text-white hover:bg-[#c63b4d] transition"
      > Get Started
    </Link>
    </div>
  </header>
);

// About Section
const AboutSection = () => (
  <section
    className="py-16 bg-gray-100 text-gray-800 overflow-hidden animate-slide-up"
  >
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="text-left">
        <h2 className="text-4xl font-bold">
          About <span className="text-[#E44659]">MyEvery Logistics</span>
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          We specialize in offering innovative logistics solutions that connect
          businesses <br /> to Nigeria With a proven track record in all
          36 Countries, we deliver reliable, scalable, <br /> and cutting-edge services.
        </p>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          From freight forwarding to last-mile delivery, we’re your trusted
          partner for efficiency and excellence.
        </p>
      </div>
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdFHF6WT45yiKsyBIJv8nrJCdEo6Jq8XjVrSyPoIFFXPgmhkpFs4vVtvlc9nu3Gjn5v0&usqp=CAU"
          alt="Logistics"
          className="rounded-lg shadow-lg w-96"
        />
      </div>
    </div>
  </section>
);

// Core Values
import { FaHandshake, FaLightbulb, FaUserAlt, FaLeaf, FaRocket, FaUsers } from 'react-icons/fa';

const CoreValues = () => (
  <>
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        Our <span className="text-[#E44659]">Core Values</span>
      </h2>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Guided by principles that prioritize trust, innovation, and customer success.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Integrity",
            description: "We uphold the highest ethical standards in all we do.",
            icon: <FaHandshake size={40} className="text-[#E44659]" />
          },
          {
            title: "Innovation",
            description: "Constantly seeking creative solutions to improve efficiency.",
            icon: <FaLightbulb size={40} className="text-[#E44659]" />
          },
          {
            title: "Customer Focus",
            description: "Your success is our mission, and we tailor every service to meet your needs.",
            icon: <FaUserAlt size={40} className="text-[#E44659]" />
          },
          {
            title: "Sustainability",
            description: "We prioritize eco-friendly logistics solutions for a better future.",
            icon: <FaLeaf size={40} className="text-[#E44659]" />
          },
          {
            title: "Empowerment",
            description: "Strong partnerships drive mutual growth and long-term success.",
            icon: <FaRocket size={40} className="text-[#E44659]" />
          },
          {
            title: "Collaboration",
            description: "Strong partnerships drive mutual growth and long-term success.",
            icon: <FaUsers size={40} className="text-[#E44659]" />
          },
        ].map((value, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform "
          >
            <div className="flex justify-center mb-4">
              {value.icon}
            </div>
            <h3 className="mt-3 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
              {value.title}
            </h3>
            <p className="mt-2 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
);






//Stats
function Stats() {


  const links = [
    { name: 'Careers' },
    { name: 'Internship' },
    { name: 'Values' },
    { name: 'Leadership' }
  ]
  const stats = [
    { name: 'State Served', value: '35+' },
    { name: 'On-Time Delivery Rate', value: '99.8%' },
    { name: 'Shipments Handled', value: '10K+' },
    { name: 'International Partners', value: '20+' },
  ]
  



  return (
    <>
    
      
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Our Achievments</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
          Recognized as industry leaders for delivering world-class logistics
          solutions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <p key={link.name}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </p>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}









// Team Section
const Team = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        Meet Our <span className="text-[#E44659]">Team</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 font-bold">
        A passionate group of professionals driving innovation in logistics.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Jane Smith",
            role: "Manager",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJusDSddoq0tJp6tFL9qdPKgpL7XBEMnq_yg&s",
          },
          {
            name: "Panacea Johnson",
            role: "CEO",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5lWwW88YlUbe1HpfO0gXV7H7FNP6GZpepQ&s",
          },
          {
            name: "John Doe",
            role: "Tech Lead",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiAaKk2O5kUsjqJP01k24EW93PnSHjuJLTA&s",
          },

        ].map((member, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg object-center shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={member.img}
              alt={member.name}
              className="mx-auto w-24 h-24 rounded-full shadow-md"
            />
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              {member.name}
            </h3>
            <p className="text-[#E44659] font-semibold">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Main About Page
const About = () => (
  <div>
    <Hero />
    <AboutSection />
    <Stats/>
    <CoreValues />
    <Team />
  </div>
);



 

































export default About;












