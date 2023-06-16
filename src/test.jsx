import React from "react";

const Test = () => {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-green-100">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                className="block w-6 h-6 mr-2"
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
              <svg
                className="hidden w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Menu
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>

            <a
              href="#"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              {" "}
              Try for free{" "}
            </a>
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                    Take control <br />
                    on your daily expenses
                  </h1>
                  <p className="mt-6 text-base text-black sm:text-xl">
                    Our A.I helps you to predict your expenses based on your
                    previous activity and shares how you should manage you
                    money.
                  </p>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400"
                    role="button"
                  >
                    {" "}
                    Get started for free{" "}
                  </a>
                </div>

                <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                  <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                    <p className="text-base font-semibold text-black">
                      App available on
                    </p>

                    <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                      <a
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                      >
                        <img
                          className="w-auto rounded h-14 sm:h-16"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                          alt=""
                        />
                      </a>

                      <a
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                      >
                        <img
                          className="w-auto rounded h-14 sm:h-16"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
            <div className="lg:absolute lg:bottom-0 lg:left-0">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />

                <img
                  className="absolute -top-4 -left-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />

                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-yellow-300">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        {" "}
                        53%{" "}
                      </span>
                      <span className="block mt-2 text-base leading-tight text-black">
                        {" "}
                        High Conversions
                        <br />
                        Everything{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
