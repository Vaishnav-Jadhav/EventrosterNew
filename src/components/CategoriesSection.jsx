import React from "react";
import { MapPin, Camera, Sparkles, Calendar, Palette, Heart } from "lucide-react";

export function CategoriesSection() {
  const categories = [
    {
      title: "Venues",
      desc: "Banquet Halls, Marriage Garden / Lawns",
      icon: <MapPin className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Photographers",
      desc: "Wedding Photographers",
      icon: <Camera className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Makeup",
      desc: "Bridal Makeup Artists, Family Makeup",
      icon: <Sparkles className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Planning & Decor",
      desc: "Wedding Planners, Decorators",
      icon: <Calendar className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Mehndi",
      desc: "Mehendi Artists",
      icon: <Palette className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Virtual Planning",
      desc: "Virtual planning services",
      icon: <Heart className="w-7 h-7 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-yellow-50/40 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-md">
          Wedding Categories
        </h2>
        <p className="text-gray-600 text-lg mb-14">
          Explore premium wedding services for your dream celebration
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 p-8 bg-white rounded-2xl border border-yellow-200/50 shadow-lg hover:shadow-2xl hover:border-yellow-400/70 hover:scale-[1.04] transition-all duration-300 group cursor-pointer "
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl ${cat.bg} group-hover:brightness-110 transition-all duration-300 shadow-md`}
              >
                {cat.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                  {cat.title}
                </h3>
                <p className="text-base text-gray-600 mt-2">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
