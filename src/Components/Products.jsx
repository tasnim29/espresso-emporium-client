import React, { useState } from "react";
import logo from "../assets/Group 10.png";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Products = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  // delete
  const handleRemove = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          //delete mongodb
          fetch(`http://localhost:3000/coffees/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("after db", data);
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
            });

          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

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
          <div key={coffee._id} className="card bg-base-100  shadow-2xl">
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
                <Link
                  to={`/coffeeUpdate/${coffee._id}`}
                  className="badge badge-outline"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleRemove(coffee._id)}
                  className="badge badge-outline cursor-pointer"
                >
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
