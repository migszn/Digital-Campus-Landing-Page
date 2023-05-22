import React from "react";
import hero from "../../assets/hero.webp";
import { logos } from "../../Data";
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (

    //hero section
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            Your Students' Favorite School Platform
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            The Modern <br /> Campus Companion <br />
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          Unlock the full potential of your students' educational journey with our 
          platform—empowering seamless communication, resource accessibility, 
          and a personalized learning experience like never before.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
        <img src={hero} alt="" style={{ borderRadius: '0 0 25% 25%' }} />
        </div>
      </div>
      <div>
      <p className="text-center text-xl mt-20">
        <span className="text-Teal">
          Our Partners & Investors
        </span>
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center flex-wrap gap-8 p-2"
      >
        {logos.map((logo, index) => (
          <motion.div variants={item} className="w-28" key={index}>
            <motion.img
              src={logo}
              alt=""
              className="w-full object-cover"
              whileHover={{ scale: 1.2 }} // Add whileHover animation with scaling effect
            />
          </motion.div>
        ))}
      </motion.div>


      </div>
    </div>
  );
};

export default Home;
