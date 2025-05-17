import React from "react";
import bg from "../assets/./more/3.png";
const Hero = () => {
  return (
    <div
      className="min-h-[500px] bg-cover bg-center text-white flex items-center justify-end px-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-xl  space-y-4">
        <h1 className="text-3xl font-bold">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p>
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] px-5 py-2 text-white rounded">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
