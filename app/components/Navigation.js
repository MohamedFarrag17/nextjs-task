"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation({ token }) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="  lg:mx-28 px-10 h-[91px] flex justify-between items-center">
        <Link href="/">
          <img src="./tinytales-logo.png" className="h-[51px] w-[66px]" />
        </Link>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1 h-[17px] w-[19px] ">
            <span
              className={`block h-0.5 w-6 rounded-[4px] bg-[#020202] transition-all ${
                isActive ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-[4px] bg-[#020202] transition-all ${
                isActive ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-[4px] bg-[#020202] transition-all ${
                isActive ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-[#BE968E] transition">
            Home
          </Link>

          {!token ? (
            <>
              <Link
                href="/register"
                className="hover:text-[#BE968E] transition"
              >
                Register
              </Link>
              <Link href="/login" className="hover:text-[#BE968E] transition">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="hover:text-[#BE968E] transition"
              >
                Dashboard
              </Link>
              <form action="/logout" method="post" className="inline-block">
                <button
                  type="submit"
                  className="text-red-[#DC143C]  font-medium"
                >
                  Logout
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {isActive && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          <Link
            href="/"
            className="hover:text-[#BE968E] transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Home
          </Link>

          {!token ? (
            <>
              <Link
                href="/register"
                className="hover:text-[#BE968E] transition-all duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Register
              </Link>
              <Link
                href="/login"
                className="hover:text-[#BE968E] transition-all duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="hover:text-[#BE968E] transition-all duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <form action="/logout" method="post" className="inline-block">
                <button
                  type="submit"
                  className="text-red-[#DC143C]  font-medium"
                >
                  Logout
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
