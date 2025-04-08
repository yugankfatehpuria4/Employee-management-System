import React, { useState, useEffect } from 'react';
import { FaCircle, FaEnvelope, FaPhone, FaBuilding, FaTrash, FaUserPlus } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import AddTeamMember from './AddTeamMember';
import './Pages.css';

const INITIAL_TEAM_MEMBERS = [
  { 
    id: 1, 
    name: 'John Doe', 
    role: 'Project Manager', 
    status: 'online', 
    tasks: 8,
    email: 'john@example.com',
    phone: '+1 234 567 890',
    department: 'Development'
  },
  { id: 2, name: 'Jane Smith', role: 'Developer', status: 'offline', tasks: 5, email: 'jane@example.com', phone: '+1 234 567 891', department: 'Development' },
  { id: 3, name: 'Mike Johnson', role: 'Designer', status: 'online', tasks: 6, email: 'mike@example.com', phone: '+1 234 567 892', department: 'Design' },
  { id: 4, name: 'Sarah Wilson', role: 'Developer', status: 'online', tasks: 7, email: 'sarah@example.com', phone: '+1 234 567 893', department: 'Development' },
  { id: 5, name: 'Tom Brown', role: 'QA Engineer', status: 'offline', tasks: 4, email: 'tom@example.com', phone: '+1 234 567 894', department: 'QA' },
];

const Team = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchParams] = useSearchParams();
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [teamMembers, setTeamMembers] = useState(() => {
    const savedMembers = localStorage.getItem('teamMembers');
    return savedMembers ? JSON.parse(savedMembers) : INITIAL_TEAM_MEMBERS;
  });

  // Save to localStorage whenever teamMembers changes
  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  useEffect(() => {
    const searchQuery = searchParams.get('search')?.toLowerCase();
    if (searchQuery) {
      const filtered = teamMembers.filter(member => 
        member.name.toLowerCase().includes(searchQuery) ||
        member.role.toLowerCase().includes(searchQuery) ||
        member.department?.toLowerCase().includes(searchQuery)
      );
      setFilteredMembers(filtered);
    } else {
      setFilteredMembers(teamMembers);
    }
  }, [searchParams, teamMembers]);

  const handleAddMember = (newMember) => {
    // Generate a new unique ID
    const maxId = Math.max(...teamMembers.map(member => member.id), 0);
    const memberWithId = {
      ...newMember,
      id: maxId + 1,
    };
    setTeamMembers([...teamMembers, memberWithId]);
    setShowAddForm(false);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      setTeamMembers(teamMembers.filter(member => member.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1121] p-4 relative">
      <div className="max-w-7xl mx-auto pb-24">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-cyan-50">Team Members</h1>
          {searchParams.get('search') && (
            <p className="text-cyan-400 mt-2">
              Search results for: "{searchParams.get('search')}"
              {filteredMembers.length === 0 && (
                <span className="text-rose-400 ml-2">No matches found</span>
              )}
            </p>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMembers.map(member => (
            <div 
              key={member.id} 
              className="bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Member Header with Actions */}
              <div className="flex items-start gap-3 mb-3 relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-semibold text-sm shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-cyan-50 mb-0.5 truncate">{member.name}</h3>
                  <p className="text-cyan-400/80 text-xs">{member.role}</p>
                </div>
                <button
                  onClick={() => handleDeleteMember(member.id)}
                  className="text-rose-400/40 hover:text-rose-400 transition-colors duration-200"
                  title="Delete member"
                >
                  <FaTrash className="text-m" />
                </button>
              </div>

              {/* Status and Stats Row */}
              <div className="flex items-center justify-between mb-3 bg-cyan-950/30 rounded-lg px-3 py-2 border border-cyan-500/10">
                <div className="flex items-center gap-2">
                  <FaCircle className={`text-[8px] ${member.status === 'online' ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className="text-xs text-cyan-300 capitalize">{member.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-cyan-300/70">Tasks:</span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-950/50 text-cyan-400 font-medium text-xs border border-cyan-500/20 min-w-[24px] text-center">
                    {member.tasks}
                  </span>
                </div>
              </div>

              {/* Member Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-300/70 bg-cyan-950/20 px-3 py-1.5 rounded-lg group-hover:bg-cyan-950/30 transition-all duration-200">
                  <FaEnvelope className="text-[10px]" />
                  <span className="text-xs truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300/70 bg-cyan-950/20 px-3 py-1.5 rounded-lg group-hover:bg-cyan-950/30 transition-all duration-200">
                  <FaPhone className="text-[10px]" />
                  <span className="text-xs truncate">{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300/70 bg-cyan-950/20 px-3 py-1.5 rounded-lg group-hover:bg-cyan-950/30 transition-all duration-200">
                  <FaBuilding className="text-[10px]" />
                  <span className="text-xs truncate">{member.department}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Add Button */}
        <div className="fixed bottom-6 right-13">
          <button
            onClick={() => setShowAddForm(true)}
            className="p-3 bg-[#0B1121] text-cyan-400 rounded-xl hover:text-cyan-300 transition-all duration-300 flex items-center gap-2 group border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-xl hover:bg-cyan-950/50"
          >
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
              <FaUserPlus className="text-sm" />
            </span>
            <span className="font-medium text-xs">Add Member</span>
          </button>
        </div>
      </div>

      {/* Add Member Form Modal */}
      {showAddForm && (
        <AddTeamMember
          onClose={() => setShowAddForm(false)}
          onAdd={handleAddMember}
        />
      )}
    </div>
  );
};

export default Team; 