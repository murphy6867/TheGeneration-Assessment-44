import { useState } from 'react'
import Table from '../components/Table'
import './Admin.css'

const Admin = () => {

  // For add member
  const uuid = Math.floor(Math.random() * 99);
  const [ids, setId] = useState();
  const [name, setMemberFname] = useState('');
  const [lastname, setMemberLname] = useState('');
  const [position, setMemberPos] = useState('');
  const [teamMembers, setTeamMembers] = useState({
    id: 0,
    name: '',
    lastname: '',
    position: ''
  });

  // Function Add Member
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (ids) {
      setTeamMembers({
        id: ids,
        name: name,
        lastname: lastname,
        position: position,
      });

    } else {
      setTeamMembers({
        id: uuid,
        name: name,
        lastname: lastname,
        position: position,
      });

    }
  }

  // Function Edit Member
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = (member:any) => {
    setId(member.id)
    setMemberFname(member.name)
    setMemberLname(member.lastname)
    setMemberPos(member.position)
  }

  return (
    <main>
      <section className='w-[100%] h-[100vh] bg-slate-300 flex flex-col items-center justify-center' id="AdminMain">
        <h1 className='uppercase font-bold text-white text-5xl my-5 p-5'>Manage Team Members for Spotify</h1>
        <div className='mb-8'>
          <form onSubmit={handleSubmit}>
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Name ...' type="text" 
              name="em-name"
              value={name}
              onChange={(ev) => setMemberFname(ev.target.value)}
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white mx-4' placeholder='Lastname ...' type="text" 
              name="em-last-name"
              value={lastname}
              onChange={(ev) => setMemberLname(ev.target.value)} 
              />
            <input className='bg-transparent border-2 border-black rounded-xl px-5 py-2 text-white' placeholder='Position ...' type="text" 
              name="em-position" 
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
          <Table permission={true}  newMember={teamMembers} getMember={handleEdit}/>
        </div>
      </section>
    </main>
  )
}

export default Admin