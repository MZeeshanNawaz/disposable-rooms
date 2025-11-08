"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-sm sticky-top">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Disposable Rooms
        </Link>

        {/* Hamburger / Close Icon */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Links */}
        <div
          className={`flex-col lg:flex-row lg:flex items-center w-full lg:w-auto lg:gap-6 transition-all duration-300 ${
            menuOpen ? "flex mt-4 lg:mt-0" : "hidden lg:flex"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-primary">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form
            className="flex mt-3 lg:mt-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search rooms..."
              className="border border-gray-300 rounded-l px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-3 rounded-r text-sm"
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
