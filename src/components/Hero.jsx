import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import bgImage from "/img/main.jpg";

export function Hero() {
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);
  const vendorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (vendorRef.current && !vendorRef.current.contains(e.target)) {
        setShowVendorDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className="relative w-full min-h-[100vh] flex items-center justify-center text-center bg-cover bg-center pt-20"
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

        <div className="mt-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between items-stretch border border-yellow-300/50 relative">
          <div className="relative w-full lg:w-2/3" ref={vendorRef}>
            <button
              onClick={() => setShowVendorDropdown((prev) => !prev)}
              className="w-full px-4 py-3 rounded-xl border border-yellow-300 bg-white text-gray-700 text-left flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              <span>Select vendor type</span>
              <ChevronDown
                className={`transition-transform ${showVendorDropdown ? "rotate-180" : ""}`}
                size={20}
              />
            </button>

            {showVendorDropdown && (
              <div className="absolute top-full left-0 mt-2 w-[700px] sm:w-[850px] bg-gradient-to-br from-white via-yellow-50 to-amber-50 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.3)] border border-yellow-200 p-6 z-20 max-h-[480px] overflow-y-auto transition-all duration-300">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                  <div>
                    <h3 className="text-yellow-600 font-semibold mb-2">Photographers</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Photographers</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Makeup</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Bridal Makeup Artists</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer"> Family Makeup</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Planning & Decor</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Wedding Planners</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Decorators</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Mehndi</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Mehendi Artists</p>
                  </div>
                  <div>
                    <h3 className="text-yellow-600 font-semibold mb-2">Music & Dance</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">DJs</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Sangeet Choreographer</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Wedding Entertainment</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Invites & Gifts</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Invitations</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Favors</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Trousseau Packers</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Invitation Gifts</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Mehndi Favors</p>
                  </div>
                  <div>
                    <h3 className="text-yellow-600 font-semibold mb-2">Bridal Wear</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Bridal Lehengas</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Kanjeevaram / Silk Sarees</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Cocktail Gowns</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Trousseau Sarees</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Groom Wear</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Sherwani</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Wedding Suits / Tuxes</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Sherwani On Rent</p>
                  </div>
                  <div>
                    <h3 className="text-yellow-600 font-semibold mb-2">Jewellery & Accessories</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Jewellery</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Flower Jewellery</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Bridal Jewellery on Rent</p>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Accessories</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Pandits</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Wedding Pandits</p>

                    <h3 className="text-yellow-600 font-semibold mt-4 mb-2">Bridal Grooming</h3>
                    <p className="text-gray-700 hover:text-yellow-600 cursor-pointer">Beauty & Wellness</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-auto flex justify-center">
            <button className="w-full lg:w-auto bg-gradient-to-r from-yellow-400 to-yellow-700 text-white font-semibold px-10 py-3 rounded-xl hover:brightness-110 cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
        <div className="mt-6 text-sm sm:text-base text-yellow-50/80 font-light">
          Popular Searches:&nbsp;
          <a href="#" className="text-yellow-200 hover:text-yellow-400 transition-colors">
            Wedding Photographers in India
          </a>{" "}
          |{" "}
          <a href="#" className="text-yellow-200 hover:text-yellow-400 transition-colors">
            Bridal Makeup Artists in India
          </a>{" "}
          |{" "}
          <a href="#" className="text-yellow-200 hover:text-yellow-400 transition-colors">
            Wedding Cards in India
          </a>
        </div>
      </div>
    </section>
  );
}
