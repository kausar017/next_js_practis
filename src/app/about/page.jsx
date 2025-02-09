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
      <div className="space-x-3">
        <Link href={"/about/address"} className="btn btn-outline btn-primary">
          Address
        </Link>
        <button
          href={"/about/address"}
          type="button"
          onClick={handaleNavigation}
          className="btn btn-outline btn-primary"
        >
          Address
        </button>
      </div>
    </div>
  );
}
