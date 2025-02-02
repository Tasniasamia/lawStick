import React from "react";

const PracticeLaw = ({ data,index }) => {

  return (
    <div className="flex md:flex-row flex-col justify-between items-start md:items-center md:mt-[40px] mt-[18px]">
      <div className="pl-2">
        <h1 className="header-2 mb-[0.75rem] md:mb-[1.5rem]">
          {index+1}. {data?.law}
        </h1>
        <ul className="list-disc pl-6 space-y-2 work-sans text-base">
          <li>{data?.description}</li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeLaw;
