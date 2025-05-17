import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, details, price, supplier, taste, category, photo } = coffee;

  return (
    <div>
      <Link to="/" className="text-2xl btn btn-outline mt-5 ml-5">
        Back To Home
      </Link>
      <div className="max-w-5xl mx-auto my-20">
        <h1 className="text-7xl text-secondary font-bold text-center mb-5 ">
          Your Favorite Coffee
        </h1>
        <div className="flex gap-32 items-center shadow-2xl bg-gray-300 justify-center py-8">
          {/* image */}
          <div>
            <img src={photo} alt="" />
          </div>
          {/* info */}
          <div>
            <h1 className="text-4xl font-bold mb-5">{name}</h1>
            <p>{details}</p>
            <h2 className="text-2xl">
              <span className="text-secondary ">Price:</span>
              {price}
            </h2>
            <h2 className="text-2xl">
              <span className="text-secondary ">Supplier:</span>
              {supplier}
            </h2>
            <h2 className="text-2xl">
              <span className="text-secondary ">taste:</span>
              {taste}
            </h2>
            <h2 className="text-2xl">
              <span className="text-secondary ">category:</span>
              {category}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
