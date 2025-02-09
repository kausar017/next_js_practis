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
      <h1>Services</h1>
      <div className="grid grid-cols-4 gap-5">
        {services.map((service) => (
          <div key={service?.id} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-80 w-full"
                src={service?.download_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                <Link href={`services/${service?.id}`} className="btn btn-sm btn-outline btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
