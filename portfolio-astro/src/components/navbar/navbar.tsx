import React from 'react'
import './navbar.css'

interface containerProps {
    navbarArray: [];
    navbarIcons: [];
}

const Navbar: React.FC<containerProps> = ({navbarArray, navbarIcons}) => {
    return (
        <div className='navbarContainer'>        
            {navbarArray.map((navBarItem, index: number) => {
                const getName = (str: string) => {
                    return str.charAt(0).toUpperCase() + str.slice(1)
                }
                return (
                    <div index={index} className="inline">
                        <a href={navBarItem.url} className='itemContent'>
                            {getName(navBarItem.name)}
                        </a>
                    </div>
                )
            })}

            {navbarIcons.map((navBarItem, index: number) => {
                return (
                    <a href={navBarItem.url} target='blank' index={index} className={index===0?'icons iconContent':"iconContent"}>
                        <img src={navBarItem.image} alt={navBarItem.name} width='30' />
                    </a>
                )
            })}
        </div>

    );
};
  

export default Navbar;