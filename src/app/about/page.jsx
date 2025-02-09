"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function About() {
  const router = useRouter();
  const islogging = false;
  const handaleNavigation = () => {
    if (islogging) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p>About</p>
      <Link
        href={"/about/address"}
        className="btn btn-sm border-2 p-2 rounded-md"
      >
        Address
      </Link>
      <Link
        href={"/about/address"}
        type="button"
        onClick={handaleNavigation}
        className="btn btn-sm border-2 p-2 rounded-md"
      >
        Address
      </Link>
    </div>
  );
}
