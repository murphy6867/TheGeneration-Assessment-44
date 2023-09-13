import React, { useState } from 'react'
import Table from '../components/Table'
import './Admin.css'

const Admin = () => {

  const [memberInfo, setMemberInfo] = useState({
    fName: '',
    lName: '',
    position: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const { fName, lName, position } = event.target;

    setMemberInfo({
      fName: fName.value,
      lName: lName.value,
      position: position.value,
    });

    fName.value = '';
    lName.value = '';
    position.value = '';
  }

  return (
    <main>
      <section className='w-[100%] h-[100vh] bg-slate-300 flex flex-col items-center justify-center' id="AdminMain">
        <h1 className='uppercase font-bold text-white text-5xl my-5 p-5'>Manage Team Members for Spotify</h1>
        <div className='mb-8'>
          <form onSubmit={handleSubmit}>
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Name ...' type="text" 
              name="em-name" id="emName"
              value={memberInfo.fName}
              onChange={(ev) => setMemberInfo({ ...memberInfo, fName: ev.target.value})}
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white mx-4' placeholder='Lastname ...' type="text" 
              name="em-last-name" id="emLastName"
              value={memberInfo.lName}
              onChange={(ev) => setMemberInfo({ ...memberInfo, lName: ev.target.value})} 
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Position ...' type="text" 
              name="em-position" id="emPosition" 
              value={memberInfo.position}
              onChange={(ev) => setMemberInfo({ ...memberInfo, position: ev.target.value})}
              />
            <button className='ms-4 text-white py-2 px-4 hover:drop-shadow-2xl bg-[#1BD760] rounded-xl' type='submit'>Submit</button>
          </form>
        </div>
        <div>
          <Table permission={true} newMember={memberInfo}/>
        </div>
      </section>
    </main>
  )
}

export default Admin