import React from "react";
import about from "../../assets/About.webp";

const About = () => {
  return (
    <div className="section" id="about">

      <div className="bg-Teal py-6">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
          </div>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 place-items-center mt-28 mb-28">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Crafted with a focus <br/> on fulfilling the<br/> {" "}
            <span className="text-Teal">student's needs </span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Designed to meet the needs of students, our digital campus platform provides a 
            seamless experience by offering easy access to essential school information and services. 
            From academic resources to administrative updates, everything you need is just a few clicks away. 
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-Teal py-6">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
