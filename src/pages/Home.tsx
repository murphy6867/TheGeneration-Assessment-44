import './Home.css'
import { Link } from 'react-router-dom'

interface Homepage {
}

function Homepage(): JSX.Element {
  return (
    <main className='w-[100%] h-[90vh] bg-black flex items-center justify-center' 
      id='Homepage'
    >
      <section className='w-[45vw] h-[35vh] bg-[#1BD760] border-4 border-black rounded-2xl p-5 flex flex-col items-center justify-center text-black drop-shadow-2xl'>
        <h1 className='mb-10 text-5xl drop-shadow-md uppercase'>View Our Team Members</h1>
        <div className='mt-10 w-[100%] flex justify-around'>
          <Link 
            to="user"
            className=''
          >
            <button className="w-44 py-4 text-xl bg-transparent hover:bg-gray-800 border border-black hover:border-white hover:border-transparent rounded text-black hover:text-white">
              <h1 className='drop-shadow-2xl  uppercase'>User</h1>
            </button>
          </Link>
          <Link 
            to="admin"
          >
            <button className="w-44 py-4 text-xl bg-transparent hover:bg-gray-800  border  border-black hover:border-white hover:border-transparent rounded text-black hover:text-white">
              <h1 className='drop-shadow-2xl uppercase'>Admin</h1>
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Homepage
