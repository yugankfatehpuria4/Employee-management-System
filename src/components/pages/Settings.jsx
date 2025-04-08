import React, { useState, useEffect } from 'react';
import { FaBell, FaPalette, FaUser, FaLock, FaMoon, FaSun, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Settings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(() => {
    // Load settings from localStorage on initial render
    const savedSettings = localStorage.getItem('userSettings');
    return savedSettings ? JSON.parse(savedSettings) : {
      notifications: true,
      darkMode: true,
      emailUpdates: false,
      twoFactorAuth: false,
      theme: 'cyberpunk'
    };
  });

  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleThemeChange = (theme) => {
    setSettings(prev => ({
      ...prev,
      theme
    }));
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('userSettings', JSON.stringify(settings));
    setShowSaveSuccess(true);
    setTimeout(() => {
      setShowSaveSuccess(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B1121] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-cyan-50 mb-2">Settings</h1>
          <p className="text-cyan-300/70 text-sm">Customize your workspace preferences</p>
        </div>

        <div className="space-y-6">
          {/* Notifications Section */}
          <div className="bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <FaBell className="text-lg" />
              </span>
              <h2 className="text-lg font-semibold text-cyan-50">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/10">
                <div>
                  <h3 className="text-cyan-50 font-medium mb-1">Push Notifications</h3>
                  <p className="text-cyan-300/70 text-sm">Receive notifications about task updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.notifications}
                    onChange={() => handleToggle('notifications')}
                  />
                  <div className="w-11 h-6 bg-cyan-950/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyan-400 after:border-cyan-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/10">
                <div>
                  <h3 className="text-cyan-50 font-medium mb-1">Email Updates</h3>
                  <p className="text-cyan-300/70 text-sm">Get daily email summaries</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.emailUpdates}
                    onChange={() => handleToggle('emailUpdates')}
                  />
                  <div className="w-11 h-6 bg-cyan-950/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyan-400 after:border-cyan-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <FaPalette className="text-lg" />
              </span>
              <h2 className="text-lg font-semibold text-cyan-50">Appearance</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/10">
                <div>
                  <h3 className="text-cyan-50 font-medium mb-1">Dark Mode</h3>
                  <p className="text-cyan-300/70 text-sm">Toggle between light and dark theme</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.darkMode}
                    onChange={() => handleToggle('darkMode')}
                  />
                  <div className="w-11 h-6 bg-cyan-950/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyan-400 after:border-cyan-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20">
                    <span className="absolute inset-0 flex items-center justify-between px-1">
                      <FaSun className="text-[10px] text-cyan-300/70" />
                      <FaMoon className="text-[10px] text-cyan-300/70" />
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-[#0B1121]/80 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <FaLock className="text-lg" />
              </span>
              <h2 className="text-lg font-semibold text-cyan-50">Security</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/10">
                <div>
                  <h3 className="text-cyan-50 font-medium mb-1">Two-Factor Authentication</h3>
                  <p className="text-cyan-300/70 text-sm">Add an extra layer of security to your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.twoFactorAuth}
                    onChange={() => handleToggle('twoFactorAuth')}
                  />
                  <div className="w-11 h-6 bg-cyan-950/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyan-400 after:border-cyan-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500/20"></div>
                </label>
              </div>

              {settings.twoFactorAuth && (
                <div className="p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <FaShieldAlt className="text-cyan-400" />
                    <span className="text-cyan-50 font-medium">2FA is enabled</span>
                  </div>
                  <p className="text-cyan-300/70 text-sm mb-3">
                    You'll be asked to enter a verification code when signing in from a new device.
                  </p>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    Configure 2FA settings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg shadow-cyan-500/20"
          >
            {showSaveSuccess ? (
              <>
                <FaCheckCircle className="text-sm" />
                Saved Successfully
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 