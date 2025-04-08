import React from 'react'
import { FaClock, FaCheck, FaTimes, FaPlay } from 'react-icons/fa'

const AcceptTask = ({data}) => {
    return (
        <div className='group relative bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden'>
            {/* Animated Background Effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
            
            {/* Status Badge */}
            <div className='absolute top-4 right-4'>
                <div className='px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium flex items-center gap-2'>
                    <FaPlay className='text-amber-400' />
                    Active
                </div>
            </div>
            
            {/* Category and Date */}
            <div className='flex justify-between items-center mb-4'>
                <span className='px-3 py-1 rounded-md bg-gradient-to-r from-amber-500/20 to-amber-400/20 text-amber-400 text-xs font-medium border border-amber-500/20'>
                    {data.category}
                </span>
                <span className='text-amber-400/80 text-xs flex items-center gap-1'>
                    <FaClock className='text-amber-400' />
                    {data.taskDate}
                </span>
            </div>
            
            {/* Task Title and Description */}
            <div className='relative'>
                <h2 className='text-xl font-semibold text-amber-50 mb-3 group-hover:text-amber-300 transition-colors duration-300'>
                    {data.taskTitle}
                </h2>
                <p className='text-amber-300/80 text-sm mb-6 leading-relaxed'>
                    {data.taskDescription}
                </p>
            </div>
            
            {/* Action Buttons */}
            <div className='flex gap-3'>
                <button className='flex-1 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-medium py-2.5 px-4 rounded-lg hover:from-emerald-400 hover:to-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B1121] transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'>
                    <FaCheck className='text-white' />
                    Complete
                </button>
                <button className='flex-1 bg-gradient-to-r from-rose-500 to-rose-400 text-white font-medium py-2.5 px-4 rounded-lg hover:from-rose-400 hover:to-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-[#0B1121] transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]'>
                    <FaTimes className='text-white' />
                    Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask