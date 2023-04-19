import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from '../hooks/useMediaQuery';
import menuIcon from "../assets/menu-icon.svg"
import closeIcon from "../assets/close-icon.svg"

const Link = ({page, selectedPage, setSelectedPage})=>{
  const lowerCasePage = page.toLowerCase();
  return <AnchorLink
  className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
  href={`#${lowerCasePage}`}
  onClick={()=> setSelectedPage(lowerCasePage)}
  >
  {page}
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
        <div className="flex justify-between  gap-16 font-opensans text-sm font-semibold ">
          <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Testimonials"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          
          </div>
        
      ):
      (<button
      className="rounded-full bg-red p-2"
      onClick={()=> setMenuToggled(!isMenuToggled)}
      > 
       <img src={menuIcon} alt="Menu Icon" srcset="" /> 
      </button>)
      }
      {/* Mobile Menu Popup */}

      {!isAvobeSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
        {/* Close Icon   */}
        <div className="flex justify-end p-12">
          <button onClick={()=> setMenuToggled(!isMenuToggled)}>
            <img src={closeIcon} alt="Close Icon" />
          </button>
        </div>

        {/* Menu Items */}

        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Skills"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Testimonials"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
      )}
      
    </div>
    </div >
  )
}

export default Navbar;
