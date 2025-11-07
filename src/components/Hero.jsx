import React from "react";
import { ChevronDown } from "lucide-react";
import bgImage from "/img/main.jpg";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center text-center bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-md text-yellow-100">
          Your Wedding,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700">
            Your Way
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-yellow-50/90 font-light">
          Find the best wedding vendors with thousands of trusted reviews
        </p>
        <div className="mt-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between items-stretch border border-yellow-200">
          <div className="relative w-full lg:w-1/3">
            <select className="w-full px-4 py-3 rounded-xl border cursor-pointer  border-yellow-200 bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Select vendor type</option>
              <option>Photographer</option>
              <option>Caterer</option>
              <option>Makeup Artist</option>
              <option>Decorator</option>
              <option>Planner</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
          <div className="relative w-full lg:w-1/3">
            <select className="w-full px-4 py-3 rounded-xl border border-yellow-200 cursor-pointer  bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Select city</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Jaipur</option>
              <option>Chennai</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
          <div className="w-full lg:w-auto flex justify-center">
            <button className="w-full lg:w-auto cursor-pointer  bg-gradient-to-r from-yellow-400 to-yellow-700 text-white font-semibold px-10 py-3 rounded-xl hover:brightness-110 shadow-lg transition-all whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-6 text-sm sm:text-base text-yellow-50/80 font-light">
          Popular Searches:&nbsp;
          <a
            href="#"
            className="text-yellow-200 hover:text-yellow-400 transition-colors"
          >
            Wedding Photographers in India
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-yellow-200 hover:text-yellow-400 transition-colors"
          >
            Bridal Makeup Artists in India
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-yellow-200 hover:text-yellow-400 transition-colors"
          >
            Wedding Cards in India
          </a>
        </div>
      </div>
    </section>
  );
}
