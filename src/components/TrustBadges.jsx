import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TrustBadges() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {[
          {
            title: "Fast Delivery",
            desc: "Get your kicks delivered express to your doorstep.",
            icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.61-8.057-8.057-8.057h-3.321C6.437 3.193 3 6.63 3 10.82v3.43m18.25 4.5V11.25a1.125 1.125 0 00-1.125-1.125H16.875M3.375 14.25h17.25",
          },
          {
            title: "Secure Payment",
            desc: "Safe and encrypted transactions with our gateway.",
            icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c-.035 1.05-.035 2.108 0 3.158a12.735 12.735 0 0014.154 11.592c1.05-.035 2.108-.035 3.158 0A11.959 11.959 0 0112 2.714Z",
          },
          {
            title: "30 Days Return",
            desc: "Hassle-free returns and exchanges within 30 days.",
            icon: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
          },
          {
            title: "24/7 Support",
            desc: "Our dedicated team is here for you anytime.",
            icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.icon}
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TrustBadges;
