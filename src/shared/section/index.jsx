import React, { useEffect, useRef } from "react";
import Card from "../../components/card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Card 1",
    imageUrl:
      "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    title: "Card 2",
    imageUrl:
      "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 3,
    title: "Card 3",
    imageUrl:
      "https://images.pexels.com/photos/4342098/pexels-photo-4342098.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 4,
    title: "Card 4",
    imageUrl:
      "https://images.pexels.com/photos/4559516/pexels-photo-4559516.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 5,
    title: "Card 5",
    imageUrl:
      "https://images.pexels.com/photos/4427909/pexels-photo-4427909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 6,
    title: "Card 6",
    imageUrl:
      "https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 7,
    title: "Card 7",
    imageUrl:
      "https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 8,
    title: "Card 8",
    imageUrl:
      "https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 9,
    title: "Card 9",
    imageUrl:
      "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 10,
    title: "Card 10",
    imageUrl:
      "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 11,
    title: "Card 11",
    imageUrl:
      "https://images.pexels.com/photos/4342098/pexels-photo-4342098.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const Section = ({ label, description, data, ...rest }) => {
  const ref = useRef(null);

  const scrollAmount = 400;

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {}, []);
  return (
    <section className="w-full flex flex-col items-start py-10 sm:py-20 lg:py-30 px-4 sm:px-6 lg:px-8 bg-test">
      <div className="flex flex-col sm:flex-row items-center px-10 sm:space-x-40">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {label}
        </h1>
        <div className="max-w-md">
          <p className="text-sm text-gray-300 text-center sm:text-start">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {/* Slider */}
        <div
          ref={ref}
          className="scroller flex mt-8 overflow-x-auto scroll-smooth py-6"
        >
          {items.map((card) => (
            <div key={card.id}>
              <Card title={card.title} url={card.imageUrl} />
            </div>
          ))}
        </div>

        {/* Sliding Controllers */}
        <div className="flex space-x-4 transition-all duration-200 self-end">
          <FaArrowLeft
            onClick={scrollLeft}
            className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer"
          />
          <FaArrowRight
            onClick={scrollRight}
            className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
