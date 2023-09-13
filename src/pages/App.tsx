import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch('https://jsd5-mock-backend.onrender.com/members');
        console.log(res.body)
        // setUser(res.data)
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getUser();
  }, [])

  return (
    <div className='w-[100vw] h-[100vh] bg-slate-300'>
      {/* {users.map()} */}
    </div>
  )
}

export default App
