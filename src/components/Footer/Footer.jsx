import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-400 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Logo & copyright */}
          <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8 md:mb-0">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-4">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-500">
                &copy; 2025 MegaBlog. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals Links */}
          <div className="w-full md:w-1/2 lg:w-3/12 px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Legals
            </h3>
            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                <li key={item}>
                  <Link
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
