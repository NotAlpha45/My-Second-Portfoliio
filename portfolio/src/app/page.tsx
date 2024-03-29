"use client"
import CustomNavbar from "@/components/navbar/navbar";
import AboutMe from "@/page_segments/about_me/about_me";
import MyDomain from "@/page_segments/my_domain/my_domain";
import React from "react";

export default function Home() {
  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);

  const navOptionAndCallback = new Map<string, () => void>(
    [
      ["About Me", () => { scrollTo("about-me-row") }],
      ["My Domain", () => { scrollTo("my-domain-row") }],
    ]
  )

  const scrollTo = (toDivId: string) => {
    const element = document.getElementById(toDivId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



  return (
    <>
      
      <div className="d-flex justify-content-center bg-dark position-fixed w-100 z-3">
        <CustomNavbar navOptionsAndCallback={navOptionAndCallback}
        />
      </div>

      <div className="container-fluid bg-dark">
        <div id="about-me-row" className="row-auto pt-5">
          <div className="col justify-content-left">
            <AboutMe exploreButtonCallback={() => { scrollTo("my-domain-row") }} />
          </div>
        </div>

        <div id="my-domain-row" className="row">
          <div className="col justify-content-left">
            <MyDomain />
          </div>
        </div>

      </div>
    </>
  );
}
