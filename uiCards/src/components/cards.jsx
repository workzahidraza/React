import React from "react";
import img1 from "../assets/img/img1.avif";

const Cards = ({ userName, userDomain, img }) => {
  return (
    <>
      <div className="h-90 w-60 bg-white flex flex-col items-center justify-around rounded-lg ">
        <img
          className="h-30 w-30 rounded-full bg-black object-cover "
          src={img}
          alt=""
        />
        <h2 className="text-2xl font-bold">{userName}</h2>
        <h3 className="text-xl font-medium text-center">{userDomain} </h3>
        <button className="text-2xl font-bold px-4 py-2 rounded-2xl bg-amber-500">
          Submit
        </button>
      </div>
    </>
  );
};

export default Cards;
