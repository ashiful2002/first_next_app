"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname);

  const isLoggedIn = false; // Replace with real auth check if needed

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <Link href="/meals">Meals</Link>
      </li>
    </>
  );

  if (!pathname.includes("dashboard")) {
    return (
      <div className="shadow-sm bg-base-100">
        <div className="navbar max-w-7xl mx-auto">
          {/* Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-xl">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Navigation Button */}
          <div className="navbar-end">
            <button
              type="button"
              onClick={handleNavigation}
              className="btn btn-outline btn-sm rounded md:btn-md"
            >
              Address Page (conditional)
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
