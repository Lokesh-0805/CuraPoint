import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      {/* ---------- Heading ---------- */}
      <div className="text-center text-2xl pt-10 text-gray-500 mt-10 md:my-16">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* ---------- Content ---------- */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-90 rounded-lg"
          src={assets.contact_image}
          alt="Contact us"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>

          <p className="text-gray-500 leading-6">
            CuraPoint, PLA HISAR <br />
            HARYANA, INDIA
          </p>

          <p className="text-gray-500 leading-6">
            Tel:{" "}
            <a
              href="tel:+91 8000092582"
              className="hover:text-primary transition"
            >
              +91 8000092582
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:curapointcareer@gmail.com"
              className="hover:text-primary transition"
            >
              curapointcareer@gmail.com
            </a>
          </p>

          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT CURAPOINT
          </p>

          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm rounded hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
