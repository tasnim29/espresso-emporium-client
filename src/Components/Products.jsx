import React from "react";
import logo from "../assets/Group 10.png";
import { Link, useLoaderData } from "react-router";

const Products = () => {
  const coffees = useLoaderData();
  // console.log(coffee);
  return (
    <div className=" text-center mb-20">
      <img className="mx-auto" src={logo} alt="" />
      <Link
        to="/addCoffee"
        className="bg-[#E3B577] px-5 py-2 text-white rounded"
      >
        Add Coffee
      </Link>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {coffees.map((coffee) => (
          <div className="card bg-base-100  shadow-2xl">
            <figure>
              <img src={coffee.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">
                {coffee.name}
                <div className="badge badge-secondary">{coffee.category}</div>
              </h2>
              <h2 className="text-2xl">
                <span className="text-secondary ">Price:</span>
                {coffee.price}
              </h2>
              <p className="text-xl">{coffee.details}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/coffeeDetails/${coffee._id}`}
                  className="badge badge-outline"
                >
                  View Details
                </Link>
                <Link className="badge badge-outline">Edit</Link>
                <button className="badge badge-outline cursor-pointer">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
