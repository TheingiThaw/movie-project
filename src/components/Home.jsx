import React from 'react'
import { Button, Navbar } from "flowbite-react";
import Movies from './Movies';

const Home = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movie Site</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='text-gray-800'>Get started</Button>
                    <Navbar.Toggle />
                </div>
            </Navbar>

            <Movies />

        </div>

    )
}

export default Home
