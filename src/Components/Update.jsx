import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, details, price, supplier, taste, category, photo } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // update mongodb
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div>
        <Link to="/" className="text-2xl btn btn-outline mt-5 ml-5">
          Back To Home
        </Link>
        <div className="my-20 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl text-secondary">Update your Coffee</h1>
          </div>
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box  border p-4">
                <label className="label text-xl font-semibold text-white">
                  Name
                </label>
                <input
                  defaultValue={name}
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
                  defaultValue={price}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                defaultValue={photo}
                name="photo"
                type="text"
                className="input w-full "
                placeholder="Enter PhotoURL"
              />
            </fieldset>
            <button className="bg-gray-800 text-white w-full py-2 mt-5 cursor-pointer">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
