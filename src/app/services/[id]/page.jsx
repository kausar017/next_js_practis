"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ServiceDetalsPage() {
  const params = useParams();
  const id = params?.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://picsum.photos/id/${id}/info`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Service Details Page</h1>
      <div className=" container mx-auto">
        {data ? (
          <div className="py-5">
            <div className="card card-compact bg-base-100 shadow-xl w-7/12 mx-auto">
              <figure>
                <img className="" src={data.download_url} alt={data.author} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.author}</h2>
                <p>Id: {id}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[800px]">
            <span className="loading loading-ring w-24 "></span>
          </div>
        )}
      </div>
    </>
  );
}
