"use client"
import Navbar from "@/components/navbar";
import AboutMe from "@/page_segments/about_me/about_me";
import React from "react";

export default function Home() {
  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);
  const [expanded, setExpand] = React.useState(false);


  return (
    <div className="container-fluid">
      <div className="row row-cols-2">
        <div className={"col d-flex flex-row justify-content-left " + (expanded ? "col-2" : "col-1")}>
          <Navbar
            activeKey={activeKey}
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
            onSelect={setActiveKey}
            expanded={expanded}
            onExpand={setExpand}
            appearance="subtle"
          />
        </div>

        <div className={"col justify-content-left " + (expanded ? "col-10" : "col-11")}>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
