import React, { useState } from 'react'
import { FaSearch, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // Navigate to team page with search query
      navigate(`/team?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  }

  return (
    <div className='header-container'>
      <div className='header-search'>
        <div className='search-box'>
          <FaSearch className='search-icon' />
          <input 
            type="text" 
            placeholder="Search employees..." 
            value={searchQuery}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      <div className='header-right'>
        <div className='header-profile'>
          <div className='profile-info'>
            <div className='profile-image'>
              {props.data?.profileImage ? (
                <img 
                  src={props.data.profileImage} 
                  alt="Profile" 
                  className='admin-profile-img'
                />
              ) : (
                <FaUserCircle />
              )}
            </div>
            <div className='profile-details'>
              <span className='profile-name'>{props.data?.firstName || 'Yugank'}</span>
              <span className='profile-role'>Administrator</span>
            </div>
          </div>
        </div>
        
        <button onClick={logOutUser} className='logout-button'>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Header