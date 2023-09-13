import React from 'react';
import './Owner.css';

const Owner = () => {
  return (
    <main className='w-[100%] h-[86.14vh] bg-slate-300 flex items-center justify-center' id="OwnerMain">
      <div className='bg-owner-bg w-[50vw] h-[50vh] rounded-xl flex flex-col items-center justify-center'>
        <h1 className='text-5xl uppercase text-white'>sonsawan - group 9 - 44</h1>
        <section className='rounded-full w-52 h-52 my-7' id='OwnerImage'>
        </section>
        <section className='text-white flex flex-col items-center justify-center'>
          <h1>Short Bioraphy</h1>
          <p>Hi!, My name is Sonsawan you can call me Nick. I'm really love to coding.</p>
        </section>
      </div>
    </main>
  )
}

export default Owner