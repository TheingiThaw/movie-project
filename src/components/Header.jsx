import React from 'react'
import { Button, Navbar } from "flowbite-react";

const Header = () => {
    return (
        <div>
            <Navbar fluid className='bg-gray-900 text-white'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movie Site</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='text-white'>Login</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='text-white' active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-white'>About</Navbar.Link>
                    <Navbar.Link href="#" className='text-white'>Services</Navbar.Link>
                    <Navbar.Link href="#" className='text-white'>Pricing</Navbar.Link>
                    <Navbar.Link href="#" className='text-white'>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header