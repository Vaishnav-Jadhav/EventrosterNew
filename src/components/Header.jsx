import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import img from "/img/BrandLogo.jpeg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const hoverTimeout = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    clearTimeout(hoverTimeout.current);
    setHovered(name);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(null);
    }, 200);
  };

  const vendorCategories = [
    { title: "Photographers", items: ["Photographers"] },
    { title: "Makeup", items: ["Bridal Makeup Artists", "Family Makeup"] },
    { title: "Planning & Décor", items: ["Wedding Planners", "Decorators"] },
    { title: "Music & Dance", items: ["DJs", "Sangeet Choreographer", "Wedding Entertainment"] },
    { title: "Food", items: ["Catering Services", "Cake", "Chaat & Food Stalls", "Bartenders"] },
  ];

  const venueCategories = [
    { title: "By Type", items: ["Banquet Halls", "Marriage Gardens", "Resorts", "Farmhouses"] },
    { title: "By City", items: ["Delhi NCR", "Mumbai", "Jaipur", "Udaipur", "Goa"] },
    { title: "Destination", items: ["Goa", "Jim Corbett", "Udaipur", "Jaipur"] },
  ];

  const cityCategories = {
    "Top Cities": [
      "All Cities",
      "Delhi NCR",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Pune",
      "Lucknow",
      "Jaipur",
      "Kolkata",
      "Hyderabad",
    ],
    "Popular Cities": [
      "Gurgaon",
      "Goa",
      "Udaipur",
      "Jim Corbett",
      "Indore",
      "Agra",
      "Kanpur",
      "Ahmedabad",
      "Navi Mumbai",
      "Kochi",
    ],
    States: ["Kerala", "Rajasthan", "Himachal Pradesh", "Maharashtra"],
    "International Cities": ["Dubai", "Thailand", "Bali", "Abu Dhabi"],
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-yellow-50/80 to-yellow-100/60 backdrop-blur-md border-b border-yellow-200 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
          <img src={img} alt="Brand Logo" className="w-10 h-10 rounded-md shadow-md object-cover" />
          <span className="font-bold text-gray-900 text-2xl tracking-tight">
            EventRoster
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium text-gray-800 relative">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Venues")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-yellow-700 transition cursor-pointer">
              Venues
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-200 ${
                  hovered === "Venues" ? "rotate-180 text-yellow-700" : ""
                }`}
              />
            </button>
            {hovered === "Venues" && (
              <div className="absolute left-0 mt-4 grid grid-cols-3 gap-10 bg-gradient-to-br from-white via-amber-50/90 to-yellow-50 border border-yellow-200 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.3)] p-6 w-[850px] animate-fadeSlide z-50">
                {venueCategories.map((cat) => (
                  <div key={cat.title}>
                    <h3 className="text-yellow-700 font-semibold mb-2">{cat.title}</h3>
                    <ul className="space-y-1">
                      {cat.items.map((sub) => (
                        <li
                          key={sub}
                          className="text-gray-700 hover:text-yellow-600 cursor-pointer transition"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Vendors")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 cursor-pointer hover:text-yellow-700 transition">
              Vendors
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-200 ${
                  hovered === "Vendors" ? "rotate-180 text-yellow-700" : ""
                }`}
              />
            </button>
            {hovered === "Vendors" && (
              <div className="absolute left-0 mt-4 grid grid-cols-3 gap-10 bg-gradient-to-br from-white via-amber-50/90 to-yellow-50 border border-yellow-200 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.3)] p-6 w-[850px] animate-fadeSlide z-50">
                {vendorCategories.map((cat) => (
                  <div key={cat.title}>
                    <h3 className="text-yellow-700 font-semibold mb-2">{cat.title}</h3>
                    <ul className="space-y-1">
                      {cat.items.map((sub) => (
                        <li
                          key={sub}
                          className="text-gray-700 hover:text-yellow-600 cursor-pointer transition"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <a
            href="#"
            className="hover:text-yellow-700 transition cursor-pointer"
          >
            Photos
          </a>
          <a
            href="#"
            className="hover:text-yellow-700 transition cursor-pointer"
          >
            Real Weddings
          </a>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Select City")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-yellow-700 transition cursor-pointer">
              Select City
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-200 ${
                  hovered === "Select City" ? "rotate-180 text-yellow-700" : ""
                }`}
              />
            </button>
            {hovered === "Select City" && (
              <div className="absolute top-full left-0 mt-4 bg-gradient-to-br from-white via-amber-50/90 to-yellow-50 border border-yellow-200 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.3)] p-6 w-[800px] max-h-[420px] overflow-y-auto z-50 animate-fadeSlide">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 text-yellow-600" size={18} />
                  <input
                    type="text"
                    placeholder="Search City, State..."
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 border-yellow-200 bg-white/90 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                  {Object.entries(cityCategories).map(([section, cities]) => (
                    <div key={section}>
                      <h3 className="text-yellow-700 font-semibold mb-2">{section}</h3>
                      {cities.map((city) => (
                        <p
                          key={city}
                          className="text-gray-700 hover:text-yellow-600 cursor-pointer transition"
                        >
                          {city}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="hidden md:flex items-center space-x-5">
          <button className="bg-white border cursor-pointer border-yellow-300 rounded-xl px-5 py-2 text-base font-medium hover:bg-yellow-50 hover:shadow-sm transition-all">
            Download App
          </button>
          <button className="bg-gradient-to-r cursor-pointer from-yellow-500 to-yellow-700 text-white rounded-xl px-5 py-2 text-base font-semibold hover:brightness-110 shadow-sm">
            Log In
          </button>
        </div>
        <button
          className="md:hidden p-2 text-gray-700 hover:text-yellow-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-yellow-200 shadow-lg px-6 py-4 flex flex-col space-y-4 text-gray-800 font-medium">
          <a href="#" className="hover:text-yellow-700 transition">
            Venues
          </a>
          <a href="#" className="hover:text-yellow-700 transition">
            Vendors
          </a>
          <a href="#" className="hover:text-yellow-700 transition">
            Photos
          </a>
          <a href="#" className="hover:text-yellow-700 transition">
            Real Weddings
          </a>
          <a href="#" className="hover:text-yellow-700 transition">
            Select City
          </a>
          <button className="bg-white border border-yellow-300 rounded-xl px-4 py-2 hover:bg-yellow-50 transition">
            Download App
          </button>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-xl px-4 py-2 font-semibold hover:brightness-110 shadow-sm">
            Log In
          </button>
        </div>
      )}
    </header>
  );
}
