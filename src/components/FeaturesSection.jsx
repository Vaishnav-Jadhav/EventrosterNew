import React from "react";
import { Star } from "lucide-react";

export function FeaturesSection() 
{
  const vendors = [
    {
      name: "Weddings N Beyond",
      category: "Wedding Planners, Chandigarh Industrial Area",
      price: "₹ 2,50,000 onwards",
      rating: "5",
    },
    {
      name: "NADAR CREATIONS",
      category: "Wedding Photographers, Panchkula",
      price: "₹ 60,000 per day",
      rating: "5",
    },
    {
      name: "Makeup by Magicbrush",
      category: "Bridal Makeup Artists, South Bangalore",
      price: "₹ 14,000",
      rating: "4.9",
    },
    {
      name: "Jainco Caterers",
      category: "Wedding Catering, Chandigarh",
      price: "₹ 1,000 onwards",
      rating: "5",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 lg:min-h-screen flex items-center bg-gradient-to-b from-[#1a1207] via-[#2a1b0c] to-[#1a1207] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.18),_transparent_75%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,200,0,0.2)]">
            Featured Vendors
          </h2>
          <p className="mt-3 text-yellow-100/90 text-lg">
            Discover trusted professionals making weddings unforgettable
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {vendors.map((vendor, idx) => (
            <div key={idx} className="group relative cursor-pointer  overflow-hidden rounded-2xl bg-gradient-to-b from-[#24190b] to-[#120c05] border border-yellow-700/30 shadow-[0_0_20px_rgba(255,200,0,0.05)] hover:shadow-[0_0_35px_rgba(255,200,0,0.25)] transition-all duration-500 p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-500/10 via-yellow-600/10 to-transparent transition-all duration-700"></div>
              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-semibold px-3 py-1 rounded-full w-fit shadow-md">
                <Star size={14} className="fill-black" />
                {vendor.rating}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-yellow-100 group-hover:text-yellow-300 transition-colors">
                  {vendor.name}
                </h3>
                <p className="mt-1 text-sm text-yellow-50/70">
                  {vendor.category}
                </p>
                <p className="mt-3 text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700">
                  {vendor.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
