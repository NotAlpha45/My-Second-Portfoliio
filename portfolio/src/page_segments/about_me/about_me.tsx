"use client"

import Image from "next/image";
import "./about_me.css";
import ExploreIcon from '@rsuite/icons/Explore'
import CodeIcon from '@rsuite/icons/Code'

export default function AboutMe() {

    return (
        <div id="about-me-container" className="container-fluid bg-dark">
            <div className="row py-5 px-2">
                <div className="d-flex justify-content-center col-md-4">
                    <Image id="profile_pic" className="rounded-circle" src="/images/me.jpg" alt="Me" width={300} height={300} />
                </div>

                <div className="col-12 col-md-6 text-white d-flex flex-column">

                    <div id="intro-segment">
                        <p id="greeting-text" className="text-start fs-4">Hello, I am</p>
                        <div id="name-segment" className="pt-3">
                            <h1 id="my-name" className="text-center">Maheen Hoque</h1>
                        </div>
                    </div>

                    <div id="about-me-segment" className="typewriter d-flex flex-column fs-5 mt-5 text-start gap-3 px-4">
                        <div className="d-flex flex-row gap-4">
                            <span><img width="32" height="32" src="https://img.icons8.com/color/48/source-code.png" alt="source-code" /></span>
                            <span className="about-me-line">Developer and Designer</span>
                        </div>
                        <div className="d-flex flex-row gap-4 align-items-center">
                            <span><img width="32" height="32" src="https://img.icons8.com/color/48/compass--v1.png" alt="compass--v1" /></span>
                            <span className="about-me-line">An explorer at heart</span>
                        </div>
                        <div className="d-flex flex-row gap-4 align-items-center">
                            <span><img width="32" height="32" src="https://img.icons8.com/color/48/f1-race-car-side-view.png" alt="f1-race-car-side-view" /></span>
                            <span className="about-me-line">Automobile Enthusiast</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}