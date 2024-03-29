"use client"

import { Navbar, Nav } from "rsuite"
import Link from "next/link"
import "./navbar.css"
import { CustomNavbarProps } from "../../../core/types/component_types"

//@ts-ignore
export default function CustomNavbar(props: CustomNavbarProps) {

    const navOptions = props.navOptionsAndCallback ? Array.from(props.navOptionsAndCallback.entries()) : []

    return (
        <>

            <Nav className="pb-2 pt-2 d-flex fs-6">
                {navOptions.map((option, index) => {
                    const optionVal = option[0]
                    const optionCallback = option[1]

                    return (
                        <Nav.Item key={index} eventKey={(index + 1).toString()} onClick={optionCallback}>
                            {optionVal}
                        </Nav.Item>
                    )
                })}
            </Nav>

        </>
    )
}