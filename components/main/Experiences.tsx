import React from 'react';
import ProjectCard from "../sub/ProjectCard";

const Experiences = () => {
    return (
        <div
          className="flex flex-col items-center justify-center py-20"
          id="experiences"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Work Experiences
          </h1>
          <div className="text-align: text-justify h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
              src="/bithamrin.png"
              title="Bank Indonesia - Assistant Manager"
              description="2023 - Now"
            />
            <ProjectCard
              src="/mantap.png"
              title="Bank Mandiri Taspen - Professional Staff Project & Data Integration Management"
              description="2022 - 2023"
            />
            <ProjectCard
              src="/sisindokom.png"
              title="Sisindokom Lintasbuana - Project Controller"
              description="2021- 2022"
            />
          </div>

          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
              src="/btp.png"
              title="Bandung Techno Park - Staff IT Software Engineer"
              description="2020 - 2021"
            />
            <ProjectCard
              src="/expertcourse.png"
              title="Expert Course - Tutor"
              description="2019 - 2020"
            />
          </div>

          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Internship Experiences
          </h1>

          <div className="text-align: text-justify h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
              src="/telkombekasi.png"
              title="PT Telekomunikasi Indonesia - IT Engineer"
              description="2019"
            />
            <ProjectCard
              src="/telkomdds.png"
              title="PT Telekomunikasi Indonesia - Assistant Laboratory IT"
              description="2020"
            />
          </div>

          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Organization Experiences
          </h1>

          <div className="text-align: text-justify h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
              src="/hmtt2.png"
              title="Himpunan Mahasiswa Teknik Telekomunikasi - Member"
              description="2017 - 2021"
            />
            <ProjectCard
              src="/ukmband.png"
              title="UKM Band Telkom University - Management Coordinator"
              description="2018 - 2020"
            />
          </div>

          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Laboratory Experiences
          </h1>

          <div className="text-align: text-justify h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
              src="/upci.png"
              title="Microprocessor Laboratory - Assistant Professor"
              description="2020 - 2021"
            />
            <ProjectCard
              src="/mobcom2.png"
              title="Mobile Communication Laboratory - Ressearch Group"
              description="2019 - 2020"
            />
            <ProjectCard
              src="/nanosatelite.png"
              title="Nano Satellite Laboratory - Ressearch Group"
              description="2018 - 2019"
            />
          </div>
        </div>
      );
};

export default Experiences