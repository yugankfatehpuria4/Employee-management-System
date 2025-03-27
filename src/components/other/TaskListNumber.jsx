import React from 'react';
const TaskListNumber=()=>{
    return(
        <div className='flex m-10 screen justify-between gap-5'>
             <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
                <h2 className='font-semibold text-3xl'>0</h2>
                <h3 className='font-medium text-xl'>New Task</h3>
             </div>
             <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
                <h2 className='font-semibold text-3xl'>0</h2>
                <h3 className='font-medium text-xl'>Complete</h3>
             </div>
             <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
                <h2 className='font-semibold text-3xl'>0</h2>
                <h3 className='font-medium text-xl'>Accepted</h3>
             </div>
             <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
                <h2 className='font-semibold text-3xl'>0</h2>
                <h3 className='font-medium text-xl'>Failed</h3>
             </div>
        </div>
    )
}
export default TaskListNumber