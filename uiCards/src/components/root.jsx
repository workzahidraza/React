import React from "react";
import Cards from "./cards";
import img1 from "../assets/img/img1.avif";
import img2 from "../assets/img/img2.avif";
import img3 from "../assets/img/img3.avif";
import img4 from "../assets/img/img4.avif";
import img5 from "../assets/img/img5.avif";
import img6 from "../assets/img/img6.avif";
import img7 from "../assets/img/img7.avif";
import img8 from "../assets/img/img8.avif";
import img9 from "../assets/img/img9.avif";
import img10 from "../assets/img/img10.avif";

const Container = () => {
  const experts = [
    {
      name: "Zahid",
      domain: "Web Developer",
      img: img1,
    },
    {
      name: "Ayesha",
      domain: "Python Developer",
      img: img2,
    },
    {
      name: "Rahul",
      domain: "Full Stack Developer",
      img: img3,
    },
    {
      name: "Sara",
      domain: "UI/UX Designer",
      img: img4,
    },
    {
      name: "Ali",
      domain: "Mobile App Developer",
      img: img5,
    },
    {
      name: "Neha",
      domain: "Data Scientist",
      img: img6,
    },
    {
      name: "Omar",
      domain: "Machine Learning Engineer",
      img: img7,
    },
    {
      name: "Priya",
      domain: "DevOps Engineer",
      img: img8,
    },
    {
      name: "Daniel",
      domain: "Cloud Architect",
      img: img9,
    },
    {
      name: "Fatima",
      domain: "Cyber Security Analyst",
      img: img10,
    },
  ];

  return (
    <div
      className="h-auto  w-auto bg-black flex justify-center py-5 px-5
    flex-wrap gap-6 2xl:h-screen"
    >
      {experts.map((expert) => (
        <Cards
          img={expert.img}
          key={expert.name}
          userName={expert.name}
          userDomain={expert.domain}
        />
      ))}
    </div>
  );
};

export default Container;
