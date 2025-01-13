import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons


export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prevState) => !prevState);

  const dropdownRef = useRef(null);
  const avatarDropdownRef = useRef(null); // Add this for the avatar dropdown

  let [isTcOpen, setIsTcOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  const toggleTc = () => setIsTcOpen((prev) => !prev);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the privacy dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsTcOpen(false);
      }

      // Close the avatar dropdown if clicked outside
      if (avatarDropdownRef.current && !avatarDropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="/src/assets/logo.png" className="mr-3 h-24" alt="Logo" />
          </Link>

          {/* Right section (Account management + dropdown) */}
          <div className="flex items-center gap-3 lg:order-2">
            <p className=" mt-1 text-md font-semibold w-full text-gray-500">Accounts</p>

            <div className="col-span-full cursor-pointer">
              <div onClick={toggleDropdown} className="mt-2 flex items-center gap-x-3">
                <svg
                  className="size-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative inline-block text-left" ref={avatarDropdownRef}>
              {isOpen && (
                <div
                  className="absolute right-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-2 px-3" role="none">
                    <NavLink
                      to="/Signup"
                      className={({ isActive }) =>
                        `block py-2 mb-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                          isActive ? "text-orange-700" : "text-[#330065]"
                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Sign Up
                    </NavLink>
                    <hr />
                    <NavLink
                      to="/Login"
                      className={({ isActive }) =>
                        `block py-2 mb-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                          isActive ? "text-orange-700" : "text-[#330065]"
                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Log In
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation menu */}
          <div className={`lg:flex ${isMobileMenuOpen ? 'flex justify-center' : 'hidden'} w-full lg:w-auto lg:order-1`}>
            <div className="flex gap-20">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#330065]"
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#330065]"
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#330065]"
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/tracking"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#330065]"
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Tracking
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/shipping"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#330065]"
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Shipping
                  </NavLink>
                </li>

                <div className="relative inline-block text-left" ref={dropdownRef}>
                  <button onClick={toggleTc} className="flex items-center text-gray-800 space-x-2">
                    <span>Privacy / T&C</span>
                    {isTcOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
                  </button>

                  {isTcOpen && (
                    <div
                      className="absolute right-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-2 px-3" role="none">
                        <NavLink
                          to="/PrivacyPolicy"
                          className={({ isActive }) =>
                            `block py-2 mb-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                              isActive ? "text-orange-700" : "text-[#330065]"
                            } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Privacy Policy
                        </NavLink>
                        <hr />
                        <NavLink
                          to="/TermsAndConditions"
                          className={({ isActive }) =>
                            `block py-2 mb-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                              isActive ? "text-orange-700" : "text-[#330065]"
                            } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Terms & Conditions
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
