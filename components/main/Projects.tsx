import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/movin.png"
          title="Movin"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/mars.png"
          title="Mars"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/finacle.png"
          title="Finacle"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/digitalsignature.png"
          title="Digital Signature"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/mantapcashmanagement.png"
          title="Mantap Cash Management"
          description="Bank Mandiri Taspen"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/mantaplearninganddevelopment.png"
          title="Mantap Learning & Development"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/qrisacquirer.png"
          title="QRIS Acquirer"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/soa.png"
          title="Services Oriented Architecture"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/slikrobotic.png"
          title="Slik Robotic"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/tradingbook.png"
          title="Trading Book"
          description="Bank Mandiri Taspen"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/virtualaccount.png"
          title="Virtual Account"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/estatement.png"
          title="E-Statement"
          description="Bank Mandiri Taspen"
        />
        <ProjectCard
          src="/bifast.png"
          title="BI-FAST"
          description="Bank Mandiri Taspen"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/simibi.png"
          title="System Inventory Management"
          description="Bank Indonesia"
        />
        <ProjectCard
          src="/sitescope.png"
          title="Site Scope"
          description="Bank Indonesia"
        />
        <ProjectCard
          src="/obm.png"
          title="Operation Bridge Manager"
          description="Bank Indonesia"
        />
        <ProjectCard
          src="/bvd.png"
          title="Business Value Dashboard"
          description="Bank Indonesia"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/scom.png"
          title="System Center Operations Manager"
          description="Bank Indonesian"
        />
        <ProjectCard
          src="/nnmi.png"
          title="Network Node Manager Interface"
          description="Bank Indonesia"
        />
        <ProjectCard
          src="/powerbii.png"
          title="Power BI Value Utilization"
          description="Bank Indonesia"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/sdwan.png"
          title="SDWAN"
          description="Sisindokom Lintasbuana"
        />
        <ProjectCard
          src="/npi.png"
          title="NPI"
          description="Sisindokom Lintasbuana"
        />
        <ProjectCard
          src="/vpn.png"
          title="VPN"
          description="Sisindokom Lintasbuana"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/smartparkinggate.png"
          title="Smart Parking Gate"
          description="Bandung Techno Park"
        />
        <ProjectCard
          src="/mobileapproboticthermal.png"
          title="Mobile Application Thermal Imaging and Face Recogniton"
          description="Bandung Techno Park"
        />
        <ProjectCard
          src="/elocker.png"
          title="E-Locker"
          description="Bandung Techno Park"
        />
        <ProjectCard
          src="/roboticthermal.png"
          title="Robotic Thermal Imaging and Face Recogniton"
          description="Bandung Techno Park"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ndn.png"
          title="Named Data Networking"
          description="Telkom Unviversity"
        />
        <ProjectCard
          src="/objectfollower.png"
          title="Object Follower FA-1"
          description="Telkom Unviversity"
        />
        <ProjectCard
          src="/obdh.png"
          title="On Board Data Handling"
          description="Telkom Unviversity"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cl15.png"
          title="Robot CL-15"
          description="Telkom Unviversity"
        />
        <ProjectCard
          src="/dronefca.png"
          title="Drone FCA-2000"
          description="Telkom Unviversity"
        />
      </div>

    </div>
  );
};

export default Projects;
