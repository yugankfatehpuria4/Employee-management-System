import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { FaUser, FaPlus, FaPlay, FaCheck, FaTimes } from 'react-icons/fa'

const AllTask = () => {
   const [userData, setUserData] = useContext(AuthContext)
   
  return (
    <div className='bg-[#0B1121] bg-opacity-95 p-4 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.1)] border border-cyan-500/10 backdrop-blur-xl relative overflow-hidden h-[600px] flex flex-col'>
        {/* Futuristic animated gradient background */}
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 animate-pulse'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
        
        {/* Fixed Header */}
        <div className='bg-[#0B1121]/80 mb-3 p-3 rounded-xl border border-cyan-500/20 backdrop-blur-xl z-10 shadow-[0_8px_32px_rgba(6,182,212,0.1)]'>
            <div className='grid grid-cols-5 gap-4'>
                <h2 className='text-cyan-50 font-medium flex items-center gap-2'>
                    <span className='p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300'>
                        <FaUser className="text-cyan-400 text-xs" />
                    </span>
                    <span className='text-xs tracking-[0.2em] uppercase font-medium'>Employee</span>
                </h2>
                <h3 className='text-cyan-50 font-medium flex items-center gap-2'>
                    <span className='p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300'>
                        <FaPlus className="text-cyan-400 text-xs" />
                    </span>
                    <span className='text-xs tracking-[0.2em] uppercase font-medium'>New</span>
                </h3>
                <h5 className='text-cyan-50 font-medium flex items-center gap-2'>
                    <span className='p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300'>
                        <FaPlay className="text-cyan-400 text-xs" />
                    </span>
                    <span className='text-xs tracking-[0.2em] uppercase font-medium'>Active</span>
                </h5>
                <h5 className='text-cyan-50 font-medium flex items-center gap-2'>
                    <span className='p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300'>
                        <FaCheck className="text-cyan-400 text-xs" />
                    </span>
                    <span className='text-xs tracking-[0.2em] uppercase font-medium'>Done</span>
                </h5>
                <h5 className='text-cyan-50 font-medium flex items-center gap-2'>
                    <span className='p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300'>
                        <FaTimes className="text-cyan-400 text-xs" />
                    </span>
                    <span className='text-xs tracking-[0.2em] uppercase font-medium'>Failed</span>
                </h5>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-hidden'>
            <div className='h-full space-y-2 overflow-y-auto pr-2 
                scrollbar-thin 
                scrollbar-track-cyan-950/50 
                scrollbar-thumb-cyan-500/20 
                hover:scrollbar-thumb-cyan-500/30 
                scrollbar-thumb-rounded-full 
                scrollbar-track-rounded-full
                scrollbar-thumb-border-2 
                scrollbar-thumb-border-cyan-500/10
                transition-all duration-300'>
                {userData.map((elem, idx) => (
                    <div 
                        key={idx} 
                        className='grid grid-cols-5 gap-4 py-2.5 px-3 rounded-lg bg-cyan-950/20 hover:bg-cyan-900/20 transition-all duration-300 border border-cyan-500/10 backdrop-blur-xl group relative overflow-hidden'
                    >
                        {/* Hover effect line */}
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        
                        <h2 className='text-cyan-50 font-medium flex items-center gap-2 relative'>
                            <span className='w-7 h-7 rounded-lg bg-cyan-950/50 text-cyan-400 flex items-center justify-center font-semibold text-xs border border-cyan-500/20 group-hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]'>
                                {elem.firstName.charAt(0)}
                            </span>
                            <span className='text-xs tracking-wider'>{elem.firstName}</span>
                        </h2>
                        <h3 className='text-cyan-50 flex items-center relative'>
                            <span className='px-2.5 py-1 rounded-md bg-cyan-950/30 text-cyan-400 font-medium text-xs border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]'>
                                {elem.taskCounts.newTask}
                            </span>
                        </h3>
                        <h5 className='text-cyan-50 flex items-center relative'>
                            <span className='px-2.5 py-1 rounded-md bg-cyan-950/30 text-cyan-400 font-medium text-xs border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]'>
                                {elem.taskCounts.active}
                            </span>
                        </h5>
                        <h5 className='text-cyan-50 flex items-center relative'>
                            <span className='px-2.5 py-1 rounded-md bg-cyan-950/30 text-cyan-400 font-medium text-xs border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]'>
                                {elem.taskCounts.completed}
                            </span>
                        </h5>
                        <h5 className='text-cyan-50 flex items-center relative'>
                            <span className='px-2.5 py-1 rounded-md bg-cyan-950/30 text-cyan-400 font-medium text-xs border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]'>
                                {elem.taskCounts.failed}
                            </span>
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllTask