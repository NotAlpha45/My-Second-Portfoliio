"use client"

import Image from "next/image";
import "./about_me.css";

export default function AboutMe() {
    return (
        <div className="container-fluid bg-dark">
            <div className="row py-5 px-2">
                <div className="d-flex justify-content-center col-md-4">
                    <Image id="profile_pic" className="rounded-circle" src="/images/me.jpg" alt="Me" width={300} height={300} />
                </div>

                <div className="col-12 col-md-6 text-white">
                    <p id="greeting-text" className="text-start fs-4">Hello, I am</p>
                    <h1 id="my-name" className="text-center">Maheen Hoque</h1>
                </div>
            </div>
        </div>
    );
}