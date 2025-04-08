import React from 'react'
import { FaClock, FaTimes, FaExclamationTriangle } from 'react-icons/fa'

const FailedTask = ({data}) => {
    return (
        <div className='group relative bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden'>
            {/* Animated Background Effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
            
            {/* Status Badge */}
            <div className='absolute top-4 right-4'>
                <div className='px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium flex items-center gap-2'>
                    <FaExclamationTriangle className='text-rose-400' />
                    Failed
                </div>
            </div>
            
            {/* Category and Date */}
            <div className='flex justify-between items-center mb-4'>
                <span className='px-3 py-1 rounded-md bg-gradient-to-r from-rose-500/20 to-rose-400/20 text-rose-400 text-xs font-medium border border-rose-500/20'>
                    {data.category}
                </span>
                <span className='text-rose-400/80 text-xs flex items-center gap-1'>
                    <FaClock className='text-rose-400' />
                    {data.taskDate}
                </span>
            </div>
            
            {/* Task Title and Description */}
            <div className='relative'>
                <h2 className='text-xl font-semibold text-rose-50 mb-3 group-hover:text-rose-300 transition-colors duration-300'>
                    {data.taskTitle}
                </h2>
                <p className='text-rose-300/80 text-sm mb-6 leading-relaxed'>
                    {data.taskDescription}
                </p>
            </div>
            
            {/* Action Button */}
            <button className='w-full bg-gradient-to-r from-rose-500 to-rose-400 text-white font-medium py-2.5 px-4 rounded-lg opacity-50 cursor-not-allowed flex items-center justify-center gap-2'>
                <FaTimes className='text-white' />
                Failed
            </button>
        </div>
    )
}

export default FailedTask