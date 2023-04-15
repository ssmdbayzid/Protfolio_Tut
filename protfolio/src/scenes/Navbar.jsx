import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({page, selectedPage, setSelectedPage})=>{
  const lowerCasePage = page.tolowarCase();
  return <AnchorLink
  className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}>

  </AnchorLink>
}

const Navbar = ({page, selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const isAvobeSmallScreens = useMediaQuery("(min-width: 768px)")


  return (
    <div className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between  mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>
      {/* DESKTOP NAVBAR */}
      {isAvobeSmallScreens ? (
        <div className="flex justify-between mx-auto w-5/6 gap-16 font-opensans text-sm font-semibold ">
          Home
          </div>
        
      ): (<div> SVGMaskElement</div>)
      }
      </div>
    </div>
  )
}

export default Navbar
