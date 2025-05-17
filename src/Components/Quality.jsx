import React from "react";
import pic1 from "../assets/./icons/1.png";
import pic2 from "../assets/./icons/2.png";
import pic3 from "../assets/./icons/3.png";
import pic4 from "../assets/./icons/4.png";

const Quality = () => {
  return (
    <>
      <div className="flex gap-8 my-20">
        <div>
          <img src={pic1} alt="" />
          <h1 className="text-xl font-bold">Awesome Aroma</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={pic2} alt="" />
          <h1 className="text-xl font-bold">High Quality</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={pic3} alt="" />
          <h1 className="text-xl font-bold">Pure Grades</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={pic4} alt="" />
          <h1 className="text-xl font-bold">Proper Roasting</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </>
  );
};

export default Quality;
