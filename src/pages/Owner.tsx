import './Owner.css';

const Owner:React.FC = () => {
  return (
    <main className='w-[100%] h-[86.14vh] bg-slate-300 flex items-center justify-center' id="OwnerMain">
      <div className='bg-owner-bg w-[50vw] h-[60vh] rounded-xl flex flex-col items-center justify-center'>
        <h1 className='text-5xl uppercase text-white'>sonsawan - group 9 - 44</h1>
        <section className='rounded-full w-52 h-52 my-7' id='OwnerImage'>
        </section>
        <section className='text-white flex flex-col items-center justify-center px-10'>
          <h1 className='text-xl mb-3'>Short Bioraphy</h1>
          <p className='text-xl'>"Hi, I'm Nick, a self-taught coder. I've explored many languages and tech. Now, I focus on Java and Spring Boot, diving into web development intricacies. I aim to excel and innovate."</p>
        </section>
      </div>
    </main>
  )
}

export default Owner