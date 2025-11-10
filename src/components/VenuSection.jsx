import React from "react";
import { FaStar, FaMapMarkerAlt, FaHome } from "react-icons/fa";

export function VenueSection() {
  const venues = [
    {
      title: "Hotel Golf View Sakura...",
      img: "/img/venue1.jpg",
      rating: 4.8,
      reviews: 9,
      location: "Golf Course Road, Gurgaon",
      types: "Banquet Halls, 3 Star Hotels",
      veg: "₹1,199 per plate",
      nonveg: "₹1,399 per plate",
      tags: ["35-200 pax", "62 Rooms", "+7 more"],
    },
    {
      title: "Royal Garden Lawns & ...",
      img: "/img/venue2.jpg",
      rating: 5.0,
      reviews: 3,
      location: "Navi Mumbai",
      types: "Banquet Halls, Marriage Garden",
      veg: "₹499 per function",
      nonveg: "₹549 per function",
      tags: ["200-6000 pax", "2 Rooms", "+7 more"],
    },
    {
      title: "Atalia Resort",
      img: "/img/venue1.jpg",
      rating: 5.0,
      reviews: 10,
      location: "Sector 49, Faridabad",
      types: "Banquet Halls, Marriage Garden",
      veg: "₹1,500 per function",
      nonveg: "₹1,800 per function",
      tags: ["75-200 pax", "10 Rooms", "+8 more"],
    },
  ];

  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-white via-amber-50 to-white">
      <h2 className="text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-400 drop-shadow-sm">
         Popular Premium Venues 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {venues.map((v, index) => (
          <div
            key={index}
            className="bg-white relative rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition transform  border border-yellow-300/40 cursor-pointer"
          >
      
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/40 via-yellow-200/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

            <div className="relative group">
              <img
                src={v.img}
                alt={v.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                ★ Handpicked
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{v.title}</h3>
                <div className="flex items-center text-yellow-600 font-semibold">
                  <FaStar className="mr-1 text-yellow-500" />
                  {v.rating}{" "}
                  <span className="text-gray-600 ml-1 text-sm">({v.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 text-sm mt-2">
                <FaMapMarkerAlt className="mr-2 text-yellow-600" />
                {v.location}
              </div>
              <div className="flex items-center text-gray-700 text-sm mt-1">
                <FaHome className="mr-2 text-yellow-600" />
                {v.types}
              </div>

              <div className="mt-4 text-sm">
                <p className="font-semibold text-gray-800">Veg</p>
                <p className="text-gray-700">{v.veg}</p>

                <p className="font-semibold text-gray-800 mt-2">Non veg</p>
                <p className="text-gray-700">{v.nonveg}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {v.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gradient-to-r from-yellow-100 to-amber-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
