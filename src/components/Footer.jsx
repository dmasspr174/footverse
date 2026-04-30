import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pb-8 pt-12">
      <div className="max-w-7xl mx-auto bg-[#F9F9F9] rounded-[2.5rem] p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-black p-1.5 rounded-lg">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Footverse
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-8">
              Seamless transactions, personalized insights, and innovative
              solutions for a smarter tomorrow.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Youtube, MessageCircle, Instagram, Twitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Links Columns */}
          <div className="hidden md:block">
            <h4 className="mb-6">
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 transition-colors font-bold font-sans"
              >
                Home
              </Link>
            </h4>
            <ul className="space-y-4">
              {["Company", "Leadership", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <p className="text-gray-500 transition-colors font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="mb-6">
              <Link
                to="/contact"
                className="text-gray-500 hover:text-gray-900 transition-colors font-bold font-sans"
              >
                Contact Us
              </Link>
            </h4>
            <ul className="space-y-4">
              {["Help Center", "Support Team", "Community", "FAQs"].map(
                (item) => (
                  <li key={item}>
                    <p className="text-gray-500 transition-colors font-medium">
                      {item}
                    </p>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="mb-6">
              <Link
                to="/product"
                className="text-gray-500 hover:text-gray-900 transition-colors font-bold font-sans"
              >
                Product
              </Link>
            </h4>
            <ul className="space-y-4">
              {["Men", "Women", "Children", "Popular"].map((item) => (
                <li key={item}>
                  <p className="text-gray-500 transition-colors font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium">
          <p>© 2025 Footverse All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="#" className="hover:text-gray-900 transition-colors">
              Company
            </Link>
            <Link to="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
