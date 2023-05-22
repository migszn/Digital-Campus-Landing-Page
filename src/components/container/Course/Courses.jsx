import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Digital Campus ++ <span className="text-Teal"> Features</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
        The digital campus features embody a summative subtext of convenience, connectivity, 
        and comprehensive support. With a user-friendly interface at the forefront, students 
        and faculty alike find themselves seamlessly navigating through the virtual landscape. 
        The platform's intuitive design and accessibility options ensure a smooth and inclusive 
        experience for all.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>

      <div className="text-center text-xl font-bold mt-32">Trusted by Top Colleges and Universities</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
