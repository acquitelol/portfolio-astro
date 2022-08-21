import React from 'react'
import './navbar.css'

interface containerProps {
    navbarArray: [];
}

const Navbar: React.FC<containerProps> = ({navbarArray}) => {
    return (
        navbarArray.map((navBarItem, index) => {
            return (
                <div index={index} className="inline">
                    <a href={navBarItem.url}>{navBarItem.name}</a>
                </div>
            )
        })
    );
};
  

export default Navbar;