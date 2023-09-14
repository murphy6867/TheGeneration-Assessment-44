import { useState } from 'react'
import Table from '../components/Table'
import './Admin.css'

const Admin = () => {

  // For add member
  const id = Math.floor(Math.random() * 99);
  const [name, setMemberFname] = useState('');
  const [lastname, setMemberLname] = useState('');
  const [position, setMemberPos] = useState('');
  const [teamMembers, setTeamMembers] = useState({
    id: 0,
    name: '',
    lastname: '',
    position: ''
  });

  // Function Fix for static data
  // const handleFixItem = (item) => {
  //   setMemberFname(item.name)
  //   setMemberLname(item.lastname)
  //   setMemberPos(item.position)
  // }

  // Function Add Member
  const handleSubmit = (ev) => {
    ev.preventDefault();

    setTeamMembers({
        id: id,
        name: name,
        lastname: lastname,
        position: position,
      });
    }

  // Function Edit Member
  const handleEdit = (member) => {
    console.log(member)
  }

  return (
    <main>
      <section className='w-[100%] h-[100vh] bg-slate-300 flex flex-col items-center justify-center' id="AdminMain">
        <h1 className='uppercase font-bold text-white text-5xl my-5 p-5'>Manage Team Members for Spotify</h1>
        <div className='mb-8'>
          <form onSubmit={handleSubmit}>
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Name ...' type="text" 
              name="em-name" id="emName"
              value={name}
              onChange={(ev) => setMemberFname(ev.target.value)}
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white mx-4' placeholder='Lastname ...' type="text" 
              name="em-last-name" id="emLastName"
              value={lastname}
              onChange={(ev) => setMemberLname(ev.target.value)} 
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Position ...' type="text" 
              name="em-position" id="emPosition" 
              value={position}
              onChange={(ev) => setMemberPos(ev.target.value)}
              />
            <button className='ms-4 text-white py-2 px-4 hover:drop-shadow-2xl bg-[#1BD760] rounded-xl' type='submit'
              
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <Table permission={true} handleEdit={handleEdit}  newMember={teamMembers} />
        </div>
      </section>
    </main>
  )
}

export default Admin