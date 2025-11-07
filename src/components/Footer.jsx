import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import img from "/img/BrandLogo.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0e0b04] via-[#1a1207] to-[#0e0b04] text-yellow-50 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.08),_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Start Planning
            </h3>
            <ul className="space-y-2 text-sm text-yellow-100/80">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Search By Vendor</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Search By City</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Download Our App</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Top Rated Vendors</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Wedding Ideas
            </h3>
            <ul className="space-y-2 text-sm text-yellow-100/80">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Wedding Blog</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Wedding Inspiration Gallery</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Real Wedding</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Photo Gallery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Wedding Vendors
            </h3>
            <ul className="space-y-2 text-sm text-yellow-100/80">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Bridal Wear</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Wedding Jewellery</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Bridal Makeup & Hair</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Wedding Photography</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-yellow-100/80">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">About Event Roster</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="my-10 border-t border-yellow-700/30"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-700 to-yellow-500 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
               <img src={img} alt="Brand Logo" className="object-cover w-full  rounded-md" />
            </div>
            <span className="font-semibold text-xl text-yellow-100">Event Roster</span>
          </div>
          <div className="flex gap-4 text-yellow-400">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-yellow-200 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-sm text-yellow-100/70 text-center md:text-right">
            © 2025 Event Roster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
