import React from 'react'

const Footer = () => {
  return (
    <footer >
      <div className='w-[100%] bg-black p-10 flex items-center justify-around'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="logo"
          className='w-36'
        />
        <div className='flex justify-around bg-slate-500'>
          <h1 className='uppercase text-gray-400'>company</h1>
          <h1 className='uppercase text-gray-400'>communities</h1>
          <h1 className='uppercase text-gray-400'>useful links</h1>
        </div>
        <div className=''>
          <ul className='flex justify-around bg-slate-500'>
            <li>
              <a href="#" className='w-[50px] h-[50px]'>
                <img src="" alt="logo-" className='w-[20px] h-[20px]' />
              </a>
            </li>
            <li>
              <a href="#" className='w-[50px] h-[50px]'>
                <img src="" alt="logo-" className='w-[20px] h-[20px]' />
              </a>
            </li>
            <li>
              <a href="#" className='w-[50px] h-[50px]'>
                <img src="" alt="logo-" className='w-[20px] h-[20px]' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer