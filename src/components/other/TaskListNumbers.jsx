import React from 'react'
import { FaTasks, FaCheckCircle, FaPlayCircle, FaTimesCircle } from 'react-icons/fa'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* New Tasks Card */}
        <div className='group relative bg-[#0B1121]/80 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-6 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden'>
            {/* Animated background effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
            <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] bg-[length:250%_250%] hover:bg-[position:100%_100%] transition-[background-position] duration-500'></div>
            
            {/* Content */}
            <div className='relative flex items-center justify-between'>
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-[length:200%_auto] animate-gradient-x mb-2'>{data.taskCounts.newTask}</h2>
                    <h3 className='text-lg font-medium text-cyan-300'>New Task</h3>
                </div>
                <div className='p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300'>
                    <FaTasks className='text-2xl text-cyan-400 group-hover:rotate-12 transition-transform duration-300' />
                </div>
            </div>
            <div className='relative mt-4 pt-4 border-t border-cyan-500/20'>
                <p className='text-cyan-300/80 text-sm'>Tasks waiting to be assigned</p>
            </div>
        </div>
        
        {/* Completed Tasks Card */}
        <div className='group relative bg-[#0B1121]/80 backdrop-blur-xl rounded-xl border border-emerald-500/20 p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:border-emerald-500/40 transition-all duration-300 overflow-hidden'>
            {/* Animated background effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_70%)]'></div>
            <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.1)_50%,transparent_75%)] bg-[length:250%_250%] hover:bg-[position:100%_100%] transition-[background-position] duration-500'></div>
            
            {/* Content */}
            <div className='relative flex items-center justify-between'>
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-[length:200%_auto] animate-gradient-x mb-2'>{data.taskCounts.completed}</h2>
                    <h3 className='text-lg font-medium text-emerald-300'>Completed Task</h3>
                </div>
                <div className='p-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300'>
                    <FaCheckCircle className='text-2xl text-emerald-400 group-hover:rotate-12 transition-transform duration-300' />
                </div>
            </div>
            <div className='relative mt-4 pt-4 border-t border-emerald-500/20'>
                <p className='text-emerald-300/80 text-sm'>Successfully completed tasks</p>
            </div>
        </div>
        
        {/* Active Tasks Card */}
        <div className='group relative bg-[#0B1121]/80 backdrop-blur-xl rounded-xl border border-amber-500/20 p-6 shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:border-amber-500/40 transition-all duration-300 overflow-hidden'>
            {/* Animated background effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.1),transparent_70%)]'></div>
            <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.1)_50%,transparent_75%)] bg-[length:250%_250%] hover:bg-[position:100%_100%] transition-[background-position] duration-500'></div>
            
            {/* Content */}
            <div className='relative flex items-center justify-between'>
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-[length:200%_auto] animate-gradient-x mb-2'>{data.taskCounts.active}</h2>
                    <h3 className='text-lg font-medium text-amber-300'>Accepted Task</h3>
                </div>
                <div className='p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-400/20 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300'>
                    <FaPlayCircle className='text-2xl text-amber-400 group-hover:rotate-12 transition-transform duration-300' />
                </div>
            </div>
            <div className='relative mt-4 pt-4 border-t border-amber-500/20'>
                <p className='text-amber-300/80 text-sm'>Currently in progress</p>
            </div>
        </div>
        
        {/* Failed Tasks Card */}
        <div className='group relative bg-[#0B1121]/80 backdrop-blur-xl rounded-xl border border-rose-500/20 p-6 shadow-[0_0_30px_rgba(244,63,94,0.1)] hover:border-rose-500/40 transition-all duration-300 overflow-hidden'>
            {/* Animated background effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.1),transparent_70%)]'></div>
            <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(244,63,94,0.1)_50%,transparent_75%)] bg-[length:250%_250%] hover:bg-[position:100%_100%] transition-[background-position] duration-500'></div>
            
            {/* Content */}
            <div className='relative flex items-center justify-between'>
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 bg-[length:200%_auto] animate-gradient-x mb-2'>{data.taskCounts.failed}</h2>
                    <h3 className='text-lg font-medium text-rose-300'>Failed Task</h3>
                </div>
                <div className='p-4 rounded-full bg-gradient-to-br from-rose-500/20 to-rose-400/20 border border-rose-500/20 group-hover:scale-110 transition-transform duration-300'>
                    <FaTimesCircle className='text-2xl text-rose-400 group-hover:rotate-12 transition-transform duration-300' />
                </div>
            </div>
            <div className='relative mt-4 pt-4 border-t border-rose-500/20'>
                <p className='text-rose-300/80 text-sm'>Tasks that need attention</p>
            </div>
        </div>
    </div>
  )
}

export default TaskListNumbers