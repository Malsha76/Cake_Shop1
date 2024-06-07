import React from "react";

function Footer(): JSX.Element {
  return (
      <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className=" w-full md:w-1/4">
            <h1 className=" font-semibold text-xl pb-4">Cake Shop</h1>
            <p className=" text-sm">
            Welcome to Sweet Delights Cake Shop! We specialize in handcrafted cakes for every occasion, 
          using only the finest ingredients. From classic favorites to custom designs, our cakes are sure to make your moments sweeter.
           Visit us for a delicious treat today!</p>
            </div>
      </div>
      </div>
  );
};