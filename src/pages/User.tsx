import './User.css';
import Table from '../components/Table';

const User:React.FC = () => {

  return (
    <main className='w-[100%] h-[100vh] bg-slate-300 flex flex-col items-center justify-center' id="UserMain">
      <section className='w-[70vw] h-[70vh] flex flex-col items-center rounded-3xl p-10'>
        <h1 className='text-white uppercase drop-shadow-2xl font-bold text-5xl my-5 p-5'>Spotify Team Members</h1>
        <div>
          <Table permission={false} />
        </div>
      </section>
    </main>
  )
}

export default User