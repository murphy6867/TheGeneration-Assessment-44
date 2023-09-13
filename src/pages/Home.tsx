import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


function Homepage() {
  return (
    <main className='w-[100%] h-[90vh] bg-black flex items-center justify-center' 
      id='Homepage'
    >
      <section className='w-[45vw] h-[35vh] bg-[#1BD760] border-4 rounded-2xl p-5 flex flex-col items-center justify-center text-white drop-shadow-2xl'>
        <h1 className='mb-10 text-5xl drop-shadow-md uppercase'>View Our Team Members</h1>
        <div className='mt-10 w-[100%] flex justify-around'>
          <Link 
            to="user"
            className=''
          >
            <button className="w-44 py-4 text-xl bg-transparent hover:bg-gray-800 text-white  hover:text-white border border-white hover:border-transparent rounded ">
              <h1 className='drop-shadow-2xl text-white uppercase'>User</h1>
            </button>
          </Link>
          <Link 
            to="admin"
          >
            <button className="w-44 py-4 text-xl bg-transparent hover:bg-gray-800 text-white  hover:text-white border border-white hover:border-transparent rounded">
              <h1 className='drop-shadow-2xl text-white uppercase'>Admin</h1>
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Homepage
