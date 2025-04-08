import React, { useState, useEffect } from 'react';
import { FaChartLine, FaUsers, FaCheckCircle, FaClock, FaRocket, FaBell, FaServer, FaShieldAlt, FaNetworkWired, FaDatabase, FaBrain, FaChartBar, FaCode, FaUserAstronaut, FaProjectDiagram, FaLightbulb, FaCogs, FaChartPie } from 'react-icons/fa';
import './Pages.css';

const Analytics = () => {
  // Generate random numbers within a range
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomPercentage = () => `${getRandomNumber(50, 99)}%`;
  const getRandomTime = () => `${getRandomNumber(1, 5)}.${getRandomNumber(0, 9)} days`;

  // Generate random activity
  const activities = [
    "New task assigned to Team A",
    "Project milestone achieved",
    "System update completed",
    "Code review completed",
    "Deployment successful",
    "Meeting scheduled",
    "Bug fixed in production",
    "New feature released",
    "Performance optimization done",
    "Security patch applied"
  ];

  // Initial state
  const initialState = {
    stats: {
      weeklyTasks: getRandomNumber(20, 50),
      activeTeamMembers: getRandomNumber(8, 20),
      completionRate: getRandomPercentage(),
      avgCompletionTime: getRandomTime()
    },
    systemStatus: {
      serverLoad: getRandomNumber(50, 90),
      memoryUsage: getRandomNumber(30, 80)
    },
    recentActivities: Array(3).fill(null).map(() => ({
      type: ['green', 'blue', 'purple'][getRandomNumber(0, 2)],
      text: activities[getRandomNumber(0, activities.length - 1)]
    })),
    security: {
      lastScan: `${getRandomNumber(1, 12)} hours ago`,
      threatsBlocked: getRandomNumber(10, 99)
    },
    network: {
      uptime: `${getRandomNumber(97, 99)}.${getRandomNumber(0, 9)}%`,
      latency: `${getRandomNumber(30, 60)}ms`,
      bandwidth: `${getRandomNumber(500, 999)} Mbps`
    },
    resources: {
      cpu: getRandomNumber(40, 90),
      storage: getRandomNumber(50, 95)
    },
    teamVelocity: {
      sprintPoints: getRandomNumber(25, 45),
      burndown: getRandomNumber(40, 80)
    },
    systemMetrics: {
      uptime: `${getRandomNumber(98, 99)}.${getRandomNumber(0, 9)}%`,
      errorRate: `${getRandomNumber(0, 2)}.${getRandomNumber(0, 9)}%`
    }
  };

  // State management
  const [data, setData] = useState(initialState);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to refresh all data
  const refreshData = () => {
    setIsRefreshing(true);
    setData({
      stats: {
        weeklyTasks: getRandomNumber(20, 50),
        activeTeamMembers: getRandomNumber(8, 20),
        completionRate: getRandomPercentage(),
        avgCompletionTime: getRandomTime()
      },
      systemStatus: {
        serverLoad: getRandomNumber(50, 90),
        memoryUsage: getRandomNumber(30, 80)
      },
      recentActivities: Array(3).fill(null).map(() => ({
        type: ['green', 'blue', 'purple'][getRandomNumber(0, 2)],
        text: activities[getRandomNumber(0, activities.length - 1)]
      })),
      security: {
        lastScan: `${getRandomNumber(1, 12)} hours ago`,
        threatsBlocked: getRandomNumber(10, 99)
      },
      network: {
        uptime: `${getRandomNumber(97, 99)}.${getRandomNumber(0, 9)}%`,
        latency: `${getRandomNumber(30, 60)}ms`,
        bandwidth: `${getRandomNumber(500, 999)} Mbps`
      },
      resources: {
        cpu: getRandomNumber(40, 90),
        storage: getRandomNumber(50, 95)
      },
      teamVelocity: {
        sprintPoints: getRandomNumber(25, 45),
        burndown: getRandomNumber(40, 80)
      },
      systemMetrics: {
        uptime: `${getRandomNumber(98, 99)}.${getRandomNumber(0, 9)}%`,
        errorRate: `${getRandomNumber(0, 2)}.${getRandomNumber(0, 9)}%`
      }
    });
    
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f172a] to-black p-4">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-300"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        </div>
        {/* Futuristic grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced header */}
        <div className="mb-8 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-20 animate-pulse"></span>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2 mt-6 relative">
              Analytics Overview
            </h1>
          </div>
          <p className="text-gray-400 text-xs">
            Real-time insights into your team's performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { icon: FaChartLine, title: "Weekly Tasks", value: data.stats.weeklyTasks, gradient: "from-pink-600 to-purple-600", iconColor: "text-purple-400", bgGradient: "from-pink-500/10 to-purple-500/10", border: "border-purple-500/20" },
            { icon: FaUsers, title: "Active Members", value: data.stats.activeTeamMembers, gradient: "from-blue-600 to-purple-600", iconColor: "text-blue-400", bgGradient: "from-blue-500/10 to-purple-500/10", border: "border-blue-500/20" },
            { icon: FaCheckCircle, title: "Completion Rate", value: data.stats.completionRate, gradient: "from-green-600 to-blue-600", iconColor: "text-green-400", bgGradient: "from-green-500/10 to-blue-500/10", border: "border-green-500/20" },
            { icon: FaClock, title: "Avg Time", value: data.stats.avgCompletionTime, gradient: "from-purple-600 to-pink-600", iconColor: "text-pink-400", bgGradient: "from-purple-500/10 to-pink-500/10", border: "border-pink-500/20" }
          ].map((item, index) => (
            <div key={index} className="relative group h-[100px] perspective-1000">
              <div className="absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-full bg-gray-900 rounded-lg p-3 border border-gray-800 hover:border-opacity-50 transition-all duration-300 backdrop-blur-3xl">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.bgGradient} border ${item.border} flex items-center justify-center ${item.iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-sm" />
                    </span>
                    <div>
                      <h3 className="text-gray-400 text-xs font-medium">{item.title}</h3>
                      <p className="text-xl font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                  <div className="h-0.5 w-full bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three Column Layout for Additional Components */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* System Status */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaServer className="text-blue-400" />
                System Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">Server Load</span>
                  <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse transition-all duration-300"
                         style={{ width: `${data.systemStatus.serverLoad}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">Memory Usage</span>
                  <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 animate-pulse transition-all duration-300"
                         style={{ width: `${data.systemStatus.memoryUsage}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaBell className="text-pink-400" />
                Recent Activity
              </h3>
              <div className="space-y-2">
                {data.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <span className={`w-1.5 h-1.5 bg-${activity.type}-400 rounded-full`}></span>
                    <span className="text-gray-400">{activity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Overview */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-green-400" />
                Security Overview
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">System Security</span>
                  <span className="text-green-400">Protected</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Last Scan</span>
                  <span className="text-blue-400">{data.security.lastScan}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Threats Blocked</span>
                  <span className="text-purple-400">{data.security.threatsBlocked}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Network Status */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaNetworkWired className="text-yellow-400" />
                Network Status
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Uptime</span>
                  <span className="text-green-400">{data.network.uptime}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Latency</span>
                  <span className="text-blue-400">{data.network.latency}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Bandwidth</span>
                  <span className="text-purple-400">{data.network.bandwidth}</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaBrain className="text-purple-400" />
                AI Insights
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span className="text-gray-400">Productivity peak: 10 AM - 2 PM</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span className="text-gray-400">Suggested task optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span className="text-gray-400">Team performance trending up</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Usage */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaDatabase className="text-cyan-400" />
                Resource Usage
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">CPU</span>
                  <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse transition-all duration-300"
                         style={{ width: `${data.resources.cpu}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">Storage</span>
                  <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse transition-all duration-300"
                         style={{ width: `${data.resources.storage}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Velocity */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaUserAstronaut className="text-indigo-400" />
                Team Velocity
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Sprint Points</span>
                  <div className="flex items-center gap-1">
                    <span className="text-indigo-400">↑</span>
                    <span className="text-indigo-400">{data.teamVelocity.sprintPoints} pts</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Burndown</span>
                  <div className="w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 animate-pulse transition-all duration-300"
                         style={{ width: `${data.teamVelocity.burndown}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 rounded-lg p-3 border border-gray-800">
              <h3 className="text-xs font-semibold text-white mb-2 flex items-center gap-2">
                <FaCogs className="text-emerald-400" />
                System Metrics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center justify-center bg-gray-800/50 rounded p-2">
                  <span className="text-emerald-400 text-sm font-bold">{data.systemMetrics.uptime}</span>
                  <span className="text-gray-400 text-[10px]">Uptime</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-800/50 rounded p-2">
                  <span className="text-teal-400 text-sm font-bold">{data.systemMetrics.errorRate}</span>
                  <span className="text-gray-400 text-[10px]">Error Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="fixed bottom-12 right-12 z-60">
            <button 
              className="relative group"
              onClick={refreshData}
              disabled={isRefreshing}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className={`relative p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-purple-200 transition-all duration-300 ${isRefreshing ? 'animate-spin' : 'animate-none'}`}>
                <FaRocket className={`text-purple-400 text-lg ${isRefreshing ? '' : 'animate-bounce'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 