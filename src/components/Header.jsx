import React from 'react'
import { Button, Navbar } from "flowbite-react";

const Header = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Movie Site</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>Sign Up</Button>
                    <Navbar.Toggle />
                </div>
            </Navbar>
        </div>
    )
}

export default Header