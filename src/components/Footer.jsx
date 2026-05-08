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
      <div className="max-w-7xl mx-auto bg-surface-gray rounded-card-xl p-md md:p-xl lg:p-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-surface-dark p-1.5 rounded-lg">
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
            <p className="text-text-muted text-lg leading-relaxed max-w-sm mb-lg">
              Seamless transactions, personalized insights, and innovative
              solutions for a smarter tomorrow.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, name: "Facebook" },
                { Icon: Youtube, name: "Youtube" },
                { Icon: MessageCircle, name: "Chat" },
                { Icon: Instagram, name: "Instagram" },
                { Icon: Twitter, name: "Twitter" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-white border border-surface-gray shadow-sm hover:bg-surface-gray/50 transition-colors"
                >
                  {React.createElement(social.Icon, {
                    className: "w-5 h-5 text-text-body",
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="hidden md:block">
            <h4 className="mb-6">
              <Link
                to="/"
                className="text-text-muted hover:text-text-main transition-colors font-bold font-sans"
              >
                Home
              </Link>
            </h4>
            <ul className="space-y-4">
              {["Company", "Leadership", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <p className="text-text-muted transition-colors font-medium">
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
                className="text-text-muted hover:text-text-main transition-colors font-bold font-sans"
              >
                Contact Us
              </Link>
            </h4>
            <ul className="space-y-4">
              {["Help Center", "Support Team", "Community", "FAQs"].map(
                (item) => (
                  <li key={item}>
                    <p className="text-text-muted transition-colors font-medium">
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
                className="text-text-muted hover:text-text-main transition-colors font-bold font-sans"
              >
                Product
              </Link>
            </h4>
            <ul className="space-y-4">
              {["Men", "Women", "Children", "Popular"].map((item) => (
                <li key={item}>
                  <p className="text-text-muted transition-colors font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-section pt-xl border-t border-surface-muted flex flex-col md:flex-row justify-between items-center gap-md text-text-main font-bold">
          <p>© 2025 Footverse All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="#" className="hover:text-text-main transition-colors">
              Company
            </Link>
            <Link to="#" className="hover:text-text-main transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
