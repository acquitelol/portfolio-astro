import React from 'react'
import './navbar.css'

interface containerProps {
    navbarArray: [];
}

const Navbar: React.FC<containerProps> = ({navbarArray}) => {
    return (
        navbarArray.map((navBarItem, index: number) => {
            const getName = (string: string) => {
                let name = string
                let formatted = name.slice(0).replaceAll('%20', ' ')
              
                if (formatted==='') return "Invalid"
              
                let one = formatted.split('', 1)
                let two = [one[0], formatted.slice(1)]
                one[0] = one[0].toUpperCase();
                let final = one[0]+two[1]
              
                return final
            }
            return (
                <div index={index} className="inline">
                    <a href={navBarItem.url}>{getName(navBarItem.name)}</a>
                </div>
            )
        })
    );
};
  

export default Navbar;