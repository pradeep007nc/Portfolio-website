import React from "react";
import EducationItem from "./EducationItem";

const Education = () => {
  const data = [
    {
      year: "2023 - 2025",
      title: "Master of Computer Applications",
      college: "PES University",
      details: "Specialized with Cloud Computing and Web Technologies",
    },
    {
      year: "2019 - 2022",
      title: "Bachelor of Computer Applications",
      college: "St Francis De Sales College",
      details: "Specialized with Web Technologies",
    },
    {
      year: "2017 - 2019",
      title: "PUC",
      college: "Vijaya PU College",
      details: "Science - PCMC",
    },
  ];

  return (
    <div
      id="education"
      className="flex justify-center items-center flex-col max-w-[1540px] m-auto md:pl-20 p-4 py-20"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Education
      </h1>
      <div className="flex justify-center flex-col pt-[16px]">
        {data.map((item, idx) => (
          <EducationItem
            key={idx}
            year={item.year}
            title={item.title}
            college={item.college}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;