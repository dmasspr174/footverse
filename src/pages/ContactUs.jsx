import React from "react";

function AboutUs() {
  return (
    <div className="bg-[#f0f4f9] min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans text-slate-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column (Text Content) */}
        <div className="flex flex-col pt-8">
          <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight mb-6 text-slate-900">
            Contact Us
          </h1>

          <p className="text-slate-500 mb-8 max-w-md leading-relaxed text-sm md:text-[15px]">
            Email, call, or complete the form to learn how Footverse can solve
            your shopping problems.
          </p>

          <div className="flex flex-col gap-3 mb-10 text-slate-600 text-[15px]">
            <p>info@footverse.io</p>
            <p>321-221-231</p>
            <a
              href="#"
              className="font-semibold underline underline-offset-4 decoration-slate-300 hover:decoration-slate-600 w-fit text-slate-800 mt-2"
            >
              Customer Support
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 lg:mt-12">
            <div className="flex flex-col">
              <h3 className="font-semibold text-[13px] text-slate-900 mb-2">
                Customer Support
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed pr-2">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[13px] text-slate-900 mb-2">
                Feedback and Suggestions
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed pr-2">
                We value your feedback and are continuously working to improve
                Footverse. Your input is crucial in shaping the future of
                Footverse.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[13px] text-slate-900 mb-2">
                Media Inquiries
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed pr-2">
                For media-related questions or press inquiries, please contact
                us at media@footverseapp.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Form Card) */}
        <div className="  md:p-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126338.55381826295!2d113.99526224335939!3d-8.294856799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6ad254d55c68d%3A0x4f33633a94deae4b!2sIvori%20Shoes!5e0!3m2!1sen!2sid!4v1776062168137!5m2!1sen!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" rounded-3xl shadow-xl shadow-blue-900/5 w-full h-[450px] aspect-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
