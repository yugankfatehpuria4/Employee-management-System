import React, { useState, useEffect } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { FaTasks, FaChartLine, FaRocket, FaPlus, FaCheckCircle, FaTrash, FaCalendarAlt, FaClock, FaTimesCircle } from 'react-icons/fa'

const TaskList = ({ data, onTaskUpdate }) => {
    const [tasks, setTasks] = useState(data?.tasks || [])
    const [selectedTask, setSelectedTask] = useState(null)
    const [isAddingTask, setIsAddingTask] = useState(false)
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        status: 'pending'
    })

    // Update tasks when data prop changes
    useEffect(() => {
        if (data?.tasks) {
            setTasks(data.tasks)
        }
    }, [data])

    const handleCompleteTask = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, status: 'completed' } : task
        )
        setTasks(updatedTasks)
        if (onTaskUpdate) {
            onTaskUpdate(updatedTasks)
        }
    }

    const handleFailTask = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, status: 'failed' } : task
        )
        setTasks(updatedTasks)
        if (onTaskUpdate) {
            onTaskUpdate(updatedTasks)
        }
    }

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
        if (onTaskUpdate) {
            onTaskUpdate(updatedTasks)
        }
    }

    const handleAddTask = () => {
        if (newTask.title && newTask.description) {
            const task = {
                id: Date.now(),
                ...newTask,
                active: true
            }
            const updatedTasks = [...tasks, task]
            setTasks(updatedTasks)
            if (onTaskUpdate) {
                onTaskUpdate(updatedTasks)
            }
            setNewTask({
                title: '',
                description: '',
                dueDate: '',
                priority: 'medium',
                status: 'pending'
            })
            setIsAddingTask(false)
        }
    }

    return (
        <div className='space-y-6 relative'>
            {/* Background Effects */}
            <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
            <div className='absolute inset-0 bg-gradient-to-br from-[#050A14]/95 via-[#0A1428]/90 to-[#050A14]/95 backdrop-blur-sm'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)] animate-pulse'></div>
            <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px]'></div>

            <div className='relative z-10'>
                {/* Header */}
                <div className='flex justify-between items-center p-4 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-2xl border border-cyan-500/10 shadow-lg shadow-cyan-500/5 backdrop-blur-xl'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/10 group hover:shadow-cyan-500/20 transition-all duration-300'>
                            <FaTasks className='text-cyan-400/80 text-xl group-hover:text-cyan-400 transition-colors duration-300' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                                Task List
                            </h2>
                            <p className='text-cyan-300/40'>Manage your tasks and deadlines</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsAddingTask(true)}
                        className='px-4 py-2 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm group'
                    >
                        <span className='flex items-center gap-2 text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300'>
                            <FaPlus className='text-sm' />
                            Add Task
                        </span>
                    </button>
                </div>

                {/* Task List */}
                <div className='space-y-4'>
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <div 
                                key={task.id}
                                className={`bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-xl p-4 border ${
                                    task.status === 'completed' 
                                        ? 'border-green-500/30' 
                                        : task.status === 'failed'
                                        ? 'border-red-500/30'
                                        : 'border-cyan-500/10'
                                } shadow-lg shadow-cyan-500/5 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300`}
                            >
                                {/* Background Effects */}
                                <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
                                
                                <div className='relative z-10'>
                                    <div className='flex items-start justify-between'>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-3 mb-2'>
                                                <h3 className={`text-lg font-medium ${
                                                    task.status === 'completed'
                                                        ? 'text-green-400/80'
                                                        : task.status === 'failed'
                                                        ? 'text-red-400/80'
                                                        : 'text-cyan-400/80'
                                                } group-hover:text-cyan-400 transition-colors duration-300`}>
                                                    {task.title}
                                                </h3>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                                    task.priority === 'high' 
                                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                                        : task.priority === 'medium'
                                                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                }`}>
                                                    {task.priority}
                                                </span>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                                    task.status === 'completed'
                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                        : task.status === 'failed'
                                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                                }`}>
                                                    {task.status}
                                                </span>
                                            </div>
                                            <p className='text-cyan-300/60 text-sm mb-3'>{task.description}</p>
                                            <div className='flex items-center gap-4 text-sm'>
                                                <span className='text-cyan-300/40 flex items-center gap-1'>
                                                    <FaCalendarAlt className='text-xs' />
                                                    Due: {task.dueDate}
                                                </span>
                                                <span className='text-cyan-300/40 flex items-center gap-1'>
                                                    <FaClock className='text-xs' />
                                                    {task.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            {task.status === 'pending' && (
                                                <>
                                                    <button 
                                                        onClick={() => handleCompleteTask(task.id)}
                                                        className='p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 shadow-lg shadow-green-500/5 hover:shadow-green-500/20 group'
                                                    >
                                                        <FaCheckCircle className='text-green-400/80 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300' />
                                                    </button>
                                                    <button 
                                                        onClick={() => handleFailTask(task.id)}
                                                        className='p-2 rounded-lg bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 shadow-lg shadow-red-500/5 hover:shadow-red-500/20 group'
                                                    >
                                                        <FaTimesCircle className='text-red-400/80 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300' />
                                                    </button>
                                                </>
                                            )}
                                            <button 
                                                onClick={() => handleDeleteTask(task.id)}
                                                className='p-2 rounded-lg bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 shadow-lg shadow-red-500/5 hover:shadow-red-500/20 group'
                                            >
                                                <FaTrash className='text-red-400/80 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='text-center py-12 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-2xl border border-cyan-500/10 shadow-lg shadow-cyan-500/5 backdrop-blur-xl'>
                            <FaTasks className='text-4xl mx-auto mb-4 text-cyan-400/20' />
                            <p className='text-cyan-300/40'>No tasks available</p>
                            <button 
                                onClick={() => setIsAddingTask(true)}
                                className='mt-4 px-4 py-2 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm group'
                            >
                                <span className='flex items-center gap-2 text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300'>
                                    <FaPlus className='text-sm' />
                                    Add Your First Task
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Task Form Modal */}
            {isAddingTask && (
                <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
                    <div className='bg-gradient-to-r from-[#0A1428]/95 to-[#050A14]/95 rounded-2xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 w-full max-w-md relative overflow-hidden'>
                        {/* Background Effects */}
                        <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)] animate-pulse'></div>
                        
                        <div className='relative z-10'>
                            <h3 className='text-xl font-bold text-cyan-400/80 mb-4'>Add New Task</h3>
                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium text-cyan-300/60 mb-1'>Title</label>
                                    <input
                                        type='text'
                                        value={newTask.title}
                                        onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                        className='w-full px-3 py-2 bg-[#050A14]/50 border border-cyan-500/20 rounded-lg text-cyan-300/80 focus:border-cyan-500/40 focus:outline-none transition-colors duration-300'
                                        placeholder='Enter task title'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-cyan-300/60 mb-1'>Description</label>
                                    <textarea
                                        value={newTask.description}
                                        onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                                        className='w-full px-3 py-2 bg-[#050A14]/50 border border-cyan-500/20 rounded-lg text-cyan-300/80 focus:border-cyan-500/40 focus:outline-none transition-colors duration-300'
                                        placeholder='Enter task description'
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-cyan-300/60 mb-1'>Due Date</label>
                                    <input
                                        type='date'
                                        value={newTask.dueDate}
                                        onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                                        className='w-full px-3 py-2 bg-[#050A14]/50 border border-cyan-500/20 rounded-lg text-cyan-300/80 focus:border-cyan-500/40 focus:outline-none transition-colors duration-300'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-cyan-300/60 mb-1'>Priority</label>
                                    <select
                                        value={newTask.priority}
                                        onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                                        className='w-full px-3 py-2 bg-[#050A14]/50 border border-cyan-500/20 rounded-lg text-cyan-300/80 focus:border-cyan-500/40 focus:outline-none transition-colors duration-300'
                                    >
                                        <option value='low'>Low</option>
                                        <option value='medium'>Medium</option>
                                        <option value='high'>High</option>
                                    </select>
                                </div>
                                <div className='flex justify-end gap-3'>
                                    <button 
                                        onClick={() => setIsAddingTask(false)}
                                        className='px-4 py-2 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm group'
                                    >
                                        <span className='text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300'>
                                            Cancel
                                        </span>
                                    </button>
                                    <button 
                                        onClick={handleAddTask}
                                        className='px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm group'
                                    >
                                        <span className='text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300'>
                                            Add Task
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TaskList