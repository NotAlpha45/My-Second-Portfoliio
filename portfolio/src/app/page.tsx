"use client"
import CustomNavbar from "@/components/navbar/navbar";
import AboutMe from "@/page_segments/about_me/about_me";
import React from "react";

export default function Home() {
  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);


  return (
    <div className="container-fluid bg-dark">

      <div className="row">
        <div className="col d-flex justify-content-center">
          <CustomNavbar appearance="subtle" activeKey={activeKey} openKeys={openKeys} onOpenChange={(openKeys: string[]) => setOpenKeys(openKeys)} onSelect={(activeKey: string) => setActiveKey(activeKey)} />
        </div>
      </div>

      <div className="row">
        <div className="col justify-content-left">
          <AboutMe />
        </div>
      </div>

    </div>
  );
}
