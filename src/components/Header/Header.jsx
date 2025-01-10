import React from 'react'

const Header = () => {
  return (


<header className="bg-white">
  <nav
    className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
          aria-expanded="false"
        >
          Product
          <svg
            className="size-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Flyout menu */}
        <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {/* Menu items */}
            {[
              {
                title: "Analytics",
                description: "Get a better understanding of your traffic",
                iconPath:
                  "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z",
              },
              // Add other items as objects here
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.iconPath}
                    />
                  </svg>
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    {item.title}
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href="#" className="text-sm font-semibold text-gray-900">
        Features
      </a>
      <a href="#" className="text-sm font-semibold text-gray-900">
        Marketplace
      </a>
      <a href="#" className="text-sm font-semibold text-gray-900">
        Company
      </a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </nav>
  {/* Mobile menu */}
  <div className="lg:hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {/* Mobile menu items */}
            <a
              href="#"
              className="block rounded-lg py-2 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Features
            </a>
            {/* Add more items here */}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    



  )
}

export default Header