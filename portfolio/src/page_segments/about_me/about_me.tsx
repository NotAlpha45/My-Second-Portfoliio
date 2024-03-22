"use client"

import Image from "next/image";
import "./about_me.css";
import ExploreIcon from '@rsuite/icons/Explore'
import CodeIcon from '@rsuite/icons/Code'
import GithubIcon from "@/components/icons/github_icon";
import LinkedinIcon from "@/components/icons/linkedin_icon";
import GmailIcon from "@/components/icons/gmail_icon";

export default function AboutMe() {

    return (
        <div id="about-me-container" className="container-fluid pb-5">

            <div className="row py-5 px-2">
                <div className="d-flex justify-content-center col-md-4">
                    <Image id="profile_pic" className="rounded-circle" src="/images/me.jpg" alt="Me" width={300} height={300} />
                </div>

                <div className="col-md-6 text-white d-flex flex-column">

                    <div id="intro-segment">
                        <p id="greeting-text" className="text-start fs-4">Hello, I am</p>
                        <div id="name-segment" className="pt-3 d-flex">
                            <h1 id="my-name" className="px-4 text-left animated-text">Maheen Hoque</h1>
                        </div>
                    </div>

                    <div id="about-me-segment" className="d-flex flex-column fs-5 mt-5 text-start gap-3 px-4">
                        <div className="about-me-group d-flex flex-row gap-4">
                            <span><img width="32" height="32" src="https://img.icons8.com/color/48/source-code.png" alt="source-code" /></span>
                            <span className="about-me-line">Developer and Designer</span>
                        </div>
                        <div className="about-me-group d-flex flex-row gap-4 align-items-center">
                            <span><img width="32" height="32" src="https://img.icons8.com/color/48/compass--v1.png" alt="compass--v1" /></span>
                            <span className="about-me-line">An explorer at heart</span>
                        </div>
                        <div className="about-me-group d-flex flex-row gap-4 align-items-center">
                            <span><img width="32" height="32" src="https://img.icons8.com/color/48/f1-race-car-side-view.png" alt="f1-race-car-side-view" /></span>
                            <span className="about-me-line">Automobile Enthusiast</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 d-flex flex-column align-items-center justify-content-end my-5 gap-3">
                    <a href="" className="social-icon rounded-circle p-1">
                        <GithubIcon width="50" height="50" />
                    </a>

                    <a href="" className="social-icon rounded-circle p-1">
                        <LinkedinIcon width="50" height="50" />
                    </a>

                    <a href="" className="social-icon rounded-circle p-1">
                        <GmailIcon width="50" height="50" />
                    </a>
                </div>

            </div>

            <div id="explore-me-segment" className="row">
                <div className="col-12 d-flex flex-row justify-content-center">
                    <button className="btn btn-primary">
                        Explore Me!
                    </button>
                </div>
            </div>

        </div>
    );
}