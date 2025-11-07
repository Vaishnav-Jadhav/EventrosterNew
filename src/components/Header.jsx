import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import img from "/img/BrandLogo.jpeg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Venues", dropdown: ["Banquet Halls", "Outdoor Spaces", "Hotels", "Resorts"] },
    { name: "Vendors", dropdown: ["Caterers", "Photographers", "Decorators", "Planners"] },
    { name: "Photos" },
    { name: "Real Weddings" },
    { name: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-gradient-to-r from-yellow-50/80 to-yellow-100/60 backdrop-blur-md border-b border-yellow-200 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center rounded-md w-10 h-10 overflow-hidden shadow-md">
            <img src={img} alt="Brand Logo" className="object-cover rounded-md cursor-pointer" />
          </div>
          <span className="font-bold text-gray-900 text-2xl tracking-tight">
            <a href="#">Event Roster</a>
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium text-gray-800 relative">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a href="#" className="flex items-center gap-1 hover:text-yellow-700 transition-colors" >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className="text-gray-500 group-hover:text-yellow-700 transition-transform duration-200"
                  />
                )}
              </a>
              {item.dropdown && (
                <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white/95 shadow-lg rounded-xl py-2 w-52 border border-yellow-100 animate-fadeSlide">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-700 text-base font-medium transition-colors"
          >
            Write A Review
          </a>
          <button className="bg-white border border-yellow-300 rounded-xl px-5 py-2 cursor-pointer text-base font-medium hover:bg-yellow-50 hover:shadow-sm transition-all">
            Download App
          </button>
          <button className="bg-gradient-to-r from-yellow-500 cursor-pointer  to-yellow-700 text-white rounded-xl px-5 py-2 text-base font-semibold hover:brightness-110 transition-all shadow-sm">
            Log In
          </button>
        </div>
        <button
          className="md:hidden p-2 text-gray-700 hover:text-yellow-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-yellow-200 bg-yellow-50/90 backdrop-blur-md animate-fadeSlide">
          <nav className="flex flex-col p-5 space-y-4 text-gray-800 font-medium text-lg">
            {navItems.map((item) => (
              <div key={item.name}>
                <a href="#" className="hover:text-yellow-700">
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 mt-1 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block text-gray-600 hover:text-yellow-700 text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="hover:text-yellow-700">
              Write A Review
            </a>
            <button className="w-full bg-white border border-yellow-300 rounded-xl py-2 text-base font-medium hover:bg-yellow-50 hover:shadow-sm transition-all">
              Download App
            </button>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-xl py-2 text-base font-semibold hover:brightness-110 shadow-sm">
              Log In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

