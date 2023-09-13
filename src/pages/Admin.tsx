import React, { useState } from 'react'
import Table from '../components/Table'
import './Admin.css'

const Admin = () => {

  const [memberFname, setMemberFname] = useState('')
  const [memberLname, setMemberLname] = useState('')
  const [memberPos, setMemberPos] = useState('')
  let newMember = {
    "name": "",
    "lastname": "",
    "position": ""
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    newMember = {
      "name": memberFname,
      "lastname": memberLname,
      "position": memberPos,
    }

    setMemberFname('')
    setMemberLname('')
    setMemberPos('')

  }

  return (
    <main>
      <section className='w-[100%] h-[100vh] bg-slate-300 flex flex-col items-center justify-center' id="AdminMain">
        <h1 className='uppercase font-bold text-white text-5xl my-5 p-5'>Manage Team Members for Spotify</h1>
        <div className='mb-8'>
          <form onSubmit={handleSubmit}>
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Name ...' type="text" 
              name="em-name" id="emName"
              value={memberFname}
              onChange={(ev) => setMemberFname(ev.target.value)}
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white mx-4' placeholder='Lastname ...' type="text" 
              name="em-last-name" id="emLastName"
              value={memberLname}
              onChange={(ev) => setMemberLname(ev.target.value)} 
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Position ...' type="text" 
              name="em-position" id="emPosition" 
              value={memberPos}
              onChange={(ev) => setMemberPos(ev.target.value)}
              />
            <button className='ms-4 text-white py-2 px-4 hover:drop-shadow-2xl bg-[#1BD760] rounded-xl' type='submit'>Submit</button>
          </form>
        </div>
        <div>
          <Table permission={true} newMember={newMember}/>
        </div>
      </section>
    </main>
  )
}

export default Admin