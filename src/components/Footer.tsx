import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
  faFacebook,
  faTwitter,
  faInstagram
);

const Footer = () => {
  return (
    <footer >
      <div className='w-[100%] bg-black p-10 flex items-center justify-around'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="logo"
          className='w-36'
        />
        <div className='flex justify-around w-[30vw]'>
          <h1 className='font-bold uppercase text-gray-400'>company</h1>
          <h1 className='font-bold uppercase text-gray-400'>communities</h1>
          <h1 className='font-bold uppercase text-gray-400'>useful links</h1>
        </div>
        <div className=''>
          <ul className='flex w-[12vw] justify-around'>
            <li>
              <a href="#" className='w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-700 rounded-full'>
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" style={{color: "#ffffff",}} />
              </a>
            </li>
            <li>
              <a href="#" className='w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-700 rounded-full'>
                <FontAwesomeIcon icon="fa-brands fa-twitter" size="xl" style={{color: "#ffffff",}} />
              </a>
            </li>
            <li>
              <a href="#" className='w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-700 rounded-full'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" style={{color: "#ffffff",}} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer