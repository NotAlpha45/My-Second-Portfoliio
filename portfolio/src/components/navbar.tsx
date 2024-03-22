"use client"

import { Nav, Sidenav } from "rsuite"
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

//@ts-ignore
export default function Navbar({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) {
    const navOptions = [
        "About Me",
        "My Domain",
        "Languages and Tools",
        "Projects",
    ]

    return (
        <div>
            <Sidenav
                appearance={appearance}
                expanded={expanded}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                <Sidenav.Body>
                    <Nav {...navProps}>
                        {
                            navOptions.map((option, index) => {
                                return (
                                    <Nav.Item key={index} eventKey={(index + 1).toString()} icon={<GearCircleIcon />}>
                                        {option}
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Toggle onToggle={onExpand} />
            </Sidenav>
        </div>
    )
}