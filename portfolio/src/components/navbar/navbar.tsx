"use client"

import { Navbar, Nav } from "rsuite"

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
            <Navbar appearance={appearance} {...navProps}>
                <Nav>
                    {navOptions.map((option, index) => {
                        return (
                            <Nav.Item className="text-white" key={index} eventKey={(index + 1).toString()}>
                                {option}
                            </Nav.Item>
                        )
                    })}
                </Nav>

            </Navbar>
        </>
    )
}