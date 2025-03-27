import React from 'react';
const CreateTask =() =>{
    return(
        <div className='mt-7 rounded p-5 bg-[#1c1c1c]'>
                <form action="" className='flex flex-wrap w-full items-start justify-between '>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-l mb-1 text-gray-300'>Task Title : - </h3>
                            <input className='text-xl font-medium rounded outline-none bg-transparent border-[1px] py-1 px-2 w-4/5 mb-4 border-gray-400' type="text" placeholder='make A UI design' />
                        </div>
                        <div>
                            <h3 className='text-l mb-1 text-gray-300'>Date : -</h3>
                            <input className='text-xl font-medium rounded outline-none bg-transparent border-[1px] py-1 px-2 w-4/5 mb-4 border-gray-400' type="date" />
                        </div>
                        <div>
                            <h3 className='text-l mb-1 text-gray-300'>Assign To : - </h3>
                            <input className='text-xl font-medium rounded outline-none bg-transparent border-[1px] py-1 px-2 w-4/5 mb-4 border-gray-400' type="text" placeholder='employee name' />   
                        </div>
                        <div>
                            <h3 className='text-l mb-1 text-gray-300'>Category : - </h3>
                            <input className='text-xl font-medium rounded outline-none bg-transparent border-[1px] py-1 px-2 w-4/5 mb-4 border-gray-400' type="text" placeholder='design, dev, etc..' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start' >
                        <h3 className='text-l mb-0.5 text-gray-300'>Description : - </h3>
                        <textarea className='w-full h-44 text-l py-2 px-3 rounded outline-none border-[1px] bg-transparent border-gray-400' cols="40" rows="50"></textarea>
                        <button className='py-3 bg-emerald-500 px-5 w-full mt-7 rounded hover:bg-emerald-600'>Create Task!!</button>
                    </div>
                </form>
        </div>
    )
}
export default CreateTask