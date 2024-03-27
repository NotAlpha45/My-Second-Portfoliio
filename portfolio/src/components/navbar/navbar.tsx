"use client"

import { Navbar, Nav } from "rsuite"
import Link from "next/link"
import "./navbar.css"

//@ts-ignore
export default function CustomNavbar({ appearance, openKeys, onOpenChange, ...navProps }) {
    const navOptions = [
        "About Me",
        "My Domain",
        "Languages and Tools",
        "Projects",
    ]

    return (
        <>

            <Nav className="pb-2 pt-2 d-flex fs-6">
                {navOptions.map((option, index) => {
                    return (
                        <Nav.Item key={index} eventKey={(index + 1).toString()} >
                            {option}
                        </Nav.Item>
                    )
                })}
            </Nav>

        </>
    )
}