import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


function Homepage() {
  return (
    <main className='w-[100%] h-[100vh] bg-slate-300 flex items-center justify-center' 
      id='Homepage'
    >
      <section className='w-[35vw] h-[40vh] bg-home-card rounded-2xl p-5 flex flex-col items-center justify-center text-white'>
        <h1 className='mb-10 text-5xl'>View Our Team Members</h1>
        <div className='mt-10 w-[100%] flex justify-around'>
          <Link 
            to="user"
            className=''
          >
            <button className="w-44 py-4 text-xl bg-transparent hover:bg-gray-800 text-white  hover:text-white border border-white hover:border-transparent rounded">
              As User
            </button>
          </Link>
          <Link 
            to="admin"
          >
            <button className="w-44 py-4 text-xl bg-transparent hover:bg-gray-800 text-white  hover:text-white border border-white hover:border-transparent rounded">
              As Admin
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Homepage
