
import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Users, 
  ChevronDown,
  Clock,
  Target,
  FileText,
  Zap
} from 'lucide-react';

const AlignoDashboard = () => {
  const [activeView, setActiveView] = useState('List View');

  const views = ['List View', 'Kanban', 'Calendar', 'Add View'];

  const tasks = [
    {
      id: 1,
      title: 'Paperwork and administration',
      description: 'Here you can find info about your payment information...',
      status: 'In Review',
      color: 'bg-orange-500',
      dueDate: '24 October',
      avatars: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format', 'https://images.unsplash.com/photo-1494790108755-2616b9e65088?w=32&h=32&fit=crop&crop=face&auto=format']
    },
    {
      id: 2,
      title: 'Strategy and Planning',
      description: 'Develop comprehensive strategy for market expansion...',
      status: 'In Progress',
      color: 'bg-yellow-500',
      dueDate: '19 October',
      avatars: ['https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face&auto=format']
    },
    {
      id: 3,
      title: 'Website goals',
      description: 'Starting with what music industry audience is more likely to go directly to...',
      status: 'In Review',
      color: 'bg-green-500',
      dueDate: '19 October',
      avatars: ['https://images.unsplash.com/photo-1580489944761-15a19d654956?w=32&h=32&fit=crop&crop=face&auto=format', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format']
    },
    {
      id: 4,
      title: 'First layout & Interactive',
      description: 'Design initial wireframes and interactive prototypes...',
      status: 'Design',
      color: 'bg-blue-500',
      dueDate: '25 October',
      avatars: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format']
    }
  ];

  return (
    <div className="h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main Container with Enhanced Shadow */}
      <div className="relative z-10 h-full"
           style={{
             filter: 'drop-shadow(0 0 50px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 100px rgba(59, 130, 246, 0.2))',
           }}>
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4 flex items-center justify-between relative"
           style={{
             boxShadow: '0 0 30px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
           }}>
        <div className="flex items-center space-x-4">
          <div className="text-slate-400 text-sm animate-fade-in">Progress Tracking</div>
        </div>
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 animate-fade-in delay-300"
                style={{
                  boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)'
                }}>
          Buy Template
        </button>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800/30 backdrop-blur-sm border-r border-slate-700/50 p-4 relative animate-slide-in-left"
             style={{
               boxShadow: 'inset 0 0 30px rgba(59, 130, 246, 0.1), 0 0 50px rgba(59, 130, 246, 0.15)'
             }}>
          {/* Aligno Brand */}
          <div className="flex items-center space-x-2 mb-8 animate-fade-in delay-100">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                 style={{
                   boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                 }}>
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold">Aligno</span>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search"
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <div className="text-slate-500 text-xs uppercase font-medium mb-3">Menu</div>
            <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-all">
              <FileText className="w-4 h-4" />
              <span>Files</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-all">
              <Target className="w-4 h-4" />
              <span>Project</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-all">
              <Clock className="w-4 h-4" />
              <span>Time tracking</span>
            </a>
          </nav>

          {/* Projects */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-xs uppercase font-medium">Projects</span>
              <Plus className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-all cursor-pointer">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Client</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </div>
              <div className="flex items-center space-x-2 text-white bg-slate-700/50 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Website</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-all cursor-pointer">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Website Sprint</span>
              </div>
            </div>
          </div>

          {/* Creative Collaboration */}
          <div className="mt-8 animate-fade-in delay-700">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:scale-105 transition-all duration-300"
                 style={{
                   boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                 }}>
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-purple-300 text-sm font-medium">Creative Collaboration</span>
              </div>
              <p className="text-slate-300 text-xs">Enhance your team's creative process with AI-powered tools</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col animate-slide-in-right">
          {/* Project Header */}
          <div className="bg-slate-800/30 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4"
               style={{
                 boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.1)'
               }}>
            <div className="flex items-center justify-between animate-fade-in delay-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                  <span className="text-slate-400">Client</span>
                  <span className="text-slate-600">›</span>
                  <span className="text-slate-400">Mobile</span>
                  <span className="text-slate-600">›</span>
                  <span className="text-white font-medium">Website</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Plus className="w-4 h-4 text-slate-400" />
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format" alt="User" className="w-6 h-6 rounded-full border-2 border-slate-800" />
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b9e65088?w=24&h=24&fit=crop&crop=face&auto=format" alt="User" className="w-6 h-6 rounded-full border-2 border-slate-800" />
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=24&h=24&fit=crop&crop=face&auto=format" alt="User" className="w-6 h-6 rounded-full border-2 border-slate-800" />
                  </div>
                  <span className="text-slate-400 text-sm">View</span>
                  <Search className="w-4 h-4 text-slate-400" />
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Title */}
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-white mb-4">Website</h1>
            
            {/* View Tabs */}
            <div className="flex items-center space-x-6 mb-6">
              {views.map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`text-sm font-medium pb-2 border-b-2 transition-all ${
                    activeView === view 
                      ? 'text-white border-blue-500' 
                      : 'text-slate-400 border-transparent hover:text-white'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4 mb-6">
              <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-all">
                <Filter className="w-4 h-4" />
                <span>Filter (1)</span>
              </button>
              <button className="flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all">
                <Plus className="w-4 h-4" />
                <span>Add Task</span>
              </button>
              <button className="flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all">
                <span>Customize</span>
              </button>
            </div>

            {/* AI Integration Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-4 py-2">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">AI Integration</span>
              </div>
            </div>
          </div>

          {/* Task Cards */}
          <div className="flex-1 px-6 pb-6 animate-fade-in delay-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tasks.map((task, index) => (
                <div key={task.id} 
                     className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-slate-600/50 transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in"
                     style={{
                       boxShadow: '0 0 25px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                       animationDelay: `${600 + index * 100}ms`
                     }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-3 h-3 rounded-full ${task.color} animate-pulse`}
                         style={{
                           boxShadow: `0 0 10px ${task.color.includes('orange') ? 'rgba(249, 115, 22, 0.6)' : 
                                                  task.color.includes('yellow') ? 'rgba(234, 179, 8, 0.6)' :
                                                  task.color.includes('green') ? 'rgba(34, 197, 94, 0.6)' :
                                                  'rgba(59, 130, 246, 0.6)'}`
                         }}></div>
                    <MoreHorizontal className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-white font-medium mb-2">{task.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{task.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-xs">{task.dueDate}</span>
                    </div>
                    <div className="flex -space-x-2">
                      {task.avatars.map((avatar, index) => (
                        <img 
                          key={index}
                          src={avatar} 
                          alt="User" 
                          className="w-6 h-6 rounded-full border-2 border-slate-800" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-xs">{task.status}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                        <span className="text-slate-400 text-xs">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center py-6 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm">Trusted by 2 million+ teams</p>
          </div>
        </div>
      </div>

      </div>

      {/* Activate Windows Watermark */}
      <div className="absolute bottom-4 right-4 text-slate-500 text-sm opacity-50 animate-fade-in delay-1000">
        <div>Activate Windows</div>
        <div className="text-xs">Go to Settings to activate Windows.</div>
      </div>

      {/* Get all templates button */}
      <div className="absolute bottom-4 right-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:scale-105 transition-all animate-fade-in delay-1200"
           style={{
             boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)'
           }}>
        <span className="text-slate-300 text-sm">Get all temp</span>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1200 { animation-delay: 1200ms; }
      `}</style>
    </div>
  );
};

export default AlignoDashboard;

// const LightEffect = () => {
//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
//       <div
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px'
//         }}
//       />

//       <div
//         className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px opacity-60"
//         style={{
//           height: '60vh',
//           background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 168, 168, 0.6) 20%, rgba(255, 224, 102, 0.4) 40%, rgba(255, 159, 67, 0.3) 60%, transparent 100%)',
//           filter: 'blur(1px)',
//           animation: 'lightBeamPulse 3s ease-in-out infinite'
//         }}
//       />

//       <div
//         className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-30"
//         style={{
//           width: '2px',
//           height: '60vh',
//           background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 168, 168, 0.4) 20%, rgba(255, 224, 102, 0.2) 40%, rgba(255, 159, 67, 0.1) 60%, transparent 100%)',
//           filter: 'blur(2px)',
//           animation: 'lightBeamPulse 3s ease-in-out infinite 0.5s'
//         }}
//       />

//       <div
//         className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20"
//         style={{
//           width: '200px',
//           height: '60vh',
//           background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 30%)',
//           clipPath: 'polygon(49% 0%, 51% 0%, 60% 100%, 40% 100%)',
//           animation: 'lightBeamPulse 4s ease-in-out infinite 1s'
//         }}
//       />

//       <div
//         className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-80"
//         style={{
//           background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 168, 168, 0.6) 30%, rgba(255, 224, 102, 0.4) 60%, transparent 100%)',
//           filter: 'blur(4px)',
//           animation: 'lightSourcePulse 2s ease-in-out infinite'
//         }}
//       />

//       {/* <div
//         className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-15"
//         style={{
//           width: '600px',
//           height: '80vh',
//           background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 168, 168, 0.1) 20%, transparent 40%)',
//           clipPath: 'polygon(45% 0%, 55% 0%, 70% 100%, 30% 100%)',
//           filter: 'blur(3px)',
//           animation: 'lightBeamPulse 5s ease-in-out infinite 1.5s'
//         }}
//       /> */}

//       <div
//         className="absolute top-0 left-[72%] transform -translate-x-1/2 opacity-15"
//         style={{
//           width: '1000px', // wider beam
//           height: '80vh', // slightly taller
//           background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.2) 0%, rgba(79, 195, 247, 0.1) 30%, transparent 60%)',
//           clipPath: 'polygon(42% 0%, 58% 0%, 75% 100%, 25% 100%)', // wider torch shape
//           filter: 'blur(6px)', // stronger blur for softness
//           animation: 'lightBeamPulse 5s ease-in-out infinite 1.5s',
//         }}
//       />


//       <div className="relative z-10 text-center">
//         <div className="relative">
//           <div
//             className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
//             style={{
//               width: '150%',
//               height: '150%',
//               background: `radial-gradient(
//                 ellipse at center,
//                 rgba(255, 107, 107, 0.3) 0%,
//                 rgba(255, 168, 168, 0.2) 30%,
//                 rgba(255, 224, 102, 0.1) 60%,
//                 transparent 80%
//               )`
//             }}
//           />

//           <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:-top-14">
//             <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base text-white/90 flex items-center gap-2">
//               <span className="text-lg">✨</span>
//               <span>New AI Feature</span>
//             </div>
//           </div>

//           <div className="relative">
//             <h1
//               className="text-6xl md:text-8xl lg:text-9xl font-bold relative z-10"
//               style={{
//                 background: 'linear-gradient(45deg, #ff6b6b, #ffa8a8, #ffe066, #ff9f43, #ff6b6b)',
//                 backgroundSize: '300% 300%',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 animation: 'gradientShift 3s ease-in-out infinite',
//                 textShadow: '0 0 30px rgba(255, 107, 107, 0.5)'
//               }}
//             >
//               Aligno
//             </h1>

//             <div
//               className="absolute top-0 left-0 w-full h-full text-6xl md:text-8xl lg:text-9xl font-bold blur-sm opacity-70 -z-10"
//               style={{
//                 background: 'linear-gradient(45deg, #ff6b6b, #ffa8a8, #ffe066, #ff9f43, #ff6b6b)',
//                 backgroundSize: '300% 300%',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 animation: 'gradientShift 3s ease-in-out infinite'
//               }}
//             >
//               Aligno
//             </div>
//           </div>

//           <div className="absolute inset-0">
//             {[...Array(100)].map((_, i) => (
//               <div
//                 key={i}
//                 className={`absolute w-1 h-1 bg-white rounded-full opacity-0 animate-pulse`}
//                 style={{
//                   top: `${[20, 30, 70, 65, 15, 80][i]}%`,
//                   left: `${[15, 80, 25, 85, 50, 55][i]}%`,
//                   animation: `sparkleAnimation 2s ease-in-out infinite ${i * 0.3}s`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         <p className="mt-8 text-lg md:text-xl text-white/70 font-light tracking-wider max-w-2xl mx-auto px-4">
//           Prioritise What Matters - Streamline Your Workflow and Focus on What Drives Success!
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes gradientShift {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
        
//         @keyframes sparkleAnimation {
//           0%, 100% {
//             opacity: 0;
//             transform: scale(0);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         @keyframes pulse {
//           0% {
//             transform: translate(-50%, -50%) scale(1);
//             opacity: 0.3;
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1.1);
//             opacity: 0.1;
//           }
//         }
        
//         @keyframes lightBeamPulse {
//           0%, 100% {
//             opacity: 0.6;
//             transform: translateX(-50%) scaleY(1);
//           }
//           50% {
//             opacity: 0.8;
//             transform: translateX(-50%) scaleY(1.05);
//           }
//         }
        
//         @keyframes lightSourcePulse {
//           0%, 100% {
//             opacity: 0.8;
//             transform: translateX(-50%) scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: translateX(-50%) scale(1.2);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LightEffect;