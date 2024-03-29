import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Digital Campus ++ has been a  <span className="text-Teal">Game-Changer</span> <br /> for the DLSU as a business!
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          "Digital Campus ++ has truly been a game-changer for our school, not only academically but also as a business.
           The transformative power of this innovative platform has revolutionized our operations and propelled us into 
           the digital age with remarkable success."
          </p>

        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            The enrollment numbers are <span className="text-Teal">off the charts!</span>
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          "With the implementation of Digital Campus ++, our school enrollment numbers have soared to new heights. 
          The innovative features and user-friendly interface have revolutionized the way we attract and engage
          prospective students."
          </p>

        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
