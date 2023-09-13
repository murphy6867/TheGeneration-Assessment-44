import React from 'react'
import Table from '../components/Table'
import './Admin.css'

const Admin = () => {
  return (
    <main>
    <section className='w-[100%] h-[100vh] bg-slate-300 flex flex-col items-center justify-center' id="AdminMain">
      <h1 className='bg-user-table text-white text-5xl my-5 p-5'>Manage Team Members for Spotify</h1>
      <div className='w-[80vw] h-[50vh] bg-user-table my-5 rounded-3xl'>
        <Table />
      </div>
    </section>
  </main>
  )
}

export default Admin