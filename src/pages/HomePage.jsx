import React from "react";
import Section from "../shared/section";
import elf from "../assets/elf.png";
import { FaChevronDown } from "react-icons/fa";
import {
  academyData,
  advisoryData,
  agencyData,
  allianceData,
} from "../utils/dummy";

const HomePage = () => {
  return (
    <div className="w-full max-w-[86rem] mx-auto px-8 sm:px-4 flex flex-col pt-20">
      <section className="flex items-center justify-center pt-20 pb-20 sm:pb-40">
        <div className="">
          <p className="bg-gradient-to-r from-[#e9f0ec] via-[#83aac3] to-[#0f0985] inline-block text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl font-semibold py-10 text-center">
            future proof <br /> your{" "}
            <span className="font-semibold">technology</span>
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-20 lg:py-30">
        <div className="grid items-center grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 px-4 sm:px-6 lg:px-8">
          <div className="order-2">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              we list your
            </h2>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              perspective
            </h1>
            <p className="mt-4 text-base leading-relaxed">
              a transformation group for{" "}
              <span className="font-bold">brand, digital, and media.</span>
            </p>
          </div>

          <div className="hidden sm:block relative order-1">
            <div className="relative w-full max-w-sm mt-4 mb-10 mr-auto">
              <img
                className="mr-auto aspect-square"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        label={"ADVISORY"}
        description={
          "Our Strategic Consultants bring a voice of experience and expertise to your organization."
        }
        data={advisoryData}
      />

      <Section
        label={"ACADEMY"}
        description={
          "Educate and Inspire your people by given them the knowledge excel in the latest technology, tactics and training."
        }
        data={academyData}
      />

      <Section
        label={"AGENCY"}
        description={
          "Execute flawlessly with strategic talent and expert artistry. Our Agency will become a trusted extension of your marketing department."
        }
        data={agencyData}
      />

      <Section
        label={"ALLIANCE"}
        description={
          "Execute flawlessly with strategic talent and expert artistry. Our Agency will become a trusted extension of your marketing department."
        }
        data={allianceData}
      />

      <section className="flex flex-col w-full space-y-12">
        <h1 className="uppercase text-4xl sm:text-5xl lg:text-7xl font-bold self-center">
          Experience
        </h1>
        <div className="w-full h-[800px] grid grid-rows-4 grid-flow-col">
          <div className="col-start-1 row-start-1 col-span-2 row-span-2 bg-green-200"></div>
          <div className="w-full col-start-3 row-start-1 col-span-2 row-span-1 bg-green-400"></div>
          <div className="w-full col-start-3 row-start-2 col-span-1 row-span-2 bg-blue-400"></div>
          <div className="w-full col-start-4 row-start-2 col-span-1 row-span-2 bg-blue-200"></div>
          <div className="w-full col-start-1 row-start-3 col-span-1 row-span-2 bg-red-200"></div>
          <div className="w-full col-start-2 row-start-3 col-span-1 row-span-1 bg-red-400"></div>
          <div className="w-full col-start-2 row-start-3 col-span-2 row-span-1 bg-yellow-400"></div>
          <div className="w-full col-start-4 row-start-4 col-span-1 row-span-1 bg-yellow-200"></div>
        </div>
      </section>

      <section className="w-full flex flex-col bg-test p-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal mb-30">
          Schedule a <span className="font-bold">Meeting</span> for a Discovery
          session
        </h1>
        <h4 className="mt-10">
          Pick a <span className="font-semibold">date and time.</span>
        </h4>
        <div className="flex items-center mt-5 space-x-6">
          <button
            className="py-1.5 px-8 text-sm font-bold inline-flex space-x-6 items-center justify-between border-[2.5px] border-white rounded-full"
            type="button"
            onClick={() => console.log("test")}
          >
            <p className="">Day</p>
            <p className="">Month</p>
            <p className="">Year</p>
            <FaChevronDown className="h-5 w-5 cursor-pointer" />
          </button>
          <button
            className="py-1.5 px-5 text-sm font-bold inline-flex space-x-6 items-center justify-between border-[2.5px] border-white rounded-full"
            type="button"
            onClick={() => console.log("test")}
          >
            <p className="">Time</p>
            <FaChevronDown className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
        <button
          className="py-1.5 px-5 text-sm font-semibold inline-flex space-x-3 items-center justify-between bg-blue-600 rounded-full mt-5 max-w-[230px]"
          type="button"
          onClick={() => console.log("test")}
        >
          <p className="">SCHEDULE A MEETING</p>
          <div className="rounded-full bg-black h-5 w-5 p-4 inline-flex items-center justify-center">
            2/2
          </div>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
