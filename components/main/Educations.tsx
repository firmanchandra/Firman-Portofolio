import React from 'react'
import ProjectCard from "../sub/ProjectCard";

const Educations = () => {
    return (
        <div
          className="flex flex-col items-center justify-center py-20"
          id="educations"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Educations
          </h1>
          <div className="text-align: text-justify h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
              src="/fte.png"
              title="Telkom University - Bachelor of Telecommunication Engineering"
              description="2017 - 2021"
            />
            <ProjectCard
              src="/feb.png"
              title="Telkom University - Magister Management of Business"
              description="2024- 2025"
            />
          </div>
        </div>
      );
};

export default Educations