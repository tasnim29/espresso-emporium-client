import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const Signup = () => {
  const { signupUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restInfo } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, restInfo);
    //   signup
    signupUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userInfo = {
          email,
          ...restInfo,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        //
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after db", data);
            e.target.reset();
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="max-w-2xl mx-auto my-20 px-6">
      <form
        onSubmit={handleSignUp}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="label text-white">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <label className="label text-white">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label className="label text-white">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <label className="label text-white">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </div>

        <div className="mb-4">
          <label className="label text-white">Gender</label>
          <div className="flex items-center gap-6">
            <label className="text-white flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                className="radio"
              />
              Male
            </label>
            <label className="text-white flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="radio"
              />
              Female
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="label text-white">Status</label>
          <div className="flex items-center gap-6">
            <label className="text-white flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Active"
                className="radio"
              />
              Active
            </label>
            <label className="text-white flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Inactive"
                className="radio"
              />
              Inactive
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="label text-white">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Enter address"
          />
        </div>
        {/* Google */}
        <button
          type="submit"
          className="btn bg-white w-full mb-5 text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <button type="submit" className="btn btn-neutral w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
