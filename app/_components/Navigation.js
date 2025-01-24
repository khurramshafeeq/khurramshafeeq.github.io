"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <div className="hidden lg:flex lg:items-center lg:gap-x-12">
        <Link href="/" className="no-underline">
          Home
        </Link>
        <Link href="/projects" className="no-underline">
          About
        </Link>
        <Link href="/projects" className="no-underline">
          Process
        </Link>
        <Link href="/projects" className="no-underline">
          Portfolio
        </Link>
        <Link href="/projects" className="no-underline">
          Blog
        </Link>
        <Link href="/projects" className="no-underline">
          Services
        </Link>
        <Link
          href="/projects"
          className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
        >
          Contact
        </Link>
      </div>
      <div onClick={toggleMenu} className="md:hidden">
        <i
          className={`pi ${
            isOpen ? "pi-times" : "pi-bars"
          }  group-hover:text-white text-primary-500 text-2xl leading-none`}
        ></i>
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-indigo-600 flex-col flex md:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={closeMenu}
      >
        <Link href="/" className="no-underline">
          Home
        </Link>
        <Link href="/projects" className="no-underline">
          About
        </Link>
        <Link href="/projects" className="no-underline">
          Process
        </Link>
        <Link href="/projects" className="no-underline">
          Portfolio
        </Link>
        <Link href="/projects" className="no-underline">
          Blog
        </Link>
        <Link href="/projects" className="no-underline">
          Services
        </Link>
        <Link href="/projects" className="no-underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
