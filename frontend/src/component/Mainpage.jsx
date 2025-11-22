import React from 'react'

const Mainpage = () => {
  return (
    <div className='flex flex-col bg-[#1e1e1e] text-white w-xl justify-center text-center '>
      <input type="text" name='task' placeholder='Enter a task' className='p-2 m-2'/>
      <button className='bg-green-400 hover:bg-green-500 cursor-pointer p-2 m-2'>Add Task</button>
      <ul>
        <li className='m-2 bg-[#111111] p-2'>Hey</li>
        <li className='m-2 bg-[#111111] p-2'>Hey</li>
        <li className='m-2 bg-[#111111] p-2'>Hey</li>
        <li className='m-2 bg-[#111111] p-2'>Hey</li>
        <li className='m-2 bg-[#111111] p-2'>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
        <li>Hey</li>
      </ul>
    </div>
  )
}

export default Mainpage
