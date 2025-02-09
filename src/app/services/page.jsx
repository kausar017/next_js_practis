"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://picsum.photos/v2/list");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold pt-5">
        Services <span className="divider"></span>
      </h1>
      {services.length == 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[800px]">
          <span className="loading loading-ring w-24 "></span>
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 px-2">
          {services.map((service) => (
            <div
              key={service?.id}
              className="card card-compact bg-base-100 shadow-xl overflow-hidden group"
            >
              <figure className="relative">
                <img
                  className="h-80 w-full"
                  src={service?.download_url}
                  alt="Shoes"
                />
              </figure>
              <div className="absolute py-6 bg-black bg-opacity-40 w-full text-center -top-20 group-hover:top-0 transition-all duration-300">
                <Link href={`services/${service?.id}`} className="">
                  <span className=" text-center text-white text-2xl hover:text-red-500"> Detals</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
