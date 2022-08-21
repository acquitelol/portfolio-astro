import React from 'react'
import './navbar.css'

interface navbarItem {
    name: string,
    url: string
}

const navBarItems: navbarItem[] = [
    {
        "name": "home",
        "url": "/",
    },
    {
        "name": "projects",
        "url": "/projects",
    }
]

const Navbar: React.FC = () => {
    return (
        navBarItems.map((navBarItem, index) => {
            return (
                <div index={index} className="inline">
                    <a href={navBarItem.url}>{navBarItem.name}</a>
                </div>
            )
        })
    );
};
  

export default Navbar;