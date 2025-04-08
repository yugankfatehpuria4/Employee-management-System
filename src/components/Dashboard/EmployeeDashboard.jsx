import React, { useState, useEffect } from 'react'
import { FaTasks, FaCheckCircle, FaCog, FaTrophy, FaCalendarAlt, FaBell, FaUserCircle, 
         FaChartLine, FaRocket, FaSignOutAlt, FaChevronLeft, FaChevronRight, FaUsers, FaStar, FaTrash, FaPlus, FaGift, FaPalette, FaLock, FaSave } from 'react-icons/fa'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { updateEmployeeData } from '../../utils/localStorage'

// Import components for each section
const Profile = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [tempData, setTempData] = useState({
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    email: data?.email || '',
    phone: data?.phone || '',
    department: data?.department || '',
    joinDate: data?.joinDate || '',
    skills: data?.skills || []
  })

  const handleEditClick = () => {
    setIsEditing(true)
    // Fill in temporary details if they're empty
    setTempData(prev => ({
      firstName: prev.firstName || 'John',
      lastName: prev.lastName || 'Doe',
      email: prev.email || 'john.doe@company.com',
      phone: prev.phone || '+1 (555) 123-4567',
      department: prev.department || 'Engineering',
      joinDate: prev.joinDate || '2023-01-15',
      skills: prev.skills.length ? prev.skills : ['React', 'Node.js', 'TypeScript', 'UI/UX Design']
    }))
  }

  const handleSave = () => {
    // Update localStorage with the new data
    const updatedEmployee = updateEmployeeData(data.id, {
      firstName: tempData.firstName,
      lastName: tempData.lastName,
      email: tempData.email,
      phone: tempData.phone,
      department: tempData.department,
      joinDate: tempData.joinDate,
      skills: tempData.skills
    })

    // Update the parent component's data
    if (typeof onUpdate === 'function') {
      onUpdate(updatedEmployee)
    }

    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTempData({
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      email: data?.email || '',
      phone: data?.phone || '',
      department: data?.department || '',
      joinDate: data?.joinDate || '',
      skills: data?.skills || []
    })
  }

  return (
    <div className='space-y-6 relative min-h-screen'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
      <div className='absolute inset-0 bg-gradient-to-br from-[#0B1121]/95 via-[#1A2333]/90 to-[#0B1121]/95 backdrop-blur-sm'></div>
      
      {/* Content */}
      <div className='relative z-10 p-8'>
        {/* Header Section */}
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Employee Profile
            </h2>
            <p className='text-cyan-300/60 mt-1'>Welcome to your digital workspace</p>
          </div>
          {!isEditing ? (
            <button 
              onClick={handleEditClick}
              className='group px-6 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm'
            >
              <span className='group-hover:scale-105 transition-transform duration-300 flex items-center gap-2'>
                <FaUserCircle className='text-lg' />
                Edit Profile
              </span>
            </button>
          ) : (
            <div className='flex gap-3'>
              <button 
                onClick={handleCancel}
                className='px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-300 shadow-lg shadow-red-500/5 hover:shadow-red-500/20 backdrop-blur-sm'
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className='px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm'
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Profile Header */}
        <div className='bg-gradient-to-r from-[#1A2333]/80 to-[#0B1121]/80 rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl relative overflow-hidden mb-8'>
          {/* Animated Background Effects */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.1),transparent_50%)] animate-pulse'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse delay-1000'></div>
          
          <div className='relative z-10 flex items-center gap-8'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
              <div className='relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white/10 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300'>
                <span className='text-5xl font-bold text-white'>{tempData.firstName?.charAt(0) || 'U'}</span>
              </div>
            </div>
            <div className='flex-1'>
              {isEditing ? (
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-cyan-300/60 text-sm mb-2'>First Name</label>
                      <input 
                        type='text'
                        value={tempData.firstName}
                        onChange={(e) => setTempData(prev => ({ ...prev, firstName: e.target.value }))}
                        className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      />
                    </div>
                    <div>
                      <label className='block text-cyan-300/60 text-sm mb-2'>Last Name</label>
                      <input 
                        type='text'
                        value={tempData.lastName}
                        onChange={(e) => setTempData(prev => ({ ...prev, lastName: e.target.value }))}
                        className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className='text-3xl font-bold text-white mb-2'>{tempData.firstName} {tempData.lastName}</h3>
                  <p className='text-cyan-300/80 flex items-center gap-2 text-lg'>
                    <span className='w-2 h-2 rounded-full bg-cyan-400/60'></span>
                    {tempData.department || 'Employee'}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className='grid grid-cols-2 gap-8'>
          <div className='bg-gradient-to-r from-[#1A2333]/80 to-[#0B1121]/80 rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/5 backdrop-blur-xl'>
            <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-cyan-400/60'></span>
              Personal Information
            </h3>
            <div className='space-y-4'>
              {isEditing ? (
                <>
                  <div>
                    <label className='block text-cyan-300/60 text-sm mb-2'>Email</label>
                    <input 
                      type='email'
                      value={tempData.email}
                      onChange={(e) => setTempData(prev => ({ ...prev, email: e.target.value }))}
                      className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                    />
                  </div>
                  <div>
                    <label className='block text-cyan-300/60 text-sm mb-2'>Phone</label>
                    <input 
                      type='tel'
                      value={tempData.phone}
                      onChange={(e) => setTempData(prev => ({ ...prev, phone: e.target.value }))}
                      className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                    />
                  </div>
                  <div>
                    <label className='block text-cyan-300/60 text-sm mb-2'>Department</label>
                    <input 
                      type='text'
                      value={tempData.department}
                      onChange={(e) => setTempData(prev => ({ ...prev, department: e.target.value }))}
                      className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                    />
                  </div>
                  <div>
                    <label className='block text-cyan-300/60 text-sm mb-2'>Join Date</label>
                    <input 
                      type='date'
                      value={tempData.joinDate}
                      onChange={(e) => setTempData(prev => ({ ...prev, joinDate: e.target.value }))}
                      className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='group'>
                    <div className='text-cyan-300/60 text-sm flex items-center gap-2 mb-1'>
                      <FaUserCircle className='text-cyan-400' />
                      Email
                    </div>
                    <div className='text-white group-hover:text-cyan-300 transition-colors duration-300'>{tempData.email}</div>
                  </div>
                  <div className='group'>
                    <div className='text-cyan-300/60 text-sm flex items-center gap-2 mb-1'>
                      <FaUserCircle className='text-cyan-400' />
                      Phone
                    </div>
                    <div className='text-white group-hover:text-cyan-300 transition-colors duration-300'>{tempData.phone}</div>
                  </div>
                  <div className='group'>
                    <div className='text-cyan-300/60 text-sm flex items-center gap-2 mb-1'>
                      <FaUsers className='text-cyan-400' />
                      Department
                    </div>
                    <div className='text-white group-hover:text-cyan-300 transition-colors duration-300'>{tempData.department}</div>
                  </div>
                  <div className='group'>
                    <div className='text-cyan-300/60 text-sm flex items-center gap-2 mb-1'>
                      <FaCalendarAlt className='text-cyan-400' />
                      Join Date
                    </div>
                    <div className='text-white group-hover:text-cyan-300 transition-colors duration-300'>{tempData.joinDate}</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className='bg-gradient-to-r from-[#1A2333]/80 to-[#0B1121]/80 rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/5 backdrop-blur-xl'>
            <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-cyan-400/60'></span>
              Skills & Expertise
            </h3>
            {isEditing ? (
              <div className='space-y-4'>
                <div>
                  <label className='block text-cyan-300/60 text-sm mb-2'>Skills (comma separated)</label>
                  <input 
                    type='text'
                    value={tempData.skills.join(', ')}
                    onChange={(e) => setTempData(prev => ({ ...prev, skills: e.target.value.split(',').map(s => s.trim()) }))}
                    className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                  />
                </div>
              </div>
            ) : (
              <div className='flex flex-wrap gap-3'>
                {tempData.skills?.map((skill, index) => (
                  <div 
                    key={index} 
                    className='group px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 transition-all duration-300'
                  >
                    <span className='group-hover:scale-105 transition-transform duration-300'>{skill}</span>
                  </div>
                )) || <div className='text-white/60'>No skills listed</div>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [events, setEvents] = useState([])
  const [isAddingEvent, setIsAddingEvent] = useState(false)
  const [eventToDelete, setEventToDelete] = useState(null)
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    reminder: false,
    reminderTime: '15' // minutes before
  })

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateSelect = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(date)
    setIsAddingEvent(true)
    setNewEvent({
      title: '',
      description: '',
      startTime: '09:00',
      endTime: '10:00',
      reminder: false,
      reminderTime: '15'
    })
  }

  const handleAddEvent = () => {
    if (!selectedDate || !newEvent.title) return

    const event = {
      id: Date.now(),
      date: selectedDate,
      ...newEvent
    }

    setEvents([...events, event])
    setIsAddingEvent(false)
    setNewEvent({
      title: '',
      description: '',
      startTime: '09:00',
      endTime: '10:00',
      reminder: false,
      reminderTime: '15'
    })
  }

  const handleDeleteEvent = (eventId) => {
    setEventToDelete(eventId)
  }

  const confirmDeleteEvent = () => {
    if (eventToDelete) {
      setEvents(events.filter(event => event.id !== eventToDelete))
      setEventToDelete(null)
    }
  }

  const cancelDeleteEvent = () => {
    setEventToDelete(null)
  }

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    )
  }

  return (
    <div className='space-y-6 relative min-h-screen'>
      {/* Enhanced Dark Background Effects */}
      <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
      <div className='absolute inset-0 bg-gradient-to-br from-[#050A14]/95 via-[#0A1428]/90 to-[#050A14]/95 backdrop-blur-sm'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)] animate-pulse'></div>
      <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      
      <div className='relative z-10'>
        {/* Enhanced Header Section */}
        <div className='flex justify-between items-center mb-8 p-4 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-2xl border border-cyan-500/10 shadow-lg shadow-cyan-500/5 backdrop-blur-xl'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/10 group hover:shadow-cyan-500/20 transition-all duration-300'>
              <FaCalendarAlt className='text-cyan-400/80 text-xl group-hover:text-cyan-400 transition-colors duration-300' />
            </div>
            <div>
              <h2 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Calendar
              </h2>
              <p className='text-cyan-300/40'>Manage your schedule and events</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <button 
              onClick={handlePrevMonth}
              className='p-3 rounded-xl bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 group'
            >
              <FaChevronLeft className='text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300' />
            </button>
            <span className='text-2xl font-bold text-cyan-400/80'>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button 
              onClick={handleNextMonth}
              className='p-3 rounded-xl bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 group'
            >
              <FaChevronRight className='text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300' />
            </button>
          </div>
        </div>

        {/* Enhanced Calendar Grid */}
        <div className='grid grid-cols-7 gap-2 p-4 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-2xl border border-cyan-500/10 shadow-lg shadow-cyan-500/5 backdrop-blur-xl'>
          {/* Day Headers */}
          {dayNames.map(day => (
            <div key={day} className='text-center text-cyan-300/40 font-medium py-3 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors duration-300'>
              {day}
            </div>
          ))}

          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className='h-24'></div>
          ))}

          {/* Calendar Days */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            const isToday = new Date().toDateString() === date.toDateString()
            const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString()
            const dayEvents = getEventsForDate(date)

            return (
              <div
                key={day}
                onClick={() => handleDateSelect(day)}
                className={`h-24 p-2 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                  isSelected 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/10' 
                    : isToday 
                      ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20' 
                      : 'hover:bg-cyan-500/5 border border-cyan-500/10'
                }`}
              >
                {/* Enhanced background effects */}
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
                <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                <div className={`text-lg font-medium relative z-10 ${
                  isSelected ? 'text-cyan-400' : 'text-cyan-400/80'
                }`}>
                  {day}
                </div>
                
                {/* Events for the day */}
                <div className='mt-1 space-y-1 relative z-10'>
                  {dayEvents.map(event => (
                    <div 
                      key={event.id}
                      className='text-xs bg-cyan-500/10 text-cyan-300/80 rounded-lg px-2 py-1 truncate group-hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 transform'
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Event Details/Add Event Form */}
        {selectedDate && (
          <div className='mt-8 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 rounded-2xl p-6 border border-cyan-500/10 shadow-lg shadow-cyan-500/5 relative overflow-hidden'>
            {/* Background Effects */}
            <div className='absolute inset-0 bg-[url("/images/circuit-pattern.svg")] bg-cover bg-center bg-no-repeat opacity-5'></div>
            <div className='absolute inset-0 bg-gradient-to-br from-[#050A14]/95 via-[#0A1428]/90 to-[#050A14]/95 backdrop-blur-sm'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)] animate-pulse'></div>
            <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px]'></div>
            
            <div className='relative z-10'>
              <div className='flex justify-between items-center mb-6'>
                <div>
                  <h3 className='text-2xl font-bold text-cyan-400/80'>
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </h3>
                  <p className='text-cyan-300/40'>Schedule your events and tasks</p>
                </div>
                <button 
                  onClick={() => setIsAddingEvent(true)}
                  className='px-4 py-2 bg-gradient-to-r from-[#0A1428]/80 to-[#050A14]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm group'
                >
                  <span className='flex items-center gap-2 text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300'>
                    <FaPlus className='text-sm' />
                    Add Event
                  </span>
                </button>
              </div>
              
              {isAddingEvent ? (
                <div className='space-y-4'>
                  <div>
                    <label className='block text-cyan-300/60 text-sm mb-2'>Event Title</label>
                    <input 
                      type='text'
                      value={newEvent.title}
                      onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                      className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      placeholder='Enter event title'
                    />
                  </div>
                  <div>
                    <label className='block text-cyan-300/60 text-sm mb-2'>Description</label>
                    <textarea 
                      value={newEvent.description}
                      onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                      className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      placeholder='Enter event description'
                      rows={3}
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-cyan-300/60 text-sm mb-2'>Start Time</label>
                      <input 
                        type='time'
                        value={newEvent.startTime}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, startTime: e.target.value }))}
                        className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      />
                    </div>
                    <div>
                      <label className='block text-cyan-300/60 text-sm mb-2'>End Time</label>
                      <input 
                        type='time'
                        value={newEvent.endTime}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, endTime: e.target.value }))}
                        className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      />
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <label className='flex items-center gap-2 text-cyan-300/60'>
                      <input 
                        type='checkbox'
                        checked={newEvent.reminder}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, reminder: e.target.checked }))}
                        className='rounded border-cyan-500/20 text-cyan-400 focus:ring-cyan-400'
                      />
                      Set Reminder
                    </label>
                    {newEvent.reminder && (
                      <select 
                        value={newEvent.reminderTime}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, reminderTime: e.target.value }))}
                        className='bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors'
                      >
                        <option value='5'>5 minutes before</option>
                        <option value='15'>15 minutes before</option>
                        <option value='30'>30 minutes before</option>
                        <option value='60'>1 hour before</option>
                      </select>
                    )}
                  </div>
                  <div className='flex justify-end gap-3'>
                    <button 
                      onClick={() => setIsAddingEvent(false)}
                      className='px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-300 shadow-lg shadow-red-500/5 hover:shadow-red-500/20 backdrop-blur-sm'
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleAddEvent}
                      className='px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 backdrop-blur-sm'
                    >
                      Add Event
                    </button>
                  </div>
                </div>
              ) : (
                <div className='space-y-4'>
                  {getEventsForDate(selectedDate).length > 0 ? (
                    getEventsForDate(selectedDate).map(event => (
                      <div 
                        key={event.id}
                        className='bg-[#050A14]/80 rounded-xl p-4 border border-cyan-500/10 relative group hover:border-cyan-500/30 transition-all duration-300'
                      >
                        {/* Event content */}
                        <div className='flex justify-between items-start'>
                          <div>
                            <h4 className='text-white font-medium'>{event.title}</h4>
                            <p className='text-cyan-300/60 text-sm mt-1'>{event.description}</p>
                            <div className='flex items-center gap-4 mt-2 text-sm'>
                              <span className='text-cyan-300/60'>
                                {event.startTime} - {event.endTime}
                              </span>
                              {event.reminder && (
                                <span className='text-cyan-400 flex items-center gap-1'>
                                  <FaBell className='text-xs' />
                                  {event.reminderTime} min before
                                </span>
                              )}
                            </div>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDeleteEvent(event.id)
                            }}
                            className='text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100'
                          >
                            <FaTrash className='text-sm' />
                          </button>
                        </div>

                        {/* Delete Confirmation Overlay */}
                        {eventToDelete === event.id && (
                          <div className='absolute inset-0 bg-[#0B1121]/95 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
                            <div className='text-center'>
                              <h4 className='text-white font-medium mb-2'>Delete Event</h4>
                              <p className='text-cyan-300/60 text-sm'>Are you sure you want to delete this event?</p>
                            </div>
                            <div className='flex gap-3'>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  cancelDeleteEvent()
                                }}
                                className='px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300'
                              >
                                Cancel
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  confirmDeleteEvent()
                                }}
                                className='px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-300'
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className='text-center py-8 text-cyan-300/40'>
                      <FaCalendarAlt className='text-4xl mx-auto mb-4 text-cyan-400/20' />
                      <p>No events scheduled for this day</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Early Bird',
      description: 'Complete 5 tasks before 9 AM',
      progress: 3,
      total: 5,
      reward: '500 Points',
      icon: '🌅'
    },
    {
      id: 2,
      title: 'Task Master',
      description: 'Complete 20 tasks in a week',
      progress: 15,
      total: 20,
      reward: '1000 Points',
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Perfect Week',
      description: 'Complete all tasks for 7 days straight',
      progress: 5,
      total: 7,
      reward: '2000 Points',
      icon: '🌟'
    }
  ]

  return (
    <div className='bg-[#0B1121] relative overflow-hidden'>
      {/* Enhanced Background Effects */}
      <div className='absolute inset-0 bg-[url("/circuit-pattern.png")] opacity-5'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-400/5'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
      <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center gap-4'>
            <div className='p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
              <FaTrophy className='text-cyan-400 text-2xl' />
            </div>
            <div>
              <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 text-transparent bg-clip-text'>
                Achievements
              </h1>
              <p className='text-cyan-400/60 mt-1'>Unlock rewards and track your progress</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='text-right'>
              <p className='text-cyan-400/60 text-sm'>Total Points</p>
              <p className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 text-transparent bg-clip-text'>
                2,500
              </p>
            </div>
            <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 flex items-center justify-center'>
              <FaStar className='text-cyan-400 text-xl' />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className='group relative bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden'
            >
              {/* Animated Background Effects */}
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
              
              {/* Achievement Icon */}
              <div className='absolute top-4 right-4 text-4xl transform group-hover:scale-110 transition-transform duration-300'>
                {achievement.icon}
              </div>
              
              {/* Achievement Content */}
              <div className='relative'>
                <h2 className='text-xl font-semibold text-cyan-50 mb-2 group-hover:text-cyan-300 transition-colors duration-300'>
                  {achievement.title}
                </h2>
                <p className='text-cyan-300/80 text-sm mb-4 leading-relaxed'>
                  {achievement.description}
                </p>
                
                {/* Progress Bar */}
                <div className='mb-3'>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-cyan-400/80'>Progress</span>
                    <span className='text-cyan-400'>{achievement.progress}/{achievement.total}</span>
                  </div>
                  <div className='h-2 bg-cyan-500/10 rounded-full overflow-hidden'>
                    <div 
                      className='h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-500'
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Reward */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <FaGift className='text-cyan-400' />
                    <span className='text-cyan-400/80 text-sm'>Reward:</span>
                    <span className='text-cyan-400 font-medium'>{achievement.reward}</span>
                  </div>
                  <div className='text-cyan-400/60 text-sm'>
                    {achievement.progress === achievement.total ? 'Completed!' : 'In Progress'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaTrophy className='text-cyan-400 text-xl' />
              </div>
              <div>
                <p className='text-cyan-400/60 text-sm'>Achievements Unlocked</p>
                <p className='text-xl font-bold text-cyan-400'>12/20</p>
              </div>
            </div>
          </div>
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaStar className='text-cyan-400 text-xl' />
              </div>
              <div>
                <p className='text-cyan-400/60 text-sm'>Current Streak</p>
                <p className='text-xl font-bold text-cyan-400'>5 Days</p>
              </div>
            </div>
          </div>
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaChartLine className='text-cyan-400 text-xl' />
              </div>
              <div>
                <p className='text-cyan-400/60 text-sm'>Level Progress</p>
                <p className='text-xl font-bold text-cyan-400'>Level 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Settings = () => {
  const [notifications, setNotifications] = useState(() => {
    // Load saved settings from localStorage or use defaults
    const savedSettings = localStorage.getItem('userSettings')
    return savedSettings 
      ? JSON.parse(savedSettings) 
      : {
          email: true,
          push: false,
          reminders: true,
          activity: false,
          dataCollection: true
        }
  })

  const [isSaved, setIsSaved] = useState(true) // Start as true since we load saved settings

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
    setIsSaved(false)
  }

  const handleSave = () => {
    // Save settings to localStorage
    localStorage.setItem('userSettings', JSON.stringify(notifications))
    setIsSaved(true)
  }

  // Load settings when component mounts
  useEffect(() => {
    const savedSettings = localStorage.getItem('userSettings')
    if (savedSettings) {
      setNotifications(JSON.parse(savedSettings))
    }
  }, [])

  return (
    <div className='bg-[#0B1121] relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-[url("/circuit-pattern.png")] opacity-5'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-400/5'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)]'></div>
      <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <div className='flex items-center gap-4'>
            <div className='p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
              <FaCog className='text-cyan-400 text-2xl' />
            </div>
            <div>
              <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 text-transparent bg-clip-text'>
                Settings
              </h1>
              <p className='text-cyan-400/60 mt-1'>Customize your workspace and preferences</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {/* Account Settings */}
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaUserCircle className='text-cyan-400 text-xl' />
              </div>
              <h2 className='text-xl font-semibold text-cyan-50'>Account Settings</h2>
            </div>
            
            <div className='space-y-3'>
              <div>
                <label className='block text-cyan-400/80 text-sm mb-1'>Email Address</label>
                <input 
                  type='email'
                  className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-cyan-50 focus:outline-none focus:border-cyan-400/40 transition-colors'
                  placeholder='your.email@company.com'
                />
              </div>
              <div>
                <label className='block text-cyan-400/80 text-sm mb-1'>Phone Number</label>
                <input 
                  type='tel'
                  className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-cyan-50 focus:outline-none focus:border-cyan-400/40 transition-colors'
                  placeholder='+1 (555) 000-0000'
                />
              </div>
              <div>
                <label className='block text-cyan-400/80 text-sm mb-1'>Password</label>
                <input 
                  type='password'
                  className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-cyan-50 focus:outline-none focus:border-cyan-400/40 transition-colors'
                  placeholder='••••••••'
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaBell className='text-cyan-400 text-xl' />
              </div>
              <h2 className='text-xl font-semibold text-cyan-50'>Notification Settings</h2>
            </div>
            
            <div className='space-y-3'>
              <div className='group relative bg-[#0B1121]/80 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 p-3'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'></div>
                <div className='relative flex items-center justify-between'>
                  <div>
                    <h3 className='text-cyan-50 font-medium'>Email Notifications</h3>
                    <p className='text-cyan-400/60 text-sm'>Receive email updates about your tasks</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('email')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${notifications.email ? 'bg-cyan-500/30' : 'bg-cyan-500/10'}`}
                  >
                    <div className={`absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full top-0.5 transition-all duration-300 ${notifications.email ? 'left-6' : 'left-0.5'} shadow-lg shadow-cyan-500/20`}></div>
                  </button>
                </div>
              </div>

              <div className='group relative bg-[#0B1121]/80 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 p-3'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'></div>
                <div className='relative flex items-center justify-between'>
                  <div>
                    <h3 className='text-cyan-50 font-medium'>Push Notifications</h3>
                    <p className='text-cyan-400/60 text-sm'>Get push notifications in your browser</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('push')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${notifications.push ? 'bg-cyan-500/30' : 'bg-cyan-500/10'}`}
                  >
                    <div className={`absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full top-0.5 transition-all duration-300 ${notifications.push ? 'left-6' : 'left-0.5'} shadow-lg shadow-cyan-500/20`}></div>
                  </button>
                </div>
              </div>

              <div className='group relative bg-[#0B1121]/80 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 p-3'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'></div>
                <div className='relative flex items-center justify-between'>
                  <div>
                    <h3 className='text-cyan-50 font-medium'>Task Reminders</h3>
                    <p className='text-cyan-400/60 text-sm'>Get reminders for upcoming tasks</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('reminders')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${notifications.reminders ? 'bg-cyan-500/30' : 'bg-cyan-500/10'}`}
                  >
                    <div className={`absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full top-0.5 transition-all duration-300 ${notifications.reminders ? 'left-6' : 'left-0.5'} shadow-lg shadow-cyan-500/20`}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaPalette className='text-cyan-400 text-xl' />
              </div>
              <h2 className='text-xl font-semibold text-cyan-50'>Preferences</h2>
            </div>
            
            <div className='space-y-3'>
              <div>
                <label className='block text-cyan-400/80 text-sm mb-1'>Theme</label>
                <select className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-cyan-50 focus:outline-none focus:border-cyan-400/40 transition-colors'>
                  <option value='dark'>Dark Theme</option>
                  <option value='light'>Light Theme</option>
                  <option value='system'>System Default</option>
                </select>
              </div>
              <div>
                <label className='block text-cyan-400/80 text-sm mb-1'>Language</label>
                <select className='w-full bg-[#0B1121]/80 border border-cyan-500/20 rounded-lg px-4 py-2 text-cyan-50 focus:outline-none focus:border-cyan-400/40 transition-colors'>
                  <option value='en'>English</option>
                  <option value='es'>Spanish</option>
                  <option value='fr'>French</option>
                </select>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className='bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20'>
                <FaLock className='text-cyan-400 text-xl' />
              </div>
              <h2 className='text-xl font-semibold text-cyan-50'>Privacy Settings</h2>
            </div>
            
            <div className='space-y-3'>
              <div className='group relative bg-[#0B1121]/80 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 p-3'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'></div>
                <div className='relative flex items-center justify-between'>
                  <div>
                    <h3 className='text-cyan-50 font-medium'>Activity Sharing</h3>
                    <p className='text-cyan-400/60 text-sm'>Share your activity with team members</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('activity')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${notifications.activity ? 'bg-cyan-500/30' : 'bg-cyan-500/10'}`}
                  >
                    <div className={`absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full top-0.5 transition-all duration-300 ${notifications.activity ? 'left-6' : 'left-0.5'} shadow-lg shadow-cyan-500/20`}></div>
                  </button>
                </div>
              </div>

              <div className='group relative bg-[#0B1121]/80 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 p-3'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'></div>
                <div className='relative flex items-center justify-between'>
                  <div>
                    <h3 className='text-cyan-50 font-medium'>Data Collection</h3>
                    <p className='text-cyan-400/60 text-sm'>Allow usage data collection</p>
                  </div>
                  <button 
                    onClick={() => handleToggle('dataCollection')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${notifications.dataCollection ? 'bg-cyan-500/30' : 'bg-cyan-500/10'}`}
                  >
                    <div className={`absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full top-0.5 transition-all duration-300 ${notifications.dataCollection ? 'left-6' : 'left-0.5'} shadow-lg shadow-cyan-500/20`}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className='mt-6 flex justify-end'>
          <button 
            onClick={handleSave}
            className={`group relative px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg overflow-hidden ${
              isSaved 
                ? 'bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 shadow-emerald-500/20' 
                : 'bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 shadow-cyan-500/20'
            }`}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0'></div>
            <span className='flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 relative z-10'>
              {isSaved ? (
                <>
                  <FaCheckCircle className='text-lg' />
                  Saved
                </>
              ) : (
                <>
                  <FaSave className='text-lg' />
                  Save Changes
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

const Tasks = ({ data }) => (
  <div className='space-y-6'>
    <div className='mb-8'>
      <h2 className='text-xl font-bold text-white mb-6'>My Tasks</h2>
      <TaskListNumbers data={data} />
    </div>
    <div className='mt-8'>
      <h2 className='text-xl font-bold text-white mb-6'>Task List</h2>
      <TaskList data={data} />
    </div>
  </div>
)

const EmployeeDashboard = (props) => {
  const [activeTab, setActiveTab] = useState('tasks')
  const [userData, setUserData] = useState(props.data)

  const handleProfileUpdate = (updatedData) => {
    setUserData(updatedData)
    if (typeof props.onUpdate === 'function') {
      props.onUpdate(updatedData)
    }
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return <Profile data={userData} onUpdate={handleProfileUpdate} />
      case 'tasks':
        return <Tasks data={userData} />
      case 'calendar':
        return <Calendar />
      case 'achievements':
        return <Achievements />
      case 'settings':
        return <Settings />
      default:
        return <Tasks data={userData} />
    }
  }

  const NavLink = ({ id, icon: Icon, label, count }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 w-full text-white/90 hover:bg-cyan-500/5 rounded-xl p-3 transition-all duration-300 ${
        activeTab === id ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10' : ''
      }`}
    >
      <Icon className={`text-xl ${activeTab === id ? 'text-cyan-400' : ''}`} />
      <span className={`${activeTab === id ? 'text-cyan-400' : ''}`}>{label}</span>
      {count && (
        <span className='ml-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white text-sm px-2 py-0.5 rounded-full border border-cyan-500/30'>
          {count}
        </span>
      )}
    </button>
  )

  return (
    <div className='flex min-h-screen bg-[#0B1121]'>
      {/* Sidebar */}
      <div className='w-64 bg-[#1A2333]/50 min-h-screen p-6 backdrop-blur-xl border-r border-cyan-500/20'>
        {/* Logo */}
        <div className='flex items-center gap-2 mb-8'>
          <div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20'>
            <span className='text-white font-bold text-xl'>E</span>
          </div>
          <h1 className='text-white text-xl font-bold tracking-wider'>EMS</h1>
        </div>

        {/* Navigation Links */}
        <nav className='space-y-2'>
          <NavLink id="profile" icon={FaUserCircle} label="Profile" />
          <NavLink id="tasks" icon={FaTasks} label="My Tasks" count={userData?.taskCounts?.active || 0} />
          <NavLink id="calendar" icon={FaCalendarAlt} label="Calendar" />
          <NavLink id="achievements" icon={FaTrophy} label="Achievements" />
          <NavLink id="settings" icon={FaCog} label="Settings" />
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-2xl font-bold text-white'>Welcome back, {userData?.firstName || 'User'}</h1>
            <p className='text-cyan-300/80'>Here's your workspace overview</p>
          </div>
          <div className='flex items-center gap-4'>
            <button 
              onClick={() => props.changeUser('')}
              className='group relative px-6 py-3 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all duration-300 shadow-lg shadow-red-500/5 hover:shadow-red-500/20 backdrop-blur-sm flex items-center gap-3 overflow-hidden'
              title="Logout"
            >
              {/* Animated background effect */}
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.2),transparent_70%)] animate-pulse'></div>
              {/* Glowing border effect */}
              <div className='absolute inset-0 border border-red-500/30 rounded-xl group-hover:border-red-400/50 transition-colors duration-300'></div>
              {/* Content */}
              <FaSignOutAlt className='text-lg group-hover:scale-110 transition-transform duration-300' />
              <span className='font-medium'>Logout</span>
              {/* Hover effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0'></div>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className='bg-[#1A2333]/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 shadow-lg shadow-cyan-500/5'>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard