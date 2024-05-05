import React from "react";
import { GiHandBag } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import { TbCircleDashed } from "react-icons/tb";

const About = () => {
  return (
    <div className="flex flex-col items-center m-4 p-6 bg-black text-white rounded-lg">
      <h1 className="text-3xl font-bold">Resume</h1>
      <div className="flex items-center mt-4">
        <GiHandBag className="mr-2 text-3xl" />
        <span className="text-3xl font-bold">Experience</span>
      </div>

      <div className="timeline mt-7 pl-2">
        <div className="article border-l pl-5 mt-4 relative">
          <FaCircle className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" />
          <h5>Lion Parcel as Site Reliability Engineer (SRE)</h5>
          <span>Jan 2021 - Present</span>
          <p>
            - Provide technical support and assistance to developers, addressing their problems and needs, ensuring smooth development processes.
          </p>
        </div>

        {/* Education */}
        <div className="flex flex-col md:flex-row">
          <div className="article border-l pl-5 mt-4 relative md:w-1/2">
            <FaCircle className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" />
            <h5>Education</h5>
            <span>Year - Year</span>
            <p>
              - Education details here
            </p>
          </div>

          {/* Personal Projects */}
          <div className="article border-l pl-5 mt-4 relative md:w-1/2">
            <FaCircle className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" />
            <h5>Personal Projects</h5>
            <span>Year - Year</span>
            <p>
              - Project details here
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="article border-l pl-5 mt-4 relative">
          <FaCircle className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-orange-500" />
          <h5>Skills</h5>
          <div className="flex flex-col">
            <div className="flex items-center mb-2 relative">
              <span className="absolute left-0">Skill 1</span>
              <div className="w-3/4 bg-gray-300 h-4 rounded-full relative">
                <div className="bg-green-500 h-full rounded-full w-3/5"></div>
              </div>
            </div>
            <div className="flex items-center mb-2 relative">
              <span className="absolute left-0">Skill 2</span>
              <div className="w-3/4 bg-gray-300 h-4 rounded-full relative">
                <div className="bg-green-500 h-full rounded-full w-3/5"></div>
              </div>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;