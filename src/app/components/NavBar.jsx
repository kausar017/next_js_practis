import Link from "next/link";
import React from "react";

export default function NavBar() {
  const link = (
    <>
      <Link href={"/"} className="btn btn-sm btn-ghost">
        <li>Home</li>
      </Link>
      <Link href={"/services"} className="btn btn-sm btn-ghost">
        <li>Services</li>
      </Link>
      <Link href={"/about"} className="btn btn-sm btn-ghost">
        <li>About</li>
      </Link>
      <Link href={"/contact"} className="btn btn-sm btn-ghost">
        <li>Contact</li>
      </Link>
    </>
  );

  return (
    <>
      <div className="bg-base-200">
        <div className="navbar container mx-auto">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              {
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {link}
                </ul>
              }
            </div>
            <a className="btn btn-ghost text-xl">Bloge Service</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            <Link
              href={"/singIn"}
              className="btn btn-sm btn-outline btn-primary"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
