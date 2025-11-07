import React from "react";
import { Calendar } from "lucide-react";

export function StoriesSection() {
  const stories = [
    {
      title: "Supriya and Abhinay",
      desc: "A Hyderabad Wedding That Balanced Vintage Charm With Full-Throttle Modern Energy!",
      date: "03 November 2025",
      image: "/img/story1.jpg",
    },
    {
      title: "Reet and Prateek",
      desc: "A Heartfelt Mussoorie Wedding With An Epic Pre-Wedding Shoot In Turkey!",
      date: "19 May 2025",
      image: "/img/story2.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fffaf3] via-[#fff7e6] to-[#fffaf3] text-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1),_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
            Real Wedding Stories
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Heartfelt stories from couples who made their day truly magical
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_10px_40px_rgba(255,200,0,0.3)] transition-all duration-500"
            >
              <div className="overflow-hidden relative">
                <img src={story.image} alt={story.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8 bg-gradient-to-b from-white to-yellow-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                  {story.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {story.desc}
                </p>
                <div className="flex items-center text-gray-600 text-sm gap-2">
                  <Calendar size={16} className="text-yellow-600" />
                  <span className="font-medium">{story.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
