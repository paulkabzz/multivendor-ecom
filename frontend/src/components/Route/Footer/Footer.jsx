import React, { useState } from "react";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../../static/data";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const isValidEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const handleEmailChange = (event) => setEmail(event.target.value);
  return (
    <>
      <footer className="bg-[#000] text-[#fff]">
        <div className="md:flex md:justify-between md:items-center sm:px-12 pt-5 px-4 bg-[#000]">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            Subscribe to our newsletter.
          </h1>
          <div>
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="text-gray-800 sm:w-full sm:mr-1 text-[14px] lg:mb-0 mb-4 py-2.5 rounded px-4 focus:outline-none md:w-auto w-full"
            />
            <button
              disabled={!isValidEmail(email)}
              type="button"
              className={`bg-[#2096f3] px-5 py-2.5 text-[14px] rounded text-white md:w-auto w-full ${!isValidEmail(email) ? "opacity-70 bg-[#60afeb]" : null}`}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
          <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
            <img
              src={`${require("../../../Assets/images/ui/logo-light.png")}`}
              alt="logo"
              width={40}
              height={40}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <br />
            <p>Experience the height of indulgence.</p>
            <div className="flex items-center mb-3 mt-[15px] gap-4">
              <img
                width={20}
                src={`${require("../../../Assets/images/icons/instagram.png")}`}
                alt="Instagram"
              />
              <img
                width={20}
                src={`${require("../../../Assets/images/icons/pinterest.png")}`}
                alt="Pintrest"
              />
              <img
                width={20}
                src={`${require("../../../Assets/images/icons/email (1).png")}`}
                alt="Mail"
              />
            </div>
            <img
              title="Visa, American Express, Paypal and Mastercard accepted."
              width={150}
              src={`${require("../../../Assets/images/ui/payments.png")}`}
              alt=""
            />
          </ul>
          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Company</h1>
            {footerProductLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-gray-500 hover:text-[#2096f3] duration-300 text-sm cursor-pointer leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Shop</h1>
            {footercompanyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-gray-500 hover:text-[#2096f3] duration-300 text-sm cursor-pointer leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-center sm:text-start">
            <h1 className="mb-1 font-semibold">Support</h1>
            {footerSupportLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-gray-500 hover:text-[#2096f3] duration-300 text-sm cursor-pointer leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-col-1 text-center pt-2 text-gray-400 text-sm pb-8">
          <span>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/paulkabzz"
              target="_blank"
              rel="noreferrer"
            >
              Paul Kabulu
            </a>
            . All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
