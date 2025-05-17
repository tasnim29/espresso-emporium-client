import React from "react";
import logo from "../assets/Add New Coffee.png";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // post in mongodb
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after db", data);
        e.target.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <Link to="/" className="text-2xl btn btn-outline mt-5 ml-5">
        Back To Home
      </Link>
      <div className="my-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <img className="mx-auto" src={logo} alt="" />
          <p className="text-xl">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
              <label className="label text-xl font-semibold text-white">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="input w-full "
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
              <label className="label text-xl font-semibold text-white">
                Price
              </label>
              <input
                name="price"
                type="text"
                className="input w-full "
                placeholder="Enter Price"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
              <label className="label text-xl font-semibold text-white">
                Supplier
              </label>
              <input
                name="supplier"
                type="text"
                className="input w-full "
                placeholder="Enter Supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
              <label className="label text-xl font-semibold text-white">
                Taste
              </label>
              <input
                name="taste"
                type="text"
                className="input w-full "
                placeholder="Enter Taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
              <label className="label text-xl font-semibold text-white">
                Category
              </label>
              <input
                name="category"
                type="text"
                className="input w-full "
                placeholder="Enter Category"
              />
            </fieldset>
            <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
              <label className="label text-xl font-semibold text-white">
                Details
              </label>
              <input
                name="details"
                type="text"
                className="input w-full "
                placeholder="Enter Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4 mt-5">
            <label className="label text-xl font-semibold text-white">
              Photo
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full "
              placeholder="Enter PhotoURL"
            />
          </fieldset>
          <button className="bg-gray-800 text-white w-full py-2 mt-5 cursor-pointer">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
