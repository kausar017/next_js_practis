import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className=" bg-gray-400">
      <ul className="flex justify-center items-center container mx-auto h-full min-h-12 gap-x-8">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/services"}>
          <li>Services</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
