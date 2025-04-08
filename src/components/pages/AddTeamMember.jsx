import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AddTeamMember = ({ onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
        phone: '',
        department: '',
        status: 'online',
        tasks: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAdd({
                ...formData,
                tasks: parseInt(formData.tasks, 10)
            });
            onClose();
        }
    };

    const validateForm = () => {
        // Basic validation
        if (!formData.name.trim()) {
            alert('Please enter a name');
            return false;
        }
        if (!formData.role.trim()) {
            alert('Please enter a role');
            return false;
        }
        if (!formData.email.trim()) {
            alert('Please enter an email');
            return false;
        }
        if (!formData.department) {
            alert('Please select a department');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Phone validation (optional field)
        if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            alert('Please enter a valid phone number');
            return false;
        }

        // Tasks validation
        const tasksNum = parseInt(formData.tasks, 10);
        if (isNaN(tasksNum) || tasksNum < 0) {
            alert('Please enter a valid number of tasks (0 or more)');
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        const value = e.target.name === 'tasks' 
            ? Math.max(0, parseInt(e.target.value) || 0)
            : e.target.value;

        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#0B1121] w-full max-w-md rounded-2xl border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.1)] p-6 relative">
                {/* Close button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                    <FaTimes />
                </button>

                <h2 className="text-2xl font-semibold text-cyan-50 mb-6">Add Team Member</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-cyan-300 text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 placeholder-cyan-300/30 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                            placeholder="Enter full name"
                        />
                    </div>

                    <div>
                        <label className="block text-cyan-300 text-sm font-medium mb-2">
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                        >
                            <option value="">Select role</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="QA Engineer">QA Engineer</option>
                            <option value="Business Analyst">Business Analyst</option>
                            <option value="Product Manager">Product Manager</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-cyan-300 text-sm font-medium mb-2">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                                className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                            >
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-cyan-300 text-sm font-medium mb-2">
                                Tasks
                            </label>
                            <input
                                type="number"
                                name="tasks"
                                value={formData.tasks}
                                onChange={handleChange}
                                min="0"
                                className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                                placeholder="Number of tasks"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-cyan-300 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 placeholder-cyan-300/30 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                            placeholder="Enter email address"
                        />
                    </div>

                    <div>
                        <label className="block text-cyan-300 text-sm font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 placeholder-cyan-300/30 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                            placeholder="Enter phone number (optional)"
                        />
                    </div>

                    <div>
                        <label className="block text-cyan-300 text-sm font-medium mb-2">
                            Department
                        </label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-lg px-4 py-2.5 text-cyan-50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-200"
                        >
                            <option value="">Select department</option>
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="HR">HR</option>
                            <option value="QA">QA</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-medium py-2.5 px-4 rounded-lg hover:from-cyan-400 hover:to-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0B1121] transition-all duration-200 mt-6"
                    >
                        Add Team Member
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTeamMember; 