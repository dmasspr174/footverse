import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Skeleton } from "../components/ui/skeleton";

function AboutUs() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className=" px-md sm:px-lg lg:px-section py-xl md:py-2xl flex items-center justify-center font-sans text-text-body">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-start">
        {/* Left Column (Text Content) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col "
        >
          <h1 className="text-3xl font-bold font-serif mb-xs text-text-main">
            Contact Us
          </h1>

          <p className="text-text-muted mb-lg max-w-md leading-relaxed text-sm md:text-[15px]">
            Email, call, or complete the form to learn how Footverse can solve
            your shopping problems.
          </p>

          <div className="flex flex-col gap-xs mb-xl text-text-body text-[15px]">
            <p>info@footverse.io</p>
            <p>321-221-231</p>
            <a
              href="#"
              className="font-semibold underline underline-offset-4 decoration-surface-muted hover:decoration-text-muted w-fit text-text-main mt-sm"
            >
              Customer Support
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 lg:mt-12">
            <div className="flex flex-col">
              <h3 className="font-semibold text-[13px] text-text-main mb-xs">
                Customer Support
              </h3>
              <p className="text-[13px] text-text-muted leading-relaxed pr-xs">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[13px] text-text-main mb-xs">
                Feedback
              </h3>
              <p className="text-[13px] text-text-muted leading-relaxed pr-xs">
                We value your feedback and are continuously working to improve
                Footverse. Your input is crucial in shaping the future of
                Footverse.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[13px] text-text-main mb-xs">
                Media Inquiries
              </h3>
              <p className="text-[13px] text-text-muted leading-relaxed pr-xs">
                For media-related questions or press inquiries, please contact
                us at media@footverseapp.com.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Map Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="  md:p-10 "
        >
          <div className="relative w-full h-[450px] rounded-card-lg shadow-xl shadow-brand-primary/5 overflow-hidden">
            {!isMapLoaded && (
              <Skeleton className="absolute inset-0 z-10 rounded-none" />
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126338.55381826295!2d113.99526224335939!3d-8.294856799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6ad254d55c68d%3A0x4f33633a94deae4b!2sIvori%20Shoes!5e0!3m2!1sen!2sid!4v1776062168137!5m2!1sen!2sid"
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              className={`w-full h-full aspect-auto transition-opacity duration-500 ${
                isMapLoaded ? "opacity-100" : "opacity-0"
              }`}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
