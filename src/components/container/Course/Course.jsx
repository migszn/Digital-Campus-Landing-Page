import React, { memo } from "react";

const Course = ({ image }) => {
  return (
    <>
    <div className="min-w-[10rem] rounded-md">
      <img src={image} alt="" />
    </div>
    </>
  );
};

export default memo(Course);
