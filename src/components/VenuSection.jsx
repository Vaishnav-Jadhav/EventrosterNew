import React from "react";

export function VenueSection() {
  const venues = [
    {
      title: "4 Star & Above Wedding Hotels",
      cities: ["Mumbai", "Bangalore", "Pune", "Chennai"],
      image: "/img/venue1.jpg",
      count: "2,450+ venues",
    },
    {
      title: "Banquet Halls",
      cities: ["Delhi NCR", "Mumbai", "Hyderabad", "Kolkata"],
      image: "/img/venue2.jpg",
      count: "3,820+ venues",
    },
    {
      title: "Marriage Garden / Lawns",
      cities: ["Jaipur", "Udaipur", "Pune", "Ahmedabad"],
      image: "/img/venue1.jpg",
      count: "1,960+ venues",
    },
    {
      title: "Beach Wedding Venues",
      cities: ["Goa", "Kerala", "Pondicherry", "Andaman"],
      image: "/img/venue2.jpg",
      count: "580+ venues",
    },
    {
      title: "Heritage Wedding Venues",
      cities: ["Jaipur", "Udaipur", "Jodhpur", "Delhi"],
      image: "/img/venue2.jpg",
      count: "890+ venues",
    },
    {
      title: "Destination Wedding Resorts",
      cities: ["Goa", "Udaipur", "Jim Corbett", "Mussoorie"],
      image: "/img/venue1.jpg",
      count: "720+ venues",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-yellow-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent drop-shadow-md">
            Popular Venue Searches
          </h2>
          <p className="mt-3 text-gray-700 text-lg">
            Discover perfect venues across India’s most beautiful cities
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue, idx) => (
            <div key={idx} className="relative cursor-pointer  rounded-2xl overflow-hidden shadow-lg bg-white group transition-all duration-300" >
              <div className="overflow-hidden">
                <img src={venue.image} alt={venue.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-700 text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {venue.count}
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-lg">
                  {venue.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {venue.cities.map((city, i) => (
                    <span
                      key={i}
                      className="bg-black/60 text-gray-100 text-xs font-medium px-3 py-1 rounded-full border border-yellow-400/40"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
