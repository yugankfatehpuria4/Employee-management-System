import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { FaTasks, FaCalendarAlt, FaUser, FaTag, FaFileAlt } from 'react-icons/fa'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })
        const data = userData
        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='task-management-section'>
            <div className='create-task-container'>
                <div className='create-task-header'>
                    <div className='header-icon'>
                        <FaTasks />
                    </div>
                    <h2>Create New Task</h2>
                </div>
                
                <form onSubmit={submitHandler} className='create-task-form'>
                    <div className='form-grid'>
                        <div className='form-group'>
                            <div className='input-container'>
                                <FaTasks className='field-icon' />
                                <input
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    type="text"
                                    placeholder='Task Title'
                                    className='futuristic-input'
                                />
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='input-container'>
                                <FaCalendarAlt className='field-icon' />
                                <input
                                    value={taskDate}
                                    onChange={(e) => setTaskDate(e.target.value)}
                                    type="date"
                                    className='futuristic-input'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='form-grid'>
                        <div className='form-group'>
                            <div className='input-container'>
                                <FaUser className='field-icon' />
                                <input
                                    value={asignTo}
                                    onChange={(e) => setAsignTo(e.target.value)}
                                    type="text"
                                    placeholder='Assign to'
                                    className='futuristic-input'
                                />
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='input-container'>
                                <FaTag className='field-icon' />
                                <input
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    type="text"
                                    placeholder='Category'
                                    className='futuristic-input'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <div className='input-container'>
                            <FaFileAlt className='field-icon textarea-icon' />
                            <textarea
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                placeholder='Task Description'
                                className='futuristic-textarea'
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className='create-task-btn mt-0'>
                        <span className='btn-content'>Create Task</span>
                        <span className='btn-glow'></span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask