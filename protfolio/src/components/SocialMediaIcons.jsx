import React from 'react'

import twitter from '../assets/twitter.png'
import linkedIn from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start py-10 gap-7">
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/"
            target="_black"
            rel="noreferrer"
        >
            <img src={facebook} alt="" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.linkedIn.com/"
            target="_black"
            rel="noreferrer"
        >
            <img src={linkedIn} alt="" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.twitter.com/"
            target="_black"
            rel="noreferrer"
        >
            <img src={twitter} alt="" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/"
            target="_black"
            rel="noreferrer"
        >
            <img src={instagram} alt="" />
        </a>
    </div>
  )
}

export default SocialMediaIcons
